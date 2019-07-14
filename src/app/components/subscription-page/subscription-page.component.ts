import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../core/auth.service';
import { User } from '../../core/user';
declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss']
})
export class SubscriptionPageComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private functions: AngularFireFunctions,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }
  // opts: LoadingOptions;
  @Input() planId: string;
  @Input() price: string;
  @Input() planChosen;
  @ViewChild('cardElement') cardElement: ElementRef;
  user: User;
  stripe: stripe.Stripe;
  load = false;
  card;
  cardErrors;
  confirmation;
  // spinMsg: string;

  ngOnInit() {
    this.stripe = Stripe('pk_live_zv7QgGqhVvrQW6bAUAn7yju400T3RMqWDt');
    const elements = this.stripe.elements();
    this.card = elements.create('card', {
      style: {
        base: {
          color: '#32325d',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '18px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: 'red'
        }
      }
    });
    this.card.mount(this.cardElement.nativeElement);
    this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
    });
  }

  async handleForm(e) {
    e.preventDefault();
    this.load = true;
    const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
      // Inform the customer that there was an error.
      const cardErrors = error.message;
      window.alert(cardErrors);
    } else {
      this.user = await this.auth.getUser();
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      this.confirmation = await fun({
        source: source.id,
        uid: this.user.uid,
        plan: this.planId
      }).toPromise().then(() => {
        void this.onDismissLoader();
        window.alert(
          'Thank You and Welcome to Rank Fantasy Sports! You are Subscribed!'
        );
        return this.router.navigateByUrl('/list');
      });
    }
  }

  async presentLoading() {
      const loadingElement = await this.loadingCtrl.create({
        message: 'Please wait...',
        spinner: 'crescent',
        duration: 2000
      });
      return loadingElement.present();
    }

  async onDismissLoader() {
    await this.loadingCtrl.dismiss();
    return this.load = false;
  }

}
