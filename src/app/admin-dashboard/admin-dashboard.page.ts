import { ModalController } from '@ionic/angular';
import { TicketService } from '../core/services/ticket.service';
import { AuthService } from '../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { TicketPage } from '../ticket/ticket.page';
import { TicketComponent } from '../tickets/ticket.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  tickets: Observable<any>;
  users: Observable<any[]>;
  admins: Observable<any[]>;
  ticketUser;
  constructor(
    public auth: AuthService,
    private ticket: TicketService,
    private modalCtrl: ModalController,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.tickets = this.ticket.getAdminTickets();
    this.users = this.db.collection('users', ref => ref.where ('role', '==', 'USER')).valueChanges();
    this.admins = this.db.collection('users', ref => ref.where ('role', '==', 'ADMIN')).valueChanges();
    }
  async openTicket(id) {
    const modal = await this.modalCtrl.create({
      // component: TicketPage,
      component: TicketComponent,
      componentProps: {
        id
      }
    });
    await modal.present();
  }

  SignOut() {
    this.auth.SignOut();
  }
}
