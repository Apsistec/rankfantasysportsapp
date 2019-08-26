import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap, take, map, first } from 'rxjs/operators';
import { DbService } from './db.service';
import { User } from '../models/user';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  constructor(
    public afAuth: AngularFireAuth,
    private db: DbService,
    private router: Router,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private toaster: ToastController,
    private ngZone: NgZone

  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => (user ? db.doc$(`users/${user.uid}`) : of(null)))
    );
  }

  bronze() {
    return this.user$
      .pipe(
        take(1),
        map(user => user && user.bronze)
      )
      .toPromise();
  }

  async getUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
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

  uid() {
    return this.user$
      .pipe(
        take(1),
        map(u => u && u.uid)
      )
      .toPromise();
  }


  // Update UserData from all providers and login and register
  private updateUserData({ uid, email, displayName, photoURL }) {

    const path = `users/${uid}`;

    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };

    return this.db.updateAt(path, data);
  }

  // Sign in with email/password
    async loginLoader() {
      const loadingEl = await this.loadingCtrl
        .create({
          keyboardClose: true,
          message: 'Logging you in...'
        });
      loadingEl.present()
        .catch((loginLoaderError) => {
          window.alert(loginLoaderError.message);
        });
      loadingEl.dismiss();
    }

  async Login(login: NgForm) {
    this.loginLoader();
    const email = login.value.email;
    const password = login.value.password;
    const results = this.afAuth.auth.signInWithEmailAndPassword(email, password)
       .then((result) => {
         /* Call the SendVerificaitonMail() function when new user sign
         up and returns promise */
         return this.updateUserData(result.user);
       })
      .then(() => {
        return this.SendVerificationMail();
      })
      .catch((loginError) => {
        window.alert(loginError.message);
      });
    await login.reset();
    return this.router.navigate(['/profile']);
  }

  // Sign up with email/password
  async registerLoader() {
    const loadingEl = await this.loadingCtrl
      .create({
        keyboardClose: true,
        message: 'Registering your Account...'
      });
    await loadingEl.present()
      .catch((loaderError) => {
        window.alert(loaderError.message);
      });
    await loadingEl.dismiss();
  }
 
  async Register(register: NgForm) {
    this.registerLoader();
    const email = register.value.email;
    const password = register.value.password;
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      return this.updateUserData(result.user);
    })
    .then(() => {
      return this.SendVerificationMail();
    })
    .catch((registerError) => {
      window.alert(registerError.message);
    });
    await register.reset();
    return this.router.navigate(['/verify-email']);
  }


    // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    const user = this.afAuth.auth.currentUser;
    await user.sendEmailVerification()
    .catch((verificationError) => {
      // An error happened.
      window.alert(verificationError.message);
    });
  }

  // Reset Forgot password
 async ForgotPassword(passwordResetEmail) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .catch((error) => {
      window.alert(error.message);
    });
  }

    // Sign out
  async SignOut() {
    await this.afAuth.auth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      this.signOutToast();
      return this.router.navigate(['/home']);
    });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
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

 // Provider Auth
  async AuthLogin(provider) {
    return await this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/profile']);
        });
        this.updateUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
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
      cssClass: 'login',
      message: 'Great, You have successfully registered an account, now purchase a RF$ Pro Membership',
      position: 'top',
      duration: 6000,
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
  canRead(user: User): boolean {
    const allowed = 'bronze';
    return this.checkAuthorization(user);
  }

  // determines if user has matching role
  private checkAuthorization(user: User): boolean {
    if (!user) { return false; }
    {
      if (user.bronze) {
        return true;
      }
    }
    return false;
  }

}
