import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router, public toastController: ToastController) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.afAuth.authState
      .pipe(
        take(1),
        map(authState => !!authState),
        tap(auth => !auth ? this.router.navigate(['sign-in']) && this.UnSignToast() : this.router.navigate(['profile']))
      );
    }
  async UnSignToast() {
    const toast = await this.toastController.create({
      header: 'Authentication Message',
      cssClass: 'unsign',
      message: 'You must Be Signed In to view',
      position: 'top',
      showCloseButton: true,
      translucent: true,

    });
    toast.present();
  }
}
