import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InnerGuard implements CanActivate {
  user$: Observable<any>;
  constructor(
    private authService: AuthService,
    private router: Router,
    public toaster: ToastController
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const loggedIn = await this.authService.isLoggedIn;
    if (!loggedIn) {
      this.authService.isLoggedInToast();
      this.router.navigateByUrl('/home');
    }
    return loggedIn;
  }


}
