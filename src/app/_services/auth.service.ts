import firebase from 'firebase/app';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { User } from '../_models/user';
import { MessageService } from './message.service';
import { ModalService } from './modal.service';

export interface UserCredentials {
  displayName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  currentBehaviorUser = new BehaviorSubject(null);
  isSubscribed: boolean;
  displayName;
  name;
  user;
  // ref: AngularFirestoreDocument<unknown>;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private message: MessageService,
    private modal: ModalService
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  // get currentUser(): any {
  //   return this.authenticated ? this.user : null;
  // }

  // get currentUserId(): string {
  //   return this.authenticated ? this.user.uid : '';
  // }

  // Authentication
  SignIn(email, password) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.message.isLoggedInToast();
        this.navigateEntryUser();
      })
      .catch((err) => {
        this.message.errorAlert(err.message);
      });
  }

  // navigate upon login
  async navigateEntryUser() {
    if (this.user.role === 'ADMIN') {
      this.router.navigateByUrl('/admin');
    } else {
      if (this.user['gold'] || this.user['silver'] || this.user['bronze'] === true) {
        this.router.navigateByUrl('/profile');
      }
    }
  }

  SignUp(displayName: string, email: string, password: string) {
    this.displayName = displayName;
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.message.registerSuccessToast();
        this.afs.doc<User>(`users/${res.user.uid}`).set({
          uid: res.user.uid,
          displayName: this.displayName,
          email: res.user.email,
          role: 'USER',
          permissions: ['delete-ticket'],
          photoURL: res.user.photoURL,
          created: res.user.metadata.creationTime
        });
      })
      .catch((error) => this.message.errorAlert(error.message));
  }

  // Recover password
  ResetPassword(passwordResetEmail) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.message.resetPasswordAlert();
      })
      .catch((error) => {
        this.message.errorAlert(error.message);
      });
  }

  // Sign-out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.message.signOutToast().then(() => {
        this.router.navigate(['home']);
      });
    });
  }

  // User Roles to coincide with backend server permissions/rules

  bronze() {
    return this.user$
      .pipe(
        take(1),
        map((user) => user && user.bronze)
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

  silver() {
    return this.user$
      .pipe(
        take(1),
        map((user) => user && user.silver)
      )
      .toPromise();
  }

  async isSilver() {
    const silver = await this.silver();
    const isPaidSilver = !!silver;
    if (!isPaidSilver) {
      return false;
    } else {
      return isPaidSilver;
    }
  }

  gold() {
    return this.user$
      .pipe(
        take(1),
        map((user) => user && user.gold)
      )
      .toPromise();
  }

  async isGold() {
    const gold = await this.gold();
    const isPaidGold = !!gold;
    if (!isPaidGold) {
      return false;
    } else {
      return isPaidGold;
    }
  }

  // get isAdmin(): boolean {
  //   const user = this.afs.doc(`users/${this.user.uid}`)
  // }

  canRead(): boolean {
    return this.checkAuthorization();
  }

  // determines if user is a member
  private checkAuthorization(): boolean {
    if (!this.user) {
      return false;
    }
    {
      if (this.user.bronze || this.user.gold || this.user.silver === true) {
        return true;
      }
      return false;
    }
  }

  hasPermissions(permissions: string[]): boolean {
    for (const perm of permissions) {
      if (!this.user.permissions.includes(perm)) {
        return false;
      }
    }
    return true;
  }
}
