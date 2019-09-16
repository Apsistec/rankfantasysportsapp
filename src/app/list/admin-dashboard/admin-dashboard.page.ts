import { ModalController } from '@ionic/angular';
import { TicketService } from './../../core/services/ticket.service';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketPage } from '../../ticket/ticket.page';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  tickets: Observable<any>;

  constructor(private auth: AuthService, private ticket: TicketService, private modalCtrl: ModalController) { }

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

  SignOut() {
    this.auth.SignOut();
  }
}
