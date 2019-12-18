import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MessageService } from '../_services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private message: MessageService,
  ) { }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise <boolean> {
    const uid = await this.auth.uid();
    const isLoggedIn = !!uid;

      if (!isLoggedIn) {
        this.message.unauthenticatedAlert();
        this.router.navigateByUrl('/login');
      } else {
        return isLoggedIn;
      }
  }
}
