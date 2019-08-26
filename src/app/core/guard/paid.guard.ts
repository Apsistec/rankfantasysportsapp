    
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
    const isMember = !!bronze;

    if (!isMember) {
      const alert = await this.alertController.create({
        header: 'Security Alert',
        subHeader: 'Pro Members only',
        message: 'Purchase one of the RF$ Pro Memberships for immediate access.',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigateByUrl('/pricing');
    }

    return isMember;
  }
}
