import { catchError, retry } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Widget } from '@models/widget';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // API path
  base_path = 'http://localhost:3000/students';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  // Create a new item
  createItem(item): Observable<Widget> {
    return this.http
      .post<Widget>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get single widget data by ID
  getItem(id): Observable<Widget> {
    return this.http
      .get<Widget>(this.base_path + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get students data
  getList(): Observable<Widget> {
    return this.http
      .get<Widget>(this.base_path)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Update item by id
  updateItem(id, item): Observable<Widget> {
    return this.http
      .put<Widget>(
        this.base_path + '/' + id,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Widget>(this.base_path + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
