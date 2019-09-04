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
    private alertController: AlertController,
  ) { }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise <boolean> {

    const uid = await this.auth.uid();
    const isLoggedIn = !!uid;

      if (!isLoggedIn) {
        const loginAlert = await this.alertController.create({
          header: 'Login First',
          subHeader: 'Authenticated Users Only',
          message: 'First, You need to Login or Register an Account in order to access this page',
          buttons: ['OK'],
          cssClass: 'loginAlertCss'
        });
        loginAlert.present();
        return this.router.navigateByUrl('/auth/register');
      } else {
        return isLoggedIn;
      }
  }
}
