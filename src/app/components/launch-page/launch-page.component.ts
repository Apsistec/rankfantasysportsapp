import { AuthService } from '../../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from '../../core/user';
import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

declare var Stripe: stripe.StripeStatic;

@Component ({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss']
})

export class LaunchPageComponent implements AfterViewInit {
  @Input() planId: string;
  @Input() price: string;
  @Input() planChosen;
  @ViewChild('cardElement') cardElement: ElementRef;

  // From Membership page
  // @Input() planId: string;
  // @Input() price: string;
  // @Input() planChosen;
  isClickedSilver;
  isClickedGold;
  isClickedBronze;

  user: User;
  stripe: stripe.Stripe;
  load = false;
  card;
  cardErrors;
  confirmation;
  // spinMsg: string;

  subscriptions;
  loading = false;

  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  async getSubscriptions() {
    this.loading = true;
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    await fun({ uid: user.uid }).toPromise;
    this.loading = false;
  }

  async cancelSubscriptions() {
    this.loading = true;
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    // tslint:disable-next-line: await-promise
    await fun({ uid: user.uid }).toPromise;
    this.loading = false;
  }


  ngAfterViewInit() {
    this.planChosen = false;
    this.isClickedGold = false;
    this.isClickedSilver = false;
    this.isClickedBronze = false;
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

  // async handleForm(e) {
  //   e.preventDefault();
  //   this.load = true;
  //   const { source, error } = await this.stripe.createSource(this.card);
  //   if (error) {
  //     // Inform the customer that there was an error.
  //     const cardErrors = error.message;
  //     window.alert(cardErrors);
  //   } else {
  //     this.user = await this.auth.getUser();
  //     const fun = this.functions.httpsCallable('stripeCreateSubscription');
  //     this.confirmation = await fun({
  //       source: source.id,
  //       uid: this.user.uid,
  //       plan: this.planId
  //     }).toPromise().then(() => {
  //       void this.onDismissLoader();
  //       window.alert(
  //         'Thank You and Welcome to Rank Fantasy Sports! You are Subscribed!'
  //       );
  //       return this.router.navigateByUrl('/list');
  //     });
  //   }
  // }

  async presentLoading() {
    const loadingElement = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    return loadingElement.present();
  }
  onDismissLoader() {
    this.loadingCtrl.dismiss();
    return this.load = false;
  }

  async onSubmit(f: NgForm) {
    this.load = true;
    this.presentLoading();
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


  clickedGold() {
    this.isClickedSilver = false;
    this.isClickedBronze = false;
    this.isClickedGold = true;
    this.planChosen = true;
    this.planId = 'Gold';
    this.price = '$90.00 for 12 Months';
  }

  clickedSilver() {
    this.isClickedBronze = false;
    this.isClickedGold = false;
    this.isClickedSilver = true;
    this.planChosen = true;
    this.planId = 'Silver';
    this.price = '$50.00 for 6 Months';
  }

  clickedBronze() {
    this.isClickedSilver = false;
    this.isClickedGold = false;
    this.isClickedBronze = true;
    this.planChosen = true;
    this.planId = 'Bronze';
    this.price = '$9.99 per Month';
  }
}
