import { PlayerActiveDetail } from '@models/player.model';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable, merge, of } from 'rxjs';
import { switchMap, startWith, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-players-active',
  styleUrls: ['players-active.component.scss'],
  templateUrl: 'players-active.component.html'
})
export class PlayersActiveComponent implements AfterViewInit {
  dataSource: PlayerActiveDetail[] = [];

  displayedColumns: string[] = [
    'playerid',
    'status',
    'teamid',
    'team',
    'jersey',
    'positioncategory',
    'position',
    'firstname',
    'lastname',
    'height',
    'weight',
    'birthdate',
    'birthcity',
    'birthstate',
    'birthcountry',
    'highschool',
    'college',
    'salary',
    'experience',
    'injurystatus'
  ];

  statsDb: StatsHttpDb | null;

  resultsLength;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.statsDb = new StatsHttpDb(this.http);

    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.statsDb.getStats(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          // this.resultsLength = data.total_count;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          // this.isRateLimitReached = true;
          return of([]);
        })
      ).subscribe(data => this.dataSource = data);
  }
}



/** An example database that the data source uses to retrieve data for the table. */
export class StatsHttpDb {

  constructor(private http: HttpClient) {}

  getStats(
    sort: string,
    order: string,
    page: number
  ): Observable<PlayerActiveDetail[]> {
    const href =
      'https://api.sportsdata.io/v3/nba/scores/json/Players?key=a2ae2457338448dba5170d919f7958ef';
    const requestUrl = `${href}&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get<any>(requestUrl);

  }
  // .get<PlayerActiveDetail[]>(requestUrl);
      // .pipe(map(data => (this.dataSource = data)));
  }
