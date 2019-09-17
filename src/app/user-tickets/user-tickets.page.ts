import { TicketService } from './../core/services/ticket.service';
import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TicketPage } from '../ticket/ticket.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.page.html',
  styleUrls: ['./user-tickets.page.scss'],
})
export class UserTicketsPage implements OnInit {
  tickets: Observable<any>;

  constructor(private auth: AuthService, private modalCtrl: ModalController, private ticket: TicketService) { }

  ngOnInit() {
    this.tickets = this.ticket.getUserTickets();
  }

  async openTicketModal() {
    const modal = await this.modalCtrl.create({
      component: TicketPage
    });
    await modal.present();
  }

  signOut() {
    this.auth.SignOut();
  }
}