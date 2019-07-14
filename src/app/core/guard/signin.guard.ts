import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
// import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      alert('You must login to view');
      this.router.navigate(['sign-up']);
    }
    return true;
  }
}
