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
      const alert = await this.alertController.create({
        header: 'Security Alert',
        subHeader: 'Authenticated Users Only',
        message: 'You need to Login or Register an Account for access',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigateByUrl('/register');
    }
    return isLoggedIn;
  }
}
