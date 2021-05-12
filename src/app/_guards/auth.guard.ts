import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private router: Router, private afAuth: AngularFireAuth) { }
 
  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      map(user => !!user),
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigateByUrl('/login');
        }
      })
    ); 
  }
}