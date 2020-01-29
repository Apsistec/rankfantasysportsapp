import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Table } from '@models/table.model';
import {
  HttpErrorHandler,
  HandleError
} from '@services/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class TableService {
  // tslint:disable-next-line: quotemark
  tableUrl =
    "https://graph.microsoft.com/v1.0/me/drive/items/E6DAB4F84D6D7119!748/workbook/worksheets('Thru 01.20.20')/usedRange?$format=json"; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET Table from the server */
  getTable(): Observable<Table[]> {
    return this.http
      .get<Table[]>(this.tableUrl)
      .pipe(catchError(this.handleError('getTable', [])));
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
}
