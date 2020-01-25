import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { MessageService } from '../_services/message.service';
import { Observable } from 'rxjs';

@Injectable()
export class CanReadGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private message: MessageService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => (user && this.auth.canRead(user) ? true : false)), // <-- important line
      tap(canView => {
        if (!canView) {
          this.message.needPaymentAlert();
          this.router.navigateByUrl('/purchase');
        }
      })
    );
  }
}
