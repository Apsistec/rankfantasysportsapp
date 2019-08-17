import { AuthService } from '../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from '../core/models/user';
import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-launchpage',
  templateUrl: './launchpage.component.html',
  styleUrls: ['./launchpage.component.scss']
})

export class LaunchpageComponent implements OnInit, AfterViewInit {
  // @Input() price: string;
  @ViewChild('cardElement') cardElement: ElementRef;
  planId: string;
  price: string;

  isClickedSilver = false;
  isClickedGold = false;
  isClickedBronze = false;
  planChosen = false;
  loading = false;

  user: User;
  stripe: stripe.Stripe;
  card;
  cardErrors;

  confirmation;

  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private router: Router,
    private loadingCtrl: LoadingController,
    public toaster: ToastController
  ) { }
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

  ngOnInit() {
    this.stripe = Stripe('pk_live_zv7QgGqhVvrQW6bAUAn7yju400T3RMqWDt');

    const elements = this.stripe.elements();
    const style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    // Create an instance of the card Element.
    this.card = elements.create('card', { style: style });
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
    });
    this.loading = false;
    this.planChosen = false;
    this.isClickedSilver = false;
    this.isClickedBronze = false;
    this.isClickedGold = false;
  }

  ngAfterViewInit() {
    // this.stripe = Stripe('pk_live_zv7QgGqhVvrQW6bAUAn7yju400T3RMqWDt');
    // const elements = this.stripe.elements();
    // this.card = elements.create('card');
    // this.card.mount(this.cardElement.nativeElement);
    // this.card.addEventListener('change', ({ error }) => {
    //   this.cardErrors = error && error.message;
    // });
  }

  async presentLoading() {
    const loadingElement = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    loadingElement.present();
  }
  onDismissLoader() {
    this.loadingCtrl.dismiss();
    return this.loading = false;
  }

  async subscribedToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'login',
      message: 'Thank You for your payment. You are subscribed!',
      position: 'bottom',
      duration: 7000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();

  }




  // // }
  // async handleForm(e) {
  //   e.preventDefault();

  //   const { source, error } = await this.stripe.createSource(this.card);

  //   if (error) {
  //     // Inform the customer that there was an error.
  //     const cardErrors = error.message;
  //   } else {
  //     // Send the token to your server.
  //     this.loading = true;
  //     const user = await this.auth.getUser();
  //     const fun = this.functions.httpsCallable('stripeCreateCharge');
  //     this.confirmation = await fun({ source: source.id, uid: user.uid, plan: this.planId }).toPromise();
  //     this.loading = false;

  //   }
  // }




  async onSubmit(f: NgForm) {

    this.loading = true;
    this.presentLoading();
    const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
      // Inform the customer that there was an error.
      const cardErrors = error.message;
      await window.alert(cardErrors);
    } else {
      this.planChosen = false;
      const user = await this.auth.getUser();
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      this.confirmation = await fun({
        source: source.id,
        uid: user.uid,
        plan: this.planId
      }).toPromise()
        .then(() => {
          void this.onDismissLoader();
          this.subscribedToast();
          this.loading = false;
          this.planChosen = false;
          this.isClickedSilver = false;
          this.isClickedBronze = false;
          this.isClickedGold = false;
          return this.router.navigate(['/launchpage']);
        })
        .catch((error) => {
          window.alert(error.message);
          void this.onDismissLoader();
          this.loading = false;
          this.planChosen = false;
          this.isClickedSilver = false;
          this.isClickedBronze = false;
          this.isClickedGold = false;
          });
    }
  }
}
