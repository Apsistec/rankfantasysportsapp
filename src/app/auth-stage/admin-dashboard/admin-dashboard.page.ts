import { ModalController } from '@ionic/angular';
import { TicketService } from '../../_services/ticket.service';
import { AuthService } from '../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketComponent } from '../../shared/tickets/ticket.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../../_models/user';

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
  titleId = 'RF$\u2122 Admin Dashboard';

  constructor(
    public auth: AuthService,
    private ticket: TicketService,
    private modalCtrl: ModalController,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.tickets = this.ticket.getAdminTickets();
    this.admins = this.db.collection('users', ref => ref.where ('role', '==', 'ADMIN')).valueChanges();
    this.users = this.db.collection('users', ref => ref.where ('role', '==', 'USER')).valueChanges();
  }

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
