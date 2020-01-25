<<<<<<< Updated upstream
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
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
=======
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Table } from '@models/table.model';
import { HttpErrorHandler, HandleError } from '@services/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class TableService {
  // tslint:disable-next-line: quotemark
  tableUrl = "https://graph.microsoft.com/v1.0/me/drive/items/E6DAB4F84D6D7119!748/workbook/worksheets('Thru 01.20.20')/usedRange?$format=json";  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET Table from the server */
  getTable(): Observable<Table[]> {
    return this.http.get<Table[]>(this.tableUrl)
      .pipe(
        catchError(this.handleError('getTable', []))
      );
  }

  // /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<Table[]> {
  //   term = term.trim();

  //   // Add safe, URL encoded search parameter if there is a search term
  //   const options = term ?
  //    { params: new HttpParams().set('name', term) } : {};

  //   return this.http.get<Table[]>(this.heroesUrl, options)
  //     .pipe(
  //       catchError(this.handleError<Table[]>('searchHeroes', []))
  //     );
  // }

  // //////// Save methods //////////

  // /** POST: add a new hero to the database */
  // addHero (hero: Table): Observable<Table> {
  //   return this.http.post<Table>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }

  // /** DELETE: delete the hero from the server */
  // deleteHero (id: number): Observable<{}> {
  //   const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
  //   return this.http.delete(url, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('deleteHero'))
  //     );
  // }

  // /** PUT: update the hero on the server. Returns the updated hero upon success. */
  // updateHero (hero: Table): Observable<Table> {
  //   httpOptions.headers =
  //     httpOptions.headers.set('Authorization', 'my-new-auth-token');

  //   return this.http.put<Table>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('updateHero', hero))
  //     );
  // }
>>>>>>> Stashed changes
}
