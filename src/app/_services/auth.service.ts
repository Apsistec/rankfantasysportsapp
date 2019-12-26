import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap, take, map, tap, first } from 'rxjs/operators';
import { of, Observable, BehaviorSubject, from } from 'rxjs';
import { User } from '../_models/user';
import { MessageService } from './message.service';
import { Storage } from '@ionic/storage';
import { ModalController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  currentUser = new BehaviorSubject(null);
  userId: string;
  planId: string;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private message: MessageService,
    private storage: Storage,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) {
   //// Get auth data, then get firestore user document || null
   this.user = this.afAuth.authState.pipe(
    switchMap(user => {
      if (user) {
        return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    })
  );
}

  async getCurrentUser(): Promise<User> {
    return await this.user.pipe(first()).toPromise();
  }

  get isLoggedIn(): boolean {
    return (this.user === null ) ? true : false;
  }

  async getUser() {
    return await this.afAuth.authState.pipe(first()).toPromise();
  }

  async loadSpinner() {
    const load = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Please wait...',
      translucent: true,
      cssClass: 'successA'
    });
    load.present();
  }

  dismissSpinner() {
    this.loadingCtrl.dismiss();
  }

  modalDismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();
  }

   async isSubscribed() {
    const user = await this.getCurrentUser();
    if (!user.plan) {

    }

  }



  // get isAdmin(): boolean {
  //   const user = this.afs.doc(`users/${this.user.uid}`)
  // }

  canRead(user: any): boolean {
    return this.checkAuthorization(user);
  }

  // determines if user is a member
  private checkAuthorization(user: any): boolean {
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

// Authentication
  SignIn(email, password) {
    this.loadSpinner();
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(async(res) => {
        this.dismissSpinner();
        await this.afs.doc<User>(`users/${res.user.uid}`)
        .valueChanges().subscribe(fullUser => {
          const user = fullUser;
          this.message.isLoggedInToast();
          if (user.role === 'ADMIN') {
            this.router.navigateByUrl('/admin');
          }  {
            if (user.role === 'USER') {
              if (user.plan && user.status === 'active' || 'trialing' ) {
                this.router.navigateByUrl('/auth/profile');
              } {
                this.router.navigateByUrl('/purchase');
              }
            }
          }
        });
      }).catch((err) => {
        this.dismissSpinner();
        this.message.errorAlert(err.message);
      });
    }


    /* Sign up email*/
    SignUp(credentials) {
      this.loadSpinner();
      this.afAuth
        .auth
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((res) => {
          this.dismissSpinner();
          this.message.registerSuccessToast();
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

// Auth logic to Register using federated auth providers
  async AuthRegister(provider: any) {
    await this.afAuth.auth.signInWithPopup(provider).then(
      async (data: any) => {
        await this.afs.doc<User>(`users/${data.user.uid}`).set({
          displayName: data.user.displayName,
          email: data.user.email,
          uid: data.user.uid,
          role: 'USER',
          permissions: ['delete-ticket'],
          photoURL: data.user.photoURL
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
  }

    // Register in with Google
  async GoogleRegister() {
    await this.AuthRegister(new firebase.auth.GoogleAuthProvider());
    return this.modalDismiss();
  }

  // Register in with Twitter
  async TwitterRegister() {
    await this.AuthRegister(new firebase.auth.TwitterAuthProvider());
    return this.modalDismiss();
  }

  // Register in with Facebook
  async FacebookRegister() {
    await this.AuthRegister(new firebase.auth.FacebookAuthProvider());
    return this.modalDismiss();
  }

  async MicrosoftRegister() {
    await this.AuthRegister(new firebase.auth.OAuthProvider('microsoft.com'));
    return this.modalDismiss();
  }

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

  MicrosoftAuth() {
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
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
  }

  async linkFacebook() {
    this.loadSpinner();
    const provider = await new firebase.auth.FacebookAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider);
    this.dismissSpinner();
  }

  async linkTwitter() {
    this.loadSpinner();
    const provider = await new firebase.auth.TwitterAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider);
    this.dismissSpinner();
  }

  async linkMicrosoft() {
    this.loadSpinner();
    const provider = await new firebase.auth.OAuthProvider('microsoft.com');
    firebase.auth().currentUser.linkWithPopup(provider);
    this.dismissSpinner();
  }

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
  }

  // Sign out
  async SignOut() {
    await this.afAuth.auth.signOut();
    this.message.signOutToast();
    return this.router.navigate(['/home'])
    .catch(async (err) => {
      await this.message.errorAlert(err);
    });
  }
}
