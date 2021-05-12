import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AuthService } from '../../_services/auth.service';
import { CollectionService } from '../../_services/collection.service';
import { TicketService } from '../../_services/ticket.service';
import { TicketComponent } from '../../_shared/tickets/ticket.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss']
})
export class AdminDashboardPage implements OnInit {

  tickets: Observable<any>;
  titleId = 'RF$\u2122 Admin Dashboard';
  admins;
  users;
  members;

  constructor(
    public authService: AuthService,
    private ticket: TicketService,
    private modalCtrl: ModalController,
    private collection: CollectionService
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


  signOut() {
   this.authService.SignOut();
  }
}
