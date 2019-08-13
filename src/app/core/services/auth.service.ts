import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  // userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public toastController: ToastController,
    // private subscription: Subscription
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(this.user$));
          JSON.parse(localStorage.getItem('user'));
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      })
    );

    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userData = user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // });
  }

  // Sign in with email/password
  Login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['list']);
        });
        this.signToast();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  Register(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  // Reset Forgot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // async getUser() {
  //   await this.afAuth.authState.pipe(first()).toPromise();
  //   return this.userData;
  // }

  getUser() {
    return this.user$.pipe(first()).toPromise();
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

  // Sign in with Microsoft
  // MicrosoftAuth() {
  //   return this.AuthLogin(new auth.AuthProvider());
  // }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['list']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.signOutToast();
      this.router.navigate(['/']);
    });
  }

  async signToast() {
    const toast = await this.toastController.create({
      header: 'Authentication Message:',
      cssClass: 'login',
      message: 'You have successfully logged in',
      position: 'middle',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }

  async signOutToast() {
    const toast = await this.toastController.create({
      header: 'Authentication Message:',
      cssClass: 'logout',
      message: 'You have successfully logged out',
      position: 'middle',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }

  // acquireTokenSilent() {
  //   this.broadcastService.subscribe("msal:acquireTokenSuccess", (payload) => {
  //     // do something here
  //   });

  //   this.broadcastService.subscribe("msal:acquireTokenFailure", (payload) => {
  //     // do something here
  //   });
  // }
  // this.subscription = this.broadcastService.subscribe("msal:acquireTokenFailure", (payload) => {

  // });

  // ngOnDestroy() {
  //   this.broadcastService.getMSALSubject().next(1);
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
}
