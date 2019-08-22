// import { Injectable } from '@angular/core';
// import * as firebase from 'firebase/app';
// import { auth } from 'firebase/app';
// import { Router } from '@angular/router';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenService {

//   constructor(
//     private router: Router,
//     private authService: AuthService,
//   ) { }


//   async getUserClaims() {
//     firebase.auth().currentUser.getIdTokenResult()
//       .then((idTokenResult) => {
//         // Confirm the user as paid.
//         if (!!idTokenResult.claims.visitor) {
//           // Show paid UI.
//           this.router.navigateByUrl('/list'), { queryParams: { returnUrl: state.url }};
//         } else {
//           // Show regular user UI.
//           this.router.navigateByUrl('/pricing'), { queryParams: { returnUrl: state.url }};;
//           this.authService.needPaymentToast();
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

// }
