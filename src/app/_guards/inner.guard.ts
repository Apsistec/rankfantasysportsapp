import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Observable } from 'rxjs';
import { MessageService } from '@services/message.service';

@Injectable({
    providedIn: 'root'
})

export class InnerGuard implements CanActivate {

  constructor(
    public auth: AuthService,
    public router: Router,
    private message: MessageService
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      
  const user = await this.auth.getCurrentUser();
      
      if ( user ) {
        this.message.internalBlockPageAlert();
        this.router.navigate(['/home']);
      }
      return false;
  }
}
