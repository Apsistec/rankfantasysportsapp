import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap, map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean> {

    return this.auth.user$.pipe(
      take(1),
      map(user => {
        if (!user) {
          this.router.navigateByUrl('/home');
          return false;
        } else {
          const roles = user['roles'];
          if (roles === 'paid') {
            return true;
          } else {
            this.router.navigateByUrl('auth');
            return false;
          }
        }
      })
    );
  }
}
