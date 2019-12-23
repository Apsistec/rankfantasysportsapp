import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ModalController } from '@ionic/angular';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  invoices;
  Stripe;

  constructor(
    private functions: AngularFireFunctions,
    private modalCtrl: ModalController,
    private auth: AuthService
  ) { }

  ngOnInit() {}

  async getSubscriptions() {
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeGetInvoices');
    this.invoices = fun({uid: user.uid});
  }

}
