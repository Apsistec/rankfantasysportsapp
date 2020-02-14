import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { MessageService } from '../_services/message.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaidMemberGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private message: MessageService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        if (!user) {
          this.router.navigateByUrl('/login');
          return false;
        } else {
          if (user.plan && (user.plan === 'gold' || 'silver' || 'bronze')) {
            return true;
          } else {
            this.message.needPaymentAlert();
            this.router.navigateByUrl('/purchase');
            return false;
          }
        }
      })
    );
  }
}
