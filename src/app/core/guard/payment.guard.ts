import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { User  } from '../models/user';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuard implements CanActivate {
  user: User;

  constructor(
    public auth: AuthService,
    public router: Router,
    public toaster: ToastController
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return true;
  }
}
