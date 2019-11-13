import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { MessageService } from '../services/message.service';

@Injectable({
    providedIn: 'root'
})

export class InnerGuard implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router,
    private message: MessageService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.auth.isLoggedIn) {
        this.message.internalBlockPageAlert();
        this.router.navigate(['/home']);
      }
      return true;
  }
}
