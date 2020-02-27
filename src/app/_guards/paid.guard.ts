import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
  } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { MessageService } from '../_services/message.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { User as fullUser } from '@models/user';

@Injectable({
  providedIn: 'root'
})
export class PaidGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private message: MessageService,
    private afs: AngularFirestore
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return this.afs.doc<fullUser>(`users/${this.auth.currentUserId}`).valueChanges().pipe(
        take(1),
        map(user=> {
          if(!user) {
            this.message.needPaymentAlert();
            this.router.navigateByUrl('/membership');
            return false;
          } else if(!user.status) {
            this.message.needPaymentAlert();
            this.router.navigateByUrl('/membership');
            return false;
          } else if(user.status === ('active' || 'trialing')) {
            return true;
          }
        })
      )
    }
}
