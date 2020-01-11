import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})

export class CollectionService {
  usersRef: AngularFirestoreCollection<User>;
  users: Observable<any>;
  admins: Observable<any>;
  members: Observable<any>;

  constructor(
    private db: AngularFirestore,
    private auth: AuthService,
    private afAuth: AngularFireAuth
  ) {}

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
