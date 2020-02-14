import { switchMap, take, map, first } from 'rxjs/operators';
import { User } from '../_models/user';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { Injectable, NgZone } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { MessageService } from './message.service';
import { Router } from '@angular/router';
import { SpinnerService } from './spinner.service';
import { StorageService } from './storage.service';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root',
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
    private navCtrl: NavController,
    private spinner: SpinnerService
  ) {
    // Get auth data, then get firestore user document || null
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
  }
  async getUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async getCurrentUser(): Promise<any> {
    return of(this.user).toPromise();
  }

  get isLoggedIn(): boolean {
    return this.user !== null ? true : false;
  }

  modalDismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();
  }

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
  }

  async isSubscribedQ() {
    const user = await this.getCurrentUser();
    this.isSubscribed =
      user.plan === 'bronze' ? true : false;
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

   
  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }

  // SignUp(credentials) {
  //   return this.afAuth.auth
  //     .createUserWithEmailAndPassword(credentials.email, credentials.password)
  //     .then(res => {
  //       this.afs.doc<User>(`users/${res.user.uid}`).set(
  //         {
  //           displayName: credentials.firstName + ' ' + credentials.lastName,
  //           email: res.user.email,
  //           uid: res.user.uid,
  //           role: 'USER',
  //           permissions: ['delete-ticket'],
  //           photoURL: res.user.photoURL,
  //         },
  //         { merge: true }
  //       );
  //     })
  //     .catch(async err => {
  //       await this.message.errorAlert(err);
  //     });
  // }

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
      })
      .catch(err => {
        return this.message.errorAlert(err);
      });
  }

  // Auth logic to Register using federated auth providers
  async AuthRegister(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(async (data: any) => {
        this.afs
          .doc<User>(`users/${data.user.uid}`)
          .set(
            {
              displayName: data.user.displayName,
              email: data.user.email,
              uid: data.user.uid,
              role: 'USER',
              permissions: ['delete-ticket'],
              photoURL: data.user.photoURL,
            },
            { merge: true }
          )
          .then(async () => {
            await this.ngZone.run(() => {
              this.router.navigateByUrl('/purchase');
            });
          });
      })
      .catch(err => {
        this.message.errorAlert(err);
      });
  }

  // Register in with Google
  async GoogleRegister() {
    return this.AuthRegister(new auth.GoogleAuthProvider());
  }

  // Register in with Twitter
  TwitterRegister() {
    return this.AuthRegister(new auth.TwitterAuthProvider());
  }

  // Register in with Facebook
  FacebookRegister() {
    return this.AuthRegister(new auth.FacebookAuthProvider());
  }

  // MicrosoftRegister() {
  //   return this.AuthRegister(new firebase.auth.OAuthProvider('microsoft.com'));
  // }

  // Signin Login Federated
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

  // For working with Azure AD app to query Microsoft Graph using Excel API and MS Javascript after getting a token from MSAL
  MicrosoftAuth() {
    const provider = new auth.OAuthProvider('microsoft.com');
    return this.AuthLogin(provider);
    provider.setCustomParameters({
      tenant: '775e45e1-79ea-465a-b26d-24ec063c54d1',
    });
    provider.addScope('files.read');
  }

  // related to Settings Page for joining additional Profiles to User
  async linkGoogle() {
    this.spinner.loadSpinner();
    const provider = await new auth.GoogleAuthProvider();
    auth().currentUser.linkWithPopup(provider);
    this.spinner.dismissSpinner();
    provider.setCustomParameters({
      tenant: '8b3cfe6b-4ec4-41af-be3d-4f41fd41da02',
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
      return this.navCtrl.navigateRoot('/home');
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

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string): boolean {
    if (!user) {
      return false;
    }
    for (const role of allowedRoles) {
      if (user[role]) {
        return true;
      }
    }
    return false;
  }

}
