import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { environment } from '..//../environments/environment';
import { first, map, switchMap, take } from 'rxjs/operators';
import { Injectable, NgZone } from '@angular/core';
import { MessageService } from './message.service';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SpinnerService } from './spinner.service';
import { StorageService } from './storage.service';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<User>;
  currentUser = new BehaviorSubject(null);
  userId: string;
  planId: string;
  isSubscribed: boolean;
  userRole: any = 'USER';
  userPermissions: string[] = ['delete-ticket'];



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
 //// Get auth data, then get firestore user document || null
 this.user = this.afAuth.authState.pipe(
  switchMap(user => {
    if (user) {
      return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    } else {
      return of(null);
    }
  })
);

    // this.user = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       return null;
    //     }
    //   })
    // );
  }



  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  modalDismiss() {
    this.modalCtrl.dismiss();
  }


  // Log In- email and password
  signIn(credentials): Observable<any> {
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
  async registerUser(value) {
    return this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
    .then(async (data: any) => {
      await this.setUserData(data);
      this.router.navigateByUrl('/membership')
    });
  }


  // Auth logic to Login using federated auth providers
  oauthLogin(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(data => {
        if (!data.user) {
          this.message.noExistFederatedUserAlert();
          this.afAuth.idTokenResult
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
  async oauthRegister(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(async (data: any) => {
        await this.setUserData(data)
          .then(() => {
            return this.ngZone.run(() => {
              this.router.navigateByUrl('/membership');
            });
          });
      })
      .catch(err => {
        this.message.errorAlert(err);
      });
  }

  // Set User Data in Firestore
  setUserData(data) {
    return this.afs
      .doc<User>(`users/${data.user.uid}`)
      .set(
        {
          displayName: data.user.displayName,
          email: data.user.email,
          uid: data.user.uid,
          role: this.userRole,
          permissions: this.userPermissions,
          photoURL: data.user.photoURL
        },
        { merge: true }
      );
  }

  // Register in with Google
  GoogleRegister() {
    return this.oauthRegister(new auth.GoogleAuthProvider());
  }

  // Register in with Twitter
  TwitterRegister() {
    return this.oauthRegister(new auth.TwitterAuthProvider());
  }

  // Register in with Facebook
  FacebookRegister() {
    return this.oauthRegister(new auth.FacebookAuthProvider());
  }

  // MicrosoftRegister() {
  //   return this.oauthRegister(new firebase.auth.OAuthProvider('microsoft.com'));
  // }

  // Log In with Google
  GoogleAuth() {
    return this.oauthLogin(new auth.GoogleAuthProvider());
  }
  // Log In with Twitter
  TwitterAuth() {
    return this.oauthLogin(new auth.TwitterAuthProvider());
  }

  // Log In with Facebook
  FacebookAuth() {
    return this.oauthLogin(new auth.FacebookAuthProvider());
  }

  // For working with Azure AD app to query Microsoft Graph using Excel API and MS Javascript after getting a token from MSAL
  MicrosoftAuth() {
    const provider = new auth.OAuthProvider('microsoft.com');
    return this.oauthLogin(provider);
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
    // Tenant
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



  // User Exists Verification
  async getUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async getCurrentUser(): Promise<any> {
    return await of(this.user).toPromise();
  }

  get isLoggedIn(): boolean {
    const user = this.getCurrentUser();
    return (user !== null) ? true : false;
  }

  // // Current and Valid Subscription Check

  // isCurrentSubscriber(user: User): boolean {
  //   const validStatus = 'active' || 'trialing';
  //   return this.checkCurrentStatus(user, validStatus);
  // }

  // private async isCurrentSub() {
  //   const user = await this.getCurrentUser();
  //   // const user = await this.getUser();
  //   this.isSubscribed =
  //     (user.plan === 'bronze') ? true : false;
  // }

  // private checkCurrentStatus(user: User, validStatus: string): boolean {
  //   if (user !== null) {
  //     for (const valid of validStatus) {
  //       if (user[valid]) {
  //         return true;
  //       }
  //     }
  //   } {
  //   return false;
  //   }
  // }


  // Permissions Check for Trouble Tickets and Admin Dashboard

  // tslint:disable-next-line: member-ordering
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


// User Roles to coincide with backend server permissions/rules
  // tslint:disable-next-line: member-ordering
  canRead(user: User): boolean {
    const allowed = 'ADMIN' || 'EDITOR' || 'USER';
    return this.checkAuthorization(user, allowed);
  }

  // tslint:disable-next-line: member-ordering
  canEdit(user: User): boolean {
    const allowed = 'ADMIN' || 'EDITOR';
    return this.checkAuthorization(user, allowed);
  }

  // tslint:disable-next-line: member-ordering
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
