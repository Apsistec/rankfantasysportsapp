import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
// import { AlertController } from '@ionic/angular';
// import { User } from '../core/user';

declare var Stripe: stripe.StripeStatic;

const style = {
  base: {
    // Add your base input styles here. For example:
    fontSize: '18px',
    color: '#000000',
  },
};

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  isLoading = false;

  constructor(
    public auth: AuthService,
    private functions: AngularFireFunctions,
    private loadingCtrl: LoadingController
    ) {}

  @Input() amount: number;
  @Input() description: string;
  @ViewChild('cardElement') cardElement: ElementRef;

  stripe: stripe.Stripe;
  card;
  cardErrors;

  confirmation;
  // user: User;


  ngOnInit() {
    this.stripe = Stripe('pk_test_mFFXjOh5rHb7VLruDV39tGE200iVUj9Ook');
    const elements = this.stripe.elements();

    this.card = elements.create('card', {style});
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', ({ error }) => {
        this.cardErrors = error && error.message;
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
  async handleForm(e) {
    // e.preventDefault();

    this.isLoading = true;
    const { source, error } = await this.stripe.createSource(this.card);

    if (error) {
      // Inform the customer that there was an error.
      const cardErrors = error.message;
    } else {

      // Send the token to your server.
      const user = await this.auth.afAuth.user;
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      this.confirmation = await fun({ plan: 'plan_FCqXwICAOJTNVw', source: source.id }).toPromise();
      setTimeout(() => {
        this.isLoading = false;
        window.alert('You have Subscribed to the Pro Plan, Great Choice!')
      }, 1500);
    }
  }
}


