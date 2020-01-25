import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from '../../_services/auth.service';
import { StripeService } from '../../_services/stripe.service';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.component.html',
  styleUrls: ['./cancel-subscription.component.scss']
})
export class CancelSubscriptionComponent implements OnInit {
  // confirmation;

  constructor(
    public functions: AngularFireFunctions,
    public load: LoadingController,
    public modalCtrl: ModalController,
    public auth: AuthService,
    public stripeService: StripeService
  ) {}
<<<<<<< Updated upstream:src/app/profile/cancel-subscription/cancel-subscription.component.ts

<<<<<<< Updated upstream:src/app/auth/profile/cancel-subscription/cancel-subscription.component.ts
  ) { }

  ngOnInit() {}



=======
  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
>>>>>>> Stashed changes:src/app/profile/cancel-subscription/cancel-subscription.component.ts
=======

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
>>>>>>> Stashed changes:src/app/auth/profile/cancel-subscription/cancel-subscription.component.ts
}
