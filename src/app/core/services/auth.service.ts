import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/user';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
// import { Storage } from '@ionic/storage';
// import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // userData: User;
  user: User;
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public toaster: ToastController,
    // private storage: Storage,
  ) {

    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    const user = this.afAuth.authState
      .pipe(user => {
        if (user) {
          return this.afs.doc<User>(`users/${this.user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      });
  }


  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      roles: {
        subscriber: true
      }
    };
    return userRef.set(userData, { merge: true });
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
          this.SetUserData(result);
          this.router.navigate(['/launchpage']);
        });
        }).catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    this.user = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: user.roles,
    };
    return userRef.set(user, {
      merge: true
    });
  }

  ///// Role-based Authorization //////

  canRead(user: User): boolean {
    const allowed = ['admin', 'subscriber'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'subscriber'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) { return false; }
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }

  // Sign in with email/password
  Login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/launchpage']);
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
        this.router.navigateByUrl('/launchpage');
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['/verify-email']);
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
    return (this.user !== null) ? true : false;
  }


  async getUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }


  // Sign out
  SignOut() {
    // this.storage.removeItem('user');
    this.signOutToast();
    firebase.auth().signOut();
    this.router.navigate(['/home']);
  }

  async signToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'login',
      message: 'You have successfully logged in',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }


  async needPaymentToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'logout',
      message: 'You need to purchase a Pro Membership to access',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }

  async isLoggedInToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'login',
      message: 'You have successfully logged in',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }

  async signOutToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'logout',
      message: 'You have successfully logged out',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }
}
