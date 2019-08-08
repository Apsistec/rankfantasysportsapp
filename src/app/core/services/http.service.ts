import { HttpClientModule } from '@angular/http/client';


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClientModule) { }
}
