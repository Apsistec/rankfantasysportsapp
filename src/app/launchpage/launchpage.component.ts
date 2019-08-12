import { AuthService } from '../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from '../core/models/user';
import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-launchpage',
  templateUrl: './launchpage.component.html',
  styleUrls: ['./launchpage.component.scss']
})

export class LaunchpageComponent implements OnInit, AfterViewInit {
  @Input() planId: string;
  @Input() price: string;
  @Input() planChosen;
  @ViewChild('cardElement') cardElement: ElementRef;


  isClickedSilver = false;
  isClickedGold = false;
  isClickedBronze = false;
  // planChosen = false;
  loading = false;

  user: User;
  stripe: stripe.Stripe;
  card;
  cardErrors;
  // cardElement;
  // planId;
  // price;
  confirmation;

  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
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
    return this.loading = false;
  }

  async onSubmit(f: NgForm) {
    this.loading = true;
    this.presentLoading();
    const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
      // Inform the customer that there was an error.
      const cardErrors = error.message;
      await window.alert(cardErrors);
    } else {
      const user = await this.auth.getUser();
      if (error) {
        // Inform the customer that there was an error.
        const userErrors = error.message;
        await window.alert(userErrors);
      } else {
        const fun = this.functions.httpsCallable('stripeCreateSubscription');
        this.confirmation = await fun({
          source: source.id,
          uid: this.user.uid,
          plan: this.planId
        }).toPromise()
          .then(() => {
            void this.onDismissLoader();
            window.alert(
              'Thank You and Welcome to Rank Fantasy Sports! You are Subscribed!'
            );
            return this.router.navigateByUrl('/list');
          });
      }
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