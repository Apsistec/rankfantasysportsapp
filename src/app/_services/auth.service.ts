<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap, take, map, first } from 'rxjs/operators';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { User } from '../_models/user';
=======
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
=======
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
>>>>>>> Stashed changes
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Injectable, NgZone } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import { MessageService } from './message.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { SpinnerService } from './spinner.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  currentUser = new BehaviorSubject(null);
  userId: string;
  planId: string;
  isSubscribed: boolean;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private message: MessageService,
    private storage: StorageService,
    private modalCtrl: ModalController,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    private loadingCtrl: LoadingController
=======
    private navCtrl: NavController
>>>>>>> Stashed changes
  ) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return null;
        }
      })
    );
  }

<<<<<<< Updated upstream
  getUser(): Promise<any> {
    return this.afAuth.authState.pipe(first()).toPromise();
=======
    private navCtrl: NavController
  ) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return null;
        }
      })
    );
  }

  hasPermissions(permissions: string[]): boolean {
    for (const perm of permissions) {
      if (
        !this.currentUser.value ||
        !this.currentUser.value.permissions.includes(perm)
      ) {
        return false;
      }
    }
    return true;
>>>>>>> Stashed changes
  }

  async getCurrentUser(): Promise<any> {
    return of(this.user).toPromise();
  }

=======
  hasPermissions(permissions: string[]): boolean {
    for (const perm of permissions) {
      if (
        !this.currentUser.value ||
        !this.currentUser.value.permissions.includes(perm)
      ) {
        return false;
      }
    }
    return true;
  }

  async getCurrentUser(): Promise<any> {
    return of(this.user).toPromise();
  }

>>>>>>> Stashed changes
  get isLoggedIn(): boolean {
    return this.user !== null ? true : false;
  }

  modalDismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();
  }

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  bronze() {
    return this.user
      .pipe(
        take(1),
        map(user => user && user.bronze)
      )
      .toPromise();
  }

  async isBronze() {
    const bronze = await this.bronze();
    const isPaidBronze = !!bronze;
    if (!isPaidBronze) {
      return false;
    } else {
      return isPaidBronze;
    }
=======
  async isSubscribedQ() {
    const user = await this.getCurrentUser();
    this.isSubscribed =
      user.plan === 'gold' || 'silver' || 'bronze' ? true : false;
>>>>>>> Stashed changes
  }

  // Authentication
  SignIn(credentials): Observable<any> {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
    ).pipe(
      map(
        data => {
          if (data) {
            return this.afs.doc<User>(`users/${data.user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        },
        async error => {
          this.message.errorAlert(error);
        }
      )
    );
  }

  /* Sign up email*/
  SignUp(credentials) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(data => {
        return this.afs.doc<User>(`users/${data.user.uid}`).set({
          displayName: credentials.firstName + ' ' + credentials.lastName,
          email: data.user.email,
          uid: data.user.uid,
          role: 'USER',
          permissions: ['delete-ticket'],
          photoURL: data.user.photoURL
        });
      });
  }

  // Auth logic to Login using federated auth providers
  async AuthLogin(provider: any) {
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(data => {
        if (!data.user) {
          this.message.noExistFederatedUserAlert();
          this.SignOut();
        } else {
          this.message.federatedLoginToast(data.user);
          this.afs.doc(`users/${data.user.uid}`).update(data.user);
          this.ngZone.run(() => {
            this.router.navigateByUrl('/profile');
          });
        }
<<<<<<< Updated upstream
      }
    }



    /* Sign up email*/
    SignUp(credentials) {
      this.afAuth
        .auth
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((res) => {
          this.afs.doc<User>(`users/${res.user.uid}`).set({
            displayName: credentials.firstName + ' ' + credentials.lastName,
            email: res.user.email,
            uid: res.user.uid,
            role: 'USER',
            permissions: ['delete-ticket'],
            photoURL: res.user.photoURL
          }, {merge: true});
        })
        .catch(async (err) => {
          await this.message.errorAlert(err);
        });
    }
=======
  async isSubscribedQ() {
    const user = await this.getCurrentUser();
    this.isSubscribed =
      user.plan === 'gold' || 'silver' || 'bronze' ? true : false;
  }

  // Authentication
  SignIn(credentials): Observable<any> {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
    ).pipe(
      map(
        data => {
          if (data) {
            return this.afs.doc<User>(`users/${data.user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        },
        async error => {
          this.message.errorAlert(error);
        }
      )
    );
  }

  /* Sign up email*/
  SignUp(credentials) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(data => {
        return this.afs.doc<User>(`users/${data.user.uid}`).set({
          displayName: credentials.firstName + ' ' + credentials.lastName,
          email: data.user.email,
          uid: data.user.uid,
          role: 'USER',
          permissions: ['delete-ticket'],
          photoURL: data.user.photoURL
        });
      });
  }

  // Auth logic to Login using federated auth providers
  async AuthLogin(provider: any) {
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(data => {
        if (!data.user) {
          this.message.noExistFederatedUserAlert();
          this.SignOut();
        } else {
          this.message.federatedLoginToast(data.user);
          this.afs.doc(`users/${data.user.uid}`).update(data.user);
          this.ngZone.run(() => {
            this.router.navigateByUrl('/profile');
          });
        }
=======
>>>>>>> Stashed changes
      })
      .catch(err => {
        return this.message.errorAlert(err);
      });
  }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

  // Auth logic to Register using federated auth providers
  async AuthRegister(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(async (data: any) => {
        this.afs.doc<User>(`users/${data.user.uid}`).set({
          displayName: data.user.displayName,
          email: data.user.email,
          uid: data.user.uid,
          role: 'USER',
          permissions: ['delete-ticket'],
          photoURL: data.user.photoURL
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        }, { merge: true }).then(
          async() => {
            await this.ngZone.run(() => {
              this.router.navigateByUrl('/purchase');
            });
          }
        );
      }
    ).catch(err => {
        this.message.errorAlert(err);
    });
=======
=======
>>>>>>> Stashed changes
        });
        return this.ngZone.run(() => {
          this.router.navigateByUrl('/purchase');
        });
      });
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }

  // Register in with Google
  async GoogleRegister() {
    return this.AuthRegister(new firebase.auth.GoogleAuthProvider());
  }

  // Register in with Twitter
  TwitterRegister() {
    return this.AuthRegister(new firebase.auth.TwitterAuthProvider());
  }

  // Register in with Facebook
  FacebookRegister() {
    return this.AuthRegister(new firebase.auth.FacebookAuthProvider());
  }

  // MicrosoftRegister() {
  //   return this.AuthRegister(new firebase.auth.OAuthProvider('microsoft.com'));
  // }

  // Signin Login Federated
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }
  // Sign in with Twitter
  TwitterAuth() {
    return this.AuthLogin(new firebase.auth.TwitterAuthProvider());
  }

  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  // For working with Azure AD app to query Microsoft Graph using Excel API and MS Javascript after getting a token from MSAL
  MicrosoftAuth() {
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      return this.AuthLogin(provider);
      provider.setCustomParameters({
      tenant: '775e45e1-79ea-465a-b26d-24ec063c54d1'
       });
      provider.addScope('files.read');
  }

  // related to Settings Page for joining additional Profiles to User
  async linkGoogle() {
    this.loadSpinner();
    const provider = await new firebase.auth.GoogleAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider);
    this.dismissSpinner();
