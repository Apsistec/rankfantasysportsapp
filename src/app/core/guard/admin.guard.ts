import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Roles } from '../models/user';

@Injectable()
export class AdminGuard implements CanActivate {
  user: User;
  roles: Roles;
  constructor(private auth: AuthService) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    const user = await this.auth.getUser();
    const loggedIn = !!user;

    if (!loggedIn) {
      // do something
    }

    return loggedIn;
  }
}

