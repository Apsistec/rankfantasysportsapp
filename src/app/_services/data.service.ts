import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, range, timer, zip } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { retryWhen, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
  

  // function backoff(maxTries, ms) {
  //   return pipe(
  //     retryWhen(attempts => zip(range(1, maxTries), attempts)
  //       .pipe(
  //         map(([i]) => i * i),
  //         mergeMap(i =>  timer(i * ms))
  //       )
  //     )
  //   );
  //  }
   
  //  ajax('/api/endpoint')
  //    .pipe(backoff(3, 250))
  //    .subscribe(data => handleData(data));
   
  //  function handleData(data) {
  //    // ...
  //  }
}