=======
    provider.setCustomParameters({
      tenant: '8b3cfe6b-4ec4-41af-be3d-4f41fd41da02'
    });
    provider.addScope('user.read, files.read');
    // rfs-test@appspot.gserviceaccount.com
>>>>>>> Stashed changes
  }

  // Reset Password
  async resetPassword(email: string) {
    await this.afAuth.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.router.navigateByUrl('/login');
        this.message.resetPasswordAlert();
      })
      .catch(err => {
        return this.message.errorAlert(err);
      });
  }

  // Sign out
  async SignOut() {
    await this.afAuth.auth.signOut().then(() => {
      this.message.signOutToast();
      return this.navCtrl.navigateRoot('/');
    });
  }

  ///// hasPermissions(permissions: string[]): boolean {
  canRead(user: User): boolean {
    const allowed = 'ADMIN' || 'EDITOR' || 'USER';
    return this.checkAuthorization(user, allowed);
  }

<<<<<<< Updated upstream
  // Auth logic to Login using federated auth providers
  async AuthLogin(provider: any) {
    const result =  await this.afAuth.auth.signInWithPopup(provider);
    // .then((result) => {
      if (!result.user) {
        this.message.wrongAccountAlert();
        this.SignOut();
      } else {
        this.message.federatedLoginToast(result.user);
        await this.afs.doc(`users/${result.user.uid}`).update({
          // lastSignIn: this.afs.collection('users/${result.user.uid}', ref => ref.onSnapshot
        }).then(() => {
          this.ngZone.run(() => {
            this.router.navigateByUrl('/profile');
          });
        }).catch(async (err) => {
          await this.message.errorAlert(err);
        });
      }
    }

  async resetPassword(email: string) {
    await this.afAuth.auth.sendPasswordResetEmail(email)
    .then(() => {
      this.router.navigateByUrl('/login');
      this.message.resetPasswordAlert();
    })
    .catch(async (err) => {
      await this.message.errorAlert(err);
    });
=======
  canEdit(user: User): boolean {
    const allowed = 'ADMIN' || 'EDITOR';
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = 'ADMIN';
    return this.checkAuthorization(user, allowed);
>>>>>>> Stashed changes
  }

=======
    provider.setCustomParameters({
      tenant: '8b3cfe6b-4ec4-41af-be3d-4f41fd41da02'
    });
    provider.addScope('user.read, files.read');
    // rfs-test@appspot.gserviceaccount.com
  }

  // Reset Password
  async resetPassword(email: string) {
    await this.afAuth.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.router.navigateByUrl('/login');
        this.message.resetPasswordAlert();
      })
      .catch(err => {
        return this.message.errorAlert(err);
      });
  }

  // Sign out
  async SignOut() {
    await this.afAuth.auth.signOut().then(() => {
      this.message.signOutToast();
      return this.navCtrl.navigateRoot('/');
    });
  }

  ///// hasPermissions(permissions: string[]): boolean {
  canRead(user: User): boolean {
    const allowed = 'ADMIN' || 'EDITOR' || 'USER';
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = 'ADMIN' || 'EDITOR';
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = 'ADMIN';
    return this.checkAuthorization(user, allowed);
  }

>>>>>>> Stashed changes
  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string): boolean {
    if (!user) return false;
    for (const role of allowedRoles) {
      if (user[role]) {
        return true;
      }
    }
    return false;
  }
}
