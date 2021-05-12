import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Table } from '../_models/table.model';

// tslint:disable: prefer-conditional-expression

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private tablesUrl = 'api/tables';

  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.tablesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getTable(id: number): Observable<Table> {
    if (id === 0) {
      return of(this.initializeTable());
    }
    const url = `${this.tablesUrl}/${id}`;
    return this.http.get<Table>(url)
      .pipe(
        tap(data => console.log('getTable: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createTable(table: Table): Observable<Table> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    table.id = null;
    return this.http.post<Table>(this.tablesUrl, table, { headers })
      .pipe(
        tap(data => console.log('createTable: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteTable(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.tablesUrl}/${id}`;
    return this.http.delete<Table>(url, { headers })
      .pipe(
        tap(data => console.log('deleteTable: ' + id)),
        catchError(this.handleError)
      );
  }

  updateTable(table: Table): Observable<Table> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.tablesUrl}/${table.id}`;
    return this.http.put<Table>(url, table, { headers })
      .pipe(
        tap(() => console.log('updateTable: ' + table.id)),
        // Return the table on an update
        map(() => table),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeTable(): Table {
    // Return an initialized object
    return {
      id: 0,
      tableName: null,
      tableCode: null,
      category: null,
      tags: [],
      releaseDate: null,
      description: null,
      starRating: null,
    };
  }
}
