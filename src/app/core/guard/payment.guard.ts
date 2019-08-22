import { Injectable, Input } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap, map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuard implements CanActivate {
  @Input() user;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }


  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    const user = await this.authService.getUser();
    const loggedIn = !!user;

    if (!loggedIn) {
      // do something
    }

    return loggedIn;
  }
}

