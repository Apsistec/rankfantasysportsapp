import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableResolved } from '../_models/table.model';
import { TableService } from './table.service';

@Injectable({
  providedIn: 'root'
})
export class TableResolver implements Resolve<TableResolved> {
  constructor(private tableService: TableService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TableResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Table id was not a number: ${id}`;
      return of({ table: null, error: message });
    }

    //   return this.tableService.getTable()
    //   .pipe(
    //     map(table => ({ table })),
    //     catchError(error => {
    //       const message = `Retrieval error: ${error}`;
    //       return of({ table: null, error: message });
    //     })
    //   );
    // }
  }
  // import {
  //   ActivatedRouteSnapshot,
  //   Resolve,
  //   RouterStateSnapshot
  // } from '@angular/router';
  // import { catchError, map } from 'rxjs/operators';
  // import { Injectable } from '@angular/core';
  // import { Observable, of } from 'rxjs';
  // import { TableResolved } from '../_models/table.model';
  // import { TableService } from './table.service';

  // @Injectable({
  //   providedIn: 'root'
  // })
  // export class TableResolver implements Resolve<TableResolved> {

  //   constructor(
  //     private tableService: TableService
  //   ) {}

  //   resolve(
  //     route: ActivatedRouteSnapshot,
  //     state: RouterStateSnapshot
  //   ): Observable<TableResolved> {
  //     const id = route.paramMap.get('id');
  //     if (isNaN(+id)) {
  //       const message = `Table id was not a number: ${id}`;
  //       return of({ table: null, error: message });
  //     }

  //     return this.tableService.getTable(+id)
  //     .pipe(
  //       map(table => ({ table })),
  //       catchError(error => {
  //         const message = `Retrieval error: ${error}`;
  //         return of({ table: null, error: message });
  //       })
  //     );
  //   }
}
