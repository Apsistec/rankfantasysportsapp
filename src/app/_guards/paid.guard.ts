import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
  } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { MessageService } from '../_services/message.service';
import { Observable } from 'rxjs';
import { StripeService } from '@services/stripe.service';

@Injectable({
  providedIn: 'root'
})
export class PaidGuard implements CanActivate {
  constructor(
    private stripe: StripeService,
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
      return this.stripe.subscriptions.pipe(
        take(1),
        map(paidSub => {
          if (!paidSub) {
            this.router.navigateByUrl('/membership');
            return false;
          } else {
            return true;
          }
        })
      )
    }
}
