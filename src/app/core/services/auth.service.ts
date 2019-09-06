import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap, take, map, first } from 'rxjs/operators';
import { DbService } from './db.service';
// import { User } from '../models/user';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  userData: any;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private db: DbService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private toaster: ToastController,
    private ngZone: NgZone

  ) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => (user ? db.doc$(`users/${user.uid}`) : of(null)))
    );
    // this.user$ = this.afAuth.authState.pipe(
    //   switchMap(user => (

    //     user ? db.doc$(`this.userData = user; users/${user.uid}; localStorage.setItem('user', JSON.stringify(userData)); JSON.parse(localStorage.getItem('user'))`) : of(null)
    //   ))
    // );

    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // });

  }


  uid() {
    return this.user$
      .pipe(
        take(1),
        map(u => u && u.uid)
      )
      .toPromise();
  }

  bronze() {
    return this.user$
      .pipe(
        take(1),
        map(user => user && user.bronze)
      )
      .toPromise();
  }

  silver() {
    return this.user$
      .pipe(
        take(1),
        map(user => user && user.silver)
      )
      .toPromise();
  }

  gold() {
    return this.user$
      .pipe(
        take(1),
        map(user => user && user.gold)
      )
      .toPromise();
  }

  async getUser() {
    const user = await this.afAuth.authState.pipe(first()).toPromise();
      return user;
  }

  async isBronze() {
    const bronze = await this.bronze();
    const isPaid = !!bronze;
    if (!isPaid) {
      return false;
    } else {
      return isPaid;
    }
  }
  async isGold() {
    const gold = await this.gold();
    const isPaid = !!gold;
    if (!isPaid) {
      return false;
    } else {
      return isPaid;
    }
  }
  async isSilver() {
    const silver = await this.silver();
    const isPaid = !!silver;
    if (!isPaid) {
      return false;
    } else {
      return isPaid;
    }
  }



  // Update UserData from all providers and login and register
  SetUserData({ uid, email, displayName, photoURL }) {

    const path = `users/${uid}`;

    const data = {
      uid,
      email,
      displayName,
      photoURL,

    };

    return this.db.updateAt(path, data);
  }

  // Update the timestamp field with the value from the server
  // private SetTime() {
  //   this.afs.collection('users').doc('users/${uid}').update({
  //     timestamp: this.afs.firestore.FieldValue.serverTimestamp()
  //   });
  // }

  async presentLoading() {
    const loadingElement = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    loadingElement.present();
  }
  onDismissLoader() {
    return this.loadingCtrl.dismiss();
  }

//   private updateUserData({ uid, email, displayName, photoURL}) {
//     // Sets user data to firestore on login

//     const path = `users/${uid}`;

//     const data = {
//       uid,
//       email,
//       displayName,
//       photoURL
//      };

//     return this.db.updateAt(path, data);
//   }

//   async Login(login: NgForm) {
//     this.presentLoading();
//     const email = login.value.email;
//     const password = login.value.password;
//     return await this.afAuth.auth.signInWithEmailAndPassword(email, password)
//       .then((result) => {
//         /* Call the SendVerificaitonMail() function when new user sign
//         up and returns promise */
//         this.onDismissLoader();
//         this.updateUserData(result.user);
//         this.ngZone.run(() => {
//             this.router.navigate(['/profile']);
//           });
//         }).catch((error) => {
//           window.alert(error.message);
//         });
//       }

//       async Register(register: NgForm) {
//         this.presentLoading();
//         return await this.afAuth.auth.createUserWithEmailAndPassword(register.value.email, register.value.password)
//         .then((result) => {
//         register.reset();
//         this.ngZone.run(() => {
//           this.router.navigate(['/profile']);
//         });
//         this.onDismissLoader();
//         // this.SendVerificationMail();
//         this.updateUserData(result.user);
//       }).catch((error) => {
//         window.alert(error.message);
//     });
//   }


//   // Reset Forgot password
//  async ForgotPassword(resetEmail) {
//     return await this.afAuth.auth.sendPasswordResetEmail(resetEmail)
//     .catch((error) => {
//       window.alert(error.message);
//     });
//   }

//     // Sign out
//   async SignOut() {
//     await this.afAuth.auth.signOut()
//     .then(() => {
//       localStorage.removeItem('user');
//       this.signOutToast();
//       return this.router.navigate(['/home']);
//     });
//   }

//   // Returns true when user is looged in and email is verified
//   get isLoggedIn(): boolean {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return (user !== null && user.emailVerified !== false) ? true : false;
//   }

  SignIn(login: NgForm) {
    this.presentLoading();
    return this.afAuth.auth.signInWithEmailAndPassword(login.value.email, login.value.password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/auth/profile']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
    }

    // Sign up with email/password
  SignUp(register: NgForm) {
    this.presentLoading();
    return this.afAuth.auth.createUserWithEmailAndPassword(register.value.email, register.value.password)
      .then((result) => {
        this.isLoggedInToast();
        this.ngZone.run(() => {
          this.router.navigate(['/auth/launchpage']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  FreeSignUp(register: NgForm) {
    this.presentLoading();
    return this.afAuth.auth.createUserWithEmailAndPassword(register.value.email, register.value.password)
      .then((result) => {
        this.isLoggedInToast();
        this.ngZone.run(() => {
          this.router.navigate(['/auth/launchpage']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
    }

    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
      return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['/auth/verify-email']);
      });
    }

    // Reset Forgot password
    ForgotPassword(passwordResetEmail) {
      return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.resetPasswordToast();
      }).catch((error) => {
        window.alert(error);
      });
    }

    // Returns true when user is looged in and email is verified
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null ) ? true : false;
    }

    // Auth logic to run auth providers
  async AuthLogin(provider) {
    return await this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.isLoggedInToast();
      this.ngZone.run(() => {
        this.router.navigate(['/auth/profile']);
      });
      return this.SetUserData(result.user);
      })
      .catch((error) => {
          window.alert(error.message);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  // SetUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified
  //   };
  //   return userRef.set(userData, {
  //     merge: true
  //   });
  // }

  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    });
  }


  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  // Sign in with Twitter
  TwitterAuth() {
    return this.AuthLogin(new auth.TwitterAuthProvider());
  }

  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  async needLoginToast() {
    const toast = await this.toaster.create({
    header: 'Authentication Message:',
    cssClass: 'halt',
    message: 'You need to create an account or login first',
    position: 'top',
    duration: 4000,
    showCloseButton: true,
    translucent: true,
  });
  return toast.present();
  }

  async needPaymentToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'halt',
      message: 'You need to purchase one of the Pro Memberships to access',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
  }
  async resetPasswordToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'neutral',
      message: 'Password reset email has been sent, check your email for instructions',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
  }

  async isLoggedInToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      message: 'Account Sign In Successful',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
  }


  async verifyEmailToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'login',
      message: 'Verification Email Sent! Check Your Email',
      position: 'top',
      duration: 1500,
      translucent: true,
    });
    return toast.present();
  }

  async signOutToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'neutral',
      message: 'You have successfully logged out',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
  }
  canRead(user): boolean {
    // const allowed = 'bronze' || 'silver' || 'gold';
    return this.checkAuthorization(user);
  }

  // determines if user has matching role
  private checkAuthorization(user): boolean {
    if (!user) { return false; }
    {
      if ( user.bronze || user.gold || user.silver ) {
        return true;
      }
    }
    return false;
  }
}
