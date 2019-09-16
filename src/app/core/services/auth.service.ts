import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, take, map, tap, first } from 'rxjs/operators';
import { from, Observable, of, BehaviorSubject } from 'rxjs';
// import { DbService } from './db.service';
import {
  AlertController,
  ToastController,
  LoadingController
} from '@ionic/angular';
// import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  currentUser = new BehaviorSubject(null);
  userExists;
  userinfo;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    // private db: DbService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    // private storage: Storage,
    private ngZone: NgZone
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc(`users/${user.uid}`).valueChanges().pipe(
            take(1),
            tap(data => {
              data['id'] = user.uid;
              this.currentUser.next(data);
            })
          );
        } else {
          this.currentUser.next(null);
          return of(null);
        }
      })
    );
  }

  uid() {
    return this.user
      .pipe(
        take(1),
        map(u => u && u.uid)
      )
      .toPromise();
  }

  bronze() {
    return this.user
      .pipe(
        take(1),
        map(user => user && user.bronze)
      )
      .toPromise();
  }

  silver() {
    return this.user
      .pipe(
        take(1),
        map(user => user && user.silver)
      )
      .toPromise();
  }

  gold() {
    return this.user
      .pipe(
        take(1),
        map(user => user && user.gold)
      )
      .toPromise();
  }

  async getUser() {
    const user = await this.afAuth.authState.pipe(first()).toPromise();
      return this.userinfo;
  }

  getUserInformation() {
    return this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges();
  }

  updateUser (displayName) {
    return this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
    .update({displayName: displayName});
  }

  updateUserPhoto (photoURL) {
    return this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
    .update({photoURL: photoURL});
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

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null ) ? true : false;
  }

  // get isAdmin(): boolean {
  //   const user = this.afs.doc(`users/${this.user.uid}`)
  // }

  canRead(user): boolean {
    // const allowed = 'user.bronze' || 'user.silver' || 'user.gold';
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

  hasPermissions(permissions: string[]): boolean {
    for (const perm of permissions) {
      if (!this.currentUser.value || !this.currentUser.value.permissions.includes(perm)) {
        return false;
      }
    }
    return true;
  }


  async signUp(credentials) {
      return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(data => {
      return this.afs.doc(`users/${data.user.uid}`).set({
        displayName: credentials.firstName + '' + credentials.lastName,
        email: data.user.email,
        uid: data.user.uid,
        role: 'USER',
        permissions: [],
        firstSignIn: firebase.firestore.FieldValue.serverTimestamp(),
      }, {merge: true});
    });
  }

  signIn(credentials): Observable<any> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc(`users/${user.user.uid}`).valueChanges().pipe(
            take(1)
          );
        } else {
          return of(null);
        }
      })
    );
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.resetPasswordToast();
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Auth logic to Register using federated auth providers
  async AuthRegister(provider) {
    return await this.afAuth.auth.signInWithPopup(provider)
      .then((data) => {
        return this.afs.doc(`users/${data.user.uid}`)
          .set({
            displayName: data.user.displayName,
            email: data.user.email,
            uid: data.user.uid,
            role: 'USER',
            permissions: [],
            firstSignIn: firebase.firestore.FieldValue.serverTimestamp(),
            photoURL: data.user.photoURL
          }, { merge: true })
          .then(async () => {
            const toast = await this.toastCtrl.create({
              header: 'Registration Successful',
              message: 'Welcome ' + data.user.displayName + '. Account Created using ' + data.user.email,
              cssClass: 'login',
              position: 'top',
              duration: 5000,
              showCloseButton: true,
              translucent: true,
            });
            toast.present();
          });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Auth logic to Login using federated auth providers
  AuthLogin(provider) {
    this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.federatedLoginToast(result);
      return this.afs.doc(`users/${result.user.uid}`)
      .update({
        thisSignIn: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }).then(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/profile');
      });
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  // Sign out
  async SignOut() {
    await this.afAuth.auth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      return this.signOutToast()
        .then(() => {
          return this.router.navigate(['/home']);
        });
    }).catch(async (err) => {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  async federatedLoginToast(data) {
    const toast = await this.toastCtrl.create({
      header: 'Login Successful',
      message: 'Welcome back ' + data.user.displayName + '. Email: ' + data.user.email,
      cssClass: 'login',
      position: 'top',
      duration: 5000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }

  async needLoginToast() {
    const toast = await this.toastCtrl.create({
    header: 'Account Required:',
    cssClass: 'halt',
    message: 'To Get Started, First Register an Account or Login',
    position: 'top',
    duration: 4000,
    showCloseButton: true,
    translucent: true,
  });
  return toast.present();
  }

  async needPaymentToast() {
    const toast = await this.toastCtrl.create({
      header: 'Paid Subscription Required',
      cssClass: 'halt',
      message: 'Immediate Access Available with a PRO Package',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
  }

  async resetPasswordToast() {
    const toast = await this.toastCtrl.create({
      header: 'Request Successful:',
      cssClass: 'neutral',
      message: 'Check your email for further instructions',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
  }



  async verifyEmailToast() {
    const toast = await this.toastCtrl.create({
      header: 'Verification Email Sent',
      cssClass: 'neutral',
      message: 'Check Your Email for further instructions',
      position: 'top',
      duration: 1500,
      translucent: true,
    });
    return toast.present();
  }

  async signOutToast() {
    const toast = await this.toastCtrl.create({
      header: 'Sign Out Successful',
      cssClass: 'neutral',
      message: 'Thank You for Stopping By!',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
  }

}
