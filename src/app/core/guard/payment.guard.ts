import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuard implements CanActivate {
  user: User;

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.auth.afAuth.user.pipe(map(user => {
      if (user.metadatastripeCustomerId) {
        this.router.navigate(['launchpage']);
        // return false;
      }
      return true;
    })
    );
  }
}
