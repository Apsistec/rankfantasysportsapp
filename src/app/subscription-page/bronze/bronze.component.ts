import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'app-bronze',
  templateUrl: './bronze.component.html',
  styleUrls: ['./bronze.component.scss'],
})
export class BronzeComponent implements OnInit {

  constructor(private auth: AuthService, private functions: AngularFireFunctions) { }
  stripe: stripe.Stripe;
  loading = false;
  confirmation;
  card;

  ngOnInit() {}

  async handleForm(e) {
    e.preventDefault();

    const { source, error } = await this.stripe.createSource(this.card);

    if (error) {
      // Inform the customer that there was an error.
      const cardErrors = error.message;
    } else {
      // Send the token to your server.
      this.loading = true;
      const user = await this.auth.getUser();
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      this.confirmation = await fun({ source: source.id, uid: user.uid, plan: 'plan_FCqXwICAOJTNVw'}).toPromise();
      this.loading = false;

    }
  }

}
