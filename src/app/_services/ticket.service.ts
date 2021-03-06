import firebase from 'firebase/app';
import { Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
      }
    });
  }

  createOrUpdateTicket(id = null, info): Promise<any> {
    if (id) {
      return this.db.doc(`tickets/${id}`).update(info);
    } else {
      info.creator =this.authService.currentBehaviorUser.value.id;
      info.created_at = firebase.firestore.FieldValue.serverTimestamp();
      return this.db.collection('tickets').add(info);
    }
  }

  getUserTickets() {
    const id =this.authService.currentBehaviorUser.value.id;
    return this.db
      .collection('tickets', ref => ref.where('creator', '==', id))
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data: any = a.payload.doc.data();
            // tslint:disable-next-line: no-shadowed-variable
            const id: any = a.payload.doc.id;
            return { id, ...data };
          })
        ),
        takeUntil(this.ngUnsubscribe)
      );
  }

  getAdminTickets() {
    return this.db
      .collection('tickets')
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data: any = a.payload.doc.data();
            const id: any = a.payload.doc.id;
            return { id, ...data };
          })
        ),
        takeUntil(this.ngUnsubscribe)
      );
  }

  getTicket(id) {
    return this.db
      .doc(`tickets/${id}`)
      .valueChanges()
      .pipe(take(1));
  }

  getUser(id) {
    return this.db
      .doc(`users/${id}`)
      .valueChanges()
      .pipe(take(1));
  }

  deleteTicket(id) {
    return this.db.doc(`tickets/${id}`).delete();
  }
}
