import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { MessageService } from '@services/message.service';

@Injectable({
  providedIn: 'root'
})

export class PreventBuyGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private message: MessageService
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const isMember = !!(this.auth.bronze || this.auth.gold || this.auth.silver);

    if (!isMember) {
      return true;
    } else {
      this.message.alreadySubscribedToast();
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
