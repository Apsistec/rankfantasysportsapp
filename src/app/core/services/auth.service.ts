import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, take, map, tap, first } from 'rxjs/operators';
import { from, Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { MessageService } from './message.service';

// import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  currentUser = new BehaviorSubject(null);
  userData: User;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private message: MessageService
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
      return user;
  }

  getUserInformation() {
    return this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges();
  }

  updateUser (displayName) {
    return this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
    .update({displayName: displayName});
  }

  updateEmail (email) {
    return this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
    .update({email: email});
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
    const user = this.getUser();
    return (user === null ) ? true : false;
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

  // hasRole(role: string[]): boolean {
  //   for (const rol of role) {
  //     if (!this.currentUser.value || !this.currentUser.value.role.includes(rol)) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  async signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(data => {
      return this.afs.doc<User>(`users/${data.user.uid}`).set({
        displayName: credentials.firstName + ' ' + credentials.lastName,
        email: data.user.email,
        uid: data.user.uid,
        role: 'USER',
        permissions: ['delete-ticket'],
        firstSignIn: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: data.user.photoURL
      }, {merge: true});
    })
    .catch(async (err) => {
      this.message.errorAlert(err);

    });
  }

  signIn(credentials): Observable<any> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.user.uid}`).valueChanges().pipe(
            take(1)
          );
        } else {
          return of(null);
        }
      })
    );
  }

// Auth logic to Register using federated auth providers
  async AuthRegister(provider) {
    return await this.afAuth.auth.signInWithPopup(provider)
      .then((data) => {
        return this.afs.doc<User>(`users/${data.user.uid}`)
        .set({
          displayName: data.user.displayName,
          email: data.user.email,
          uid: data.user.uid,
          role: 'USER',
          permissions: ['delete-ticket'],
          firstSignIn: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: data.user.photoURL
        }, { merge: true })
        .then(async () => {

        })
        .then(() => {
          this.ngZone.run(() => {
            this.router.navigateByUrl('/purchase');
          });
        });
      })
      .catch(async (err) => {
        this.message.errorAlert(err);
      });
  }

  // Auth logic to Login using federated auth providers
  async AuthLogin(provider) {
    const result =  await this.afAuth.auth.signInWithPopup(provider);
    // .then((result) => {
      if (!result.user) {
        this.SignOut()
        .then (async(wrongAccount) => {
          this.message.wrongAccountAlert();
        });
      } else {
        this.message.federatedLoginToast(result);
        return this.afs.doc(`users/${result.user.uid}`).update({
          // lastSignIn: this.afs.collection('users/${result.user.uid}', ref => ref.onSnapshot
        })
        .then(() => {
          this.ngZone.run(() => {
            this.router.navigateByUrl('/auth/profile');
          });
        })
        .catch(async (err) => {
          this.message.errorAlert(err);
        });
      }
  }


  async resetPassword(email: string) {
    await this.afAuth.auth.sendPasswordResetEmail(email)
    .then(() => this.message.resetPasswordAlert(email))
    .catch(async (err) => {
      this.message.errorAlert(err);

    });
  }

  // Sign out
  async SignOut() {
    await this.afAuth.auth.signOut()
    .then(() => {
      return this.message.signOutToast()
      .then(() => {
        return this.router.navigate(['/home']);
      });
    }).catch(async (err) => {
      this.message.errorAlert(err);
    });
  }
}
