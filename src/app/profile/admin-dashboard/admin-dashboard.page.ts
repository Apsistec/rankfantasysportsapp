import { ModalController } from '@ionic/angular';
import { TicketService } from '../../_services/ticket.service';
import { AuthService } from '../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketComponent } from '../../_shared/tickets/ticket.component';
import { CollectionService } from '../../_services/collection.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss']
})
export class AdminDashboardPage implements OnInit {
  tickets: Observable<any>;
  titleId = 'RF$\u2122 Admin Dashboard';
  admins: Observable<any>;
  users: Observable<any>;
  members: Observable<any>;

  constructor(
    public auth: AuthService,
    private ticket: TicketService,
    private modalCtrl: ModalController,
    private collection: CollectionService,
    private db: AngularFirestore,
    private fun: AngularFireFunctions
  ) {}

  ngOnInit() {
    this.admins = this.collection.getAdmins();
    this.users = this.collection.getUsersCollection();
    this.members = this.collection.getMembers();
    this.tickets = this.ticket.getAdminTickets();
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

  sendEmail() {
    const callable = this.fun.httpsCallable('genericEmail');
    callable({
      text: 'Sending email with Angular and SendGrid is fun!',
      subject: 'Email from Angular'
    }).subscribe();
  }

  SignOut() {
    this.auth.SignOut();
  }
}
