import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private alert: AlertController,
  ) { }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise <boolean> {

    const uid = await this.auth.uid();
    const isLoggedIn = !!uid;

      if (!isLoggedIn) {
        const loginAlert = await this.alert.create({
          header: 'Login First',
          subHeader: 'Authenticated Users Only',
          message: 'Login or Register an Account in order to access this page',
          buttons: ['OK'],
          cssClass: 'danger'
        });
        loginAlert.present();
        return this.router.navigateByUrl('/purchase');
      } else {
        return isLoggedIn;
      }
  }
}
