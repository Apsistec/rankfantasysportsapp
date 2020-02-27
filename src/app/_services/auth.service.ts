import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable, NgZone} from '@angular/core';
import { MessageService } from './message.service';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { User as fullUser } from '@models/user';
import * as firebase from 'firebase/app'
import { tap, take, map } from 'rxjs/operators';


export interface UserCredentials {
  displayName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<fullUser>;
  
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
    if (this.currentUser.role === 'ADMIN') {
      this.router.navigateByUrl('/admin');
    } else {
      if (this.currentUser.role === 'USER') {
        const sub = (this.user['gold'] || this.user['silver'] || this.user['bronze']);
        if (sub) {
          this.router.navigateByUrl('/profile');
        } else {
          this.router.navigateByUrl('/home');
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
      }).catch((err) => {
        this.message.errorAlert(err.message)
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
      this.message.signOutToast().then(() => {
        this.router.navigate(['home']);
      })
    })
  }



// User Roles to coincide with backend server permissions/rules

bronze() {
  return this.user$
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

silver() {
  return this.user$
    .pipe(
      take(1),
      map(user => user && user.silver)
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
      map(user => user && user.gold)
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

    
}
