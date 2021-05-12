import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MessageService } from '../_services/message.service';

@Injectable({
  providedIn: 'root'
})
export class PaidGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private message: MessageService
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // const bronze = await this.authService.bronze();
    // const silver = await this.authService.silver();
    // const gold = await this.authService.gold();
    const isMember = !!(this.authService.bronze ||this.authService.gold ||this.authService.silver);

    if (!isMember) {
      this.message.needPaymentAlert();
      this.router.navigateByUrl('/purchase');
    } else {
      return isMember;
    }
  }
}
