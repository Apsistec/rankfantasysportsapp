import { Component, OnInit, AfterContentChecked  , ViewChild, ElementRef, Input } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  
  
  @ViewChild('cardElement') cardElement: ElementRef;
  price = '';
  planId: string = '';
  stripe: stripe.Stripe;
  card;
  cardErrors;

  loading = false;
  confirmation;
  isClickedSilver;
  isClickedGold;
  isClickedBronze;
  
  ngOnInit() {
    this.stripe = Stripe('pk_live_zv7QgGqhVvrQW6bAUAn7yju400T3RMqWDt');
    const elements = this.stripe.elements();

    this.isClickedGold = false;
    this.isClickedSilver = false;
    this.isClickedBronze = false;

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
      alert(cardErrors);
    } else {
      // Send the token to your server.
      this.loading = true;
      const user = await this.auth.getUser();
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      this.confirmation = await fun({ source: source.id, uid: user.uid, plan: this.planId }).toPromise();
      this.loading = false;
      window.alert('Thank You and Welcome to Rank Fantasy Sports! You are Subscribed!');
      this.router.navigate(['list']);
    }
    

  }

  clickedGold() {
    this.isClickedSilver = false;
    this.isClickedBronze = false;
    this.isClickedGold = true;
    this.planId = 'Gold';
    this.price = '$90.00 per year';
  }
  
  clickedSilver() {
    this.isClickedBronze = false;
    this.isClickedGold = false;
    this.isClickedSilver = true;
    this.planId = 'Silver';
    this.price = '$50.00 per 6 months';
    
    
  }
  
  clickedBronze() {
    this.isClickedSilver = false;
    this.isClickedGold = false;
    this.isClickedBronze= true;
    this.planId = 'Bronze';
    this.price = '$9.99 per month';
  }
}
