import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { NgForm } from '@angular/forms';
declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss']
})
export class SubscriptionPageComponent implements OnInit {


  constructor(private auth: AuthService, private functions: AngularFireFunctions) { }
  @Input() plan: string;
 
  @ViewChild('cardElement') cardElement: ElementRef;

  stripe: stripe.Stripe;
  card;
  cardErrors;

  loading = false;
  confirmation;


  ngOnInit() {
    this.stripe = Stripe('pk_test_mFFXjOh5rHb7VLruDV39tGE200iVUj9Ook');
    const elements = this.stripe.elements();

    this.card = elements.create('card', {
      'style': {
        'base': {
          'fontFamily': 'Arial, sans-serif',
          'fontSize': '18px',
          'color': '#0f0f0f',
        },
        'invalid': {
          'color': 'red',
        },
      }
    });
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
    });
  }

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
      this.confirmation = await fun({ source: source.id, uid: user.uid, plan: this.plan }).toPromise();
      this.loading = false;

    }
  }



}
