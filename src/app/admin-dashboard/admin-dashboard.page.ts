import { ModalController } from '@ionic/angular';
import { TicketService } from '../core/services/ticket.service';
import { AuthService } from '../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { TicketPage } from '../ticket/ticket.page';
import { TicketComponent } from '../tickets/ticket.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../core/models/user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})

export class AdminDashboardPage implements OnInit {
  tickets: Observable<any>;
  usersRef: AngularFirestoreCollection<User>;
  users: Observable<any>;
  admins: Observable<any>;
  titleId = 'Admin Dashboard';

  constructor(
    public auth: AuthService,
    private ticket: TicketService,
    private modalCtrl: ModalController,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.tickets = this.ticket.getAdminTickets();
    // this.users = this.usersRef.valueChanges();
    this.admins = this.db.collection('users', ref => ref.where ('role', '==', 'ADMIN')).valueChanges();
    this.users = this.db.collection('users', ref => ref.where ('role', '==', 'USER')).valueChanges();
  }



  // getGoldUsers() {
  //   this.goldUsers = this.db.collection('users', ref => ref.where ('key', 'beginswith', 'gold').where('gold', '==', 'true')).valueChanges();
  //   this.users = this.goldUsers;
  // }

  // getSilverUsers() {
  //   this.silverUsers = this.db.collection('users', ref => ref.where ('silver', '==', 'true')).valueChanges();
  //   this.users = this.silverUsers;
  // }

  // getBronzeUsers() {
  //   this.bronzeUsers = this.db.collection('users', ref => ref.where ('bronze', '==', 'true')).valueChanges();
  //   this.users = this.bronzeUsers;
  // }






  async openTicket(id) {
    const ticketModal = await this.modalCtrl.create({
      component: TicketComponent,
      componentProps: {
        id
      }
    });
    await ticketModal.present();
  }

  SignOut() {
    this.auth.SignOut();
  }
}
