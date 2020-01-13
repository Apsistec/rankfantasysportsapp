import { TicketService } from '../../_services/ticket.service';
import { AuthService } from '../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TicketComponent } from '../../_shared/tickets/ticket.component';

@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.page.html',
  styleUrls: ['./user-tickets.page.scss']
})
export class UserTicketsPage implements OnInit {
  tickets: Observable<any>;
  titleId = 'RF$\u2122 User Dashboard';
  constructor(
    public auth: AuthService,
    private modalCtrl: ModalController,
    private ticket: TicketService
  ) {}

  ngOnInit() {
    this.tickets = this.ticket.getUserTickets();
  }

  async openTicketModal() {
    const modal = await this.modalCtrl.create({
      component: TicketComponent
    });
    await modal.present();
  }

  signOut() {
    this.auth.SignOut();
  }
}
