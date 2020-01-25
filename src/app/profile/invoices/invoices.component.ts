import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
<<<<<<< Updated upstream:src/app/profile/invoices/invoices.component.ts
<<<<<<< Updated upstream:src/app/auth/profile/invoices/invoices.component.ts
import { Observable } from 'rxjs';
import { StripeService } from '@services/stripe.service';
=======
import { StripeService } from '../../_services/stripe.service';
>>>>>>> Stashed changes:src/app/profile/invoices/invoices.component.ts
=======
import { StripeService } from '../../_services/stripe.service';
>>>>>>> Stashed changes:src/app/auth/profile/invoices/invoices.component.ts

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  // invoices;

  constructor(
    private modalCtrl: ModalController,
    public stripeService: StripeService
  ) {}

  ngOnInit() {
    this.stripeService.getInvoices();
  }

  async dismissModal() {
    this.modalCtrl.dismiss();
  }
}
