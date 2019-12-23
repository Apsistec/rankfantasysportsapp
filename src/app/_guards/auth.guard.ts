import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { MessageService } from '@services/message.service';

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
    const user = await this.auth.getUser();
    const isLoggedIn = !!user.uid;

      if (!isLoggedIn) {
        this.message.unauthenticatedAlert();
        this.router.navigateByUrl('/login');
      } else {
        return isLoggedIn;
      }
  }
}
