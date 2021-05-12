import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CollectionService {
  // usersRef: AngularFirestoreCollection<User>;
  users: Observable<any>;
  admins: Observable<any>;
  members: Observable<any>;
  wttsa: Observable<any>;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  getAcapulcoCollection() {
    return this.db
      .collection('Acapulco', ref => ref)
      .valueChanges();
  }
  getUsersCollection() {
    return this.db
      .collection('users', ref => ref.where('role', '==', 'USER'))
      .valueChanges();
  }

  getMembers() {
    return this.db
      .collection('users', ref =>
        ref.where('plan', '==', 'gold' || 'silver' || 'bronze')
      )
      .valueChanges();
  }

  getAdmins() {
    return this.db
      .collection('users', ref => ref.where('role', '==', 'ADMIN'))
      .valueChanges();
  }
}
