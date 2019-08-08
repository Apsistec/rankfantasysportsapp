import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor(private http: HttpClient) { }
}
