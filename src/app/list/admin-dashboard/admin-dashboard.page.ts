import { ModalController } from '@ionic/angular';
import { TicketService } from './../../core/services/ticket.service';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketPage } from '../../ticket/ticket.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as Firebase from 'firebase/app';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  tickets: Observable<any>;

  constructor(
    private auth: AuthService,
    private ticket: TicketService,
    private modalCtrl: ModalController,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.tickets = this.ticket.getAdminTickets();
  }

  async openTicket(id) {
    const modal = await this.modalCtrl.create({
      component: TicketPage,
      componentProps: {
        id
      }
    });
    await modal.present();
  }

  // listAllUsers(nextPageToken) {
  // // List batch of users, 1000 at a time.
  //   Admin.auth().listUsers.auth().listUsers
  //     .then(function (listUsersResult) {
  //       listUsersResult.users.forEach(function (userRecord) {
  //         console.log('user', userRecord.toJSON());
  //       });
  //       if (listUsersResult.pageToken) {
  //         // List next batch of users.
  //         listAllUsers(listUsersResult.pageToken);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log('Error listing users:', error);
  //     });
  // }


  SignOut() {
    this.auth.SignOut();
  }
}
