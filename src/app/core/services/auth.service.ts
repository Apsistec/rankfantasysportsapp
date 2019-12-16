import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, take, map, tap, first } from 'rxjs/operators';
import { from, Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { MessageService } from './message.service';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  currentUser = new BehaviorSubject(null);
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private message: MessageService,
    private storage: Storage
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc(`users/${user.uid}`).valueChanges().pipe(
            take(1),
            tap((data: any) => {
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

  get isLoggedIn(): boolean {
    const user = this.getUser();
    return (user === null ) ? true : false;
  }

  uid() {
    return this.user
      .pipe(
        // take(1),
        // map(u => u && u.uid)
      first()).toPromise();
  }



  async getUser() {
    const user = await this.afAuth.authState.pipe(first()).toPromise();
      return user;
  }

  async getUserInformation() {
    this.userData = await this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges().toPromise();
    return this.userData;
  }

  async updateUser (displayName: any) {
    return await this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
    .update({displayName: displayName});
  }

  async updateEmail (email: any) {
    return await this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
    .update({email: email});
  }

  async updateUserPhoto (photoURL: any) {
    return await this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
    .update({photoURL: photoURL});
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
    const isPaid = !!bronze;
    if (!isPaid) {
      return false;
    } else {
      return isPaid;
    }
  }

  silver() {
    return this.user
      .pipe(
        take(1),
        map(user => user && user.silver)
      )
      .toPromise();
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

  gold() {
    return this.user
      .pipe(
        take(1),
        map(user => user && user.gold)
      )
      .toPromise();
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


  // Returns true when user is looged in and email is verified


  // get isAdmin(): boolean {
  //   const user = this.afs.doc(`users/${this.user.uid}`)
  // }

  canRead(user: any): boolean {
    // const allowed = 'user.bronze' || 'user.silver' || 'user.gold';
    return this.checkAuthorization(user);
  }

  // determines if user has matching role
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

  // hasRole(role: string[]): boolean {
  //   for (const rol of role) {
  //     if (!this.currentUser.value || !this.currentUser.value.role.includes(rol)) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  async signUp(credentials: any) {
    await this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then((data: any) => {
      this.afs.doc<User>(`users/${data.user.uid}`).set({
        displayName: credentials.firstName + ' ' + credentials.lastName,
        email: data.user.email,
        uid: data.user.uid,
        role: 'USER',
        permissions: ['delete-ticket'],
        photoURL: data.user.photoURL
      }, {merge: true});
    })
    .catch(async (err) => {
      await this.message.errorAlert(err);

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
    ).catch(async (err) => {
        await this.message.errorAlert(err);
    });
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
    .then(() => this.message.resetPasswordAlert(email))
    .catch(async (err) => {
      await this.message.errorAlert(err);
    });
  }

  // Sign out
  async SignOut() {
    await this.afAuth.auth.signOut();
    this.message.signOutToast();
    return this.router.navigate(['/home']).catch(async (err) => {
      await this.message.errorAlert(err);
    });
  }
}
