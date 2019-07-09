import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService} from '../auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class InnerGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) {
      window.alert('You are already logged-in!');
      this.router.navigate(['list'])
    }
    return true;
  }
}
