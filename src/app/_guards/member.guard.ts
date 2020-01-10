import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
  } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Injectable } from '@angular/core';
import {
  map,
  take,
  tap
} from 'rxjs/operators';
import { MessageService } from '@services/message.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MemberGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private message: MessageService
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.user.pipe(
      take(1),
      tap(user => user && (user.bronze | user.silver | user.gold) ? true : false),
      map(isMember => {
        if (!isMember) {
          this.message.needPaymentAlert();
          this.router.navigateByUrl('/purchase');
          return false;
        } else {
        return true;
        }
      })
    );
  }
}
