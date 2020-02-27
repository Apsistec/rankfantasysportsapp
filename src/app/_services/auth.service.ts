import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Injectable, NgZone} from '@angular/core';
import { MessageService } from './message.service';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { User } from 'firebase';
import { User as fullUser } from '@models/user';
import * as firebase from 'firebase/app'
import { tap } from 'rxjs/operators';


export interface UserCredentials {
  displayName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentBehaviorUser = new BehaviorSubject(null);
  isSubscribed: boolean;
  displayName;
  name;
  user: User = null;
  // ref: AngularFirestoreDocument<unknown>;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private message: MessageService,
    private storage: StorageService,
  ) { 
  this.afAuth.authState.subscribe(res => {
    this.user = res;
    if (this.user) {
      this.afs.doc(`users/${this.currentUserId}`).valueChanges().pipe(
        tap(res => {
          this.name = res['name'];
        })
      ).subscribe();
    }
  })
  }

  get authenticated(): boolean {
    return this.user !== null;
  }
 
  get currentUser(): any {
    return this.authenticated ? this.user : null;
  }
 
  get currentUserId(): string {
    return this.authenticated ? this.user.uid : '';
  }


// Authentication
SignIn(email, password) {
  this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.message.isLoggedInToast();
      this.navigateEntryUser();
    }).catch((err) => {
      this.message.errorAlert(err.message);
    });
  }

  // navigate upon login
  async navigateEntryUser() {
    if (this.user['role'] === 'ADMIN') {
      this.router.navigateByUrl('/admin');
    } else {
      if (this.user['role'] === 'USER') {
        const sub = (this.user['gold'] || this.user['silver'] || this.user['bronze']);
        if (sub) {
          this.router.navigateByUrl('/auth/profile');
        } else {
          this.router.navigateByUrl('/purchase');
        }
      }
    }
  }

  SignUp(credentials: UserCredentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((res) => {
        return this.afs.doc(`users/${res.user.uid}`).set({
          displayName: credentials.displayName,
          email: res.user.email,
          uid: res.user.uid,
          role: 'USER',
          permissions: ['delete-ticket'],
          photoURL: res.user.photoURL,
          subStatus: null,
          created: firebase.firestore.FieldValue.serverTimestamp()
        });
      });
  }


  


  // Recover password
  ResetPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      this.message.resetPasswordAlert();
    }).catch((error) => {
      this.message.errorAlert(error.message);
    })
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = this.storage.getObject('user');
    return (user !== null) ? true : false;
  }


  // Sign in with Gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.message.isLoggedInToast().then(() => {
        if (!this.isSubscribed){
          this.router.navigate[('membership')]
        }
        if (this.isSubscribed) {
          this.ngZone.run(() => {
            this.router.navigate(['profile']);
          })
        }
      });
    }).catch((error) => {
      this.message.errorAlert(error.message)
    })
  }





  // Sign-out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.storage.remove('user');
      this.message.signOutToast().then(() => {
        this.router.navigate(['home']);
      })
    })
  }


  // Permissions Check for Trouble Tickets and Admin Dashboard
  hasPermissions(permissions: string[]): boolean {
    for (const perm of permissions) {
      if (
        !this.currentBehaviorUser.value ||
        !this.currentBehaviorUser.value.permissions.includes(perm)
      ) {
        return false;
      }
    }
    return true;
  }


// User Roles to coincide with backend server permissions/rules

  canRead(user: fullUser): boolean {
    const allowed = ['ADMIN', 'SUBSCRIBER']
    return this.checkAuthorization(user, allowed)
  }

  canEdit(user: fullUser): boolean {
    const allowed = ['ADMIN', 'SUBSCRIBER']
    return this.checkAuthorization(user, allowed)
  }

  canDelete(user: fullUser): boolean {
    const allowed = ['ADMIN']
    return this.checkAuthorization(user, allowed)
  }

  // /** Returns true whenever the user is authenticated */
  // get authenticated() { return this.authenticated; }



  // determines if user has matching role
  private checkAuthorization(user: fullUser, allowedRoles: string[]): boolean {
    if (!user) { return false }
    for (const role of allowedRoles) {
      if ( user.role[role] ) {
        return true
      }
    }
    return false
  }
    
}
