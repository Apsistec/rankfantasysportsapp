import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PaidGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private alertController: AlertController,
    private router: Router,
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const bronze = await this.auth.bronze();
    const silver = await this.auth.silver();
    const gold = await this.auth.gold();
    const isMember = (!!bronze || !!gold || !!silver);

    if (!isMember) {
      const alert = await this.alertController.create({
        header: 'Security Alert',
        subHeader: 'Pro Members only',
        message: 'Purchase one of the RF$ Pro Memberships for immediate access.',
        buttons: ['OK'],
        cssClass: 'alertCustomCss'
      });
      alert.present();
      this.router.navigateByUrl('/purchase');
    }
    return isMember;
  }
}
