// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Router
// } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { Observable } from 'rxjs';
// import { take, map, tap } from 'rxjs/operators';
// import { ToastController } from '@ionic/angular';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginGuard implements CanActivate {
//   constructor(public auth: AuthService, public router: Router, public toastController: ToastController) { }

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> {
//     return this.auth.afAuth.authState
//       .pipe(
//         take(1),
//         map(authState => !!authState),
//         tap(auth => !auth ? this.router.navigate(['login']) && this.UnSignToast() : this.router.navigate(['list']))
//       );
//   }

//   // this.user$ = this.afAuth.authState.pipe(
//   //   switchMap(user => {
//   //     if (user) {
//   //       localStorage.setItem('user', JSON.stringify(this.user$));
//   //       JSON.parse(localStorage.getItem('user'));
//   //       return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
//   //     } else {
//   //       JSON.parse(localStorage.getItem('user'));
//   //       return localStorage.setItem('user', null);
//   //     }

//   async UnSignToast() {
//     const toast = await this.toastController.create({
//       header: 'Authentication Message',
//       cssClass: 'unsign',
//       message: 'You must Be Logged In to view',
//       position: 'top',
//       showCloseButton: true,
//       translucent: true,

//     });
//     toast.present();
//   }
// }
