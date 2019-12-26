import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from '@services/auth.service';
import { MessageService } from '@services/message.service';

@Injectable({
  providedIn: 'root'
})
export class PaidGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private message: MessageService
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
 
    const user = await this.auth.getCurrentUser();
    const isMember = !!(user.plan === 'gold' || 'silver' || 'bronze');

    if (!isMember) {
      this.message.needPaymentAlert();
      this.router.navigateByUrl('/purchase');
    } else {
      return isMember;
    }
  }
}
