import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var Stripe: stripe.StripeStatic;

@Component({
  selector: "subscription-page",
  templateUrl: "./subscription-page.component.html",
  styleUrls: ["./subscription-page.component.scss"]
})
export class SubscriptionPageComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private functions: AngularFireFunctions,
    private router: Router
  ) {}

  @Input() planId: string;
  @Input() price: string;
  // isClickedSilver;
  // isClickedGold;
  // isClickedBronze;
  // @Input() isClickedSilver;
  // @Input() isClickedGold;
  // @Input() isClickedBronze;
  // planChosen;
  @Input() planChosen;

  @ViewChild("cardElement") cardElement: ElementRef;
  stripe: stripe.Stripe;
  card;
  cardErrors;
  loading = false;
  confirmation;

  ngOnInit() {
    this.stripe = Stripe("pk_live_zv7QgGqhVvrQW6bAUAn7yju400T3RMqWDt");
    const elements = this.stripe.elements();
    this.card = elements.create("card", {
      style: {
        base: {
          color: "#32325d",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "18px",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "red"
        }
      }
    });
    this.card.mount(this.cardElement.nativeElement);
    this.card.addEventListener("change", ({ error }) => {
      this.cardErrors = error && error.message;
    });
  }

  async handleForm(e) {
    e.preventDefault();
    const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
      // Inform the customer that there was an error.
      const cardErrors = error.message;
      window.alert(cardErrors);
    } else {
      // Send the token to your server.
      this.loading = true;
      const user = await this.auth.getUser();
      const fun = this.functions.httpsCallable("stripeCreateSubscription");
      this.confirmation = await fun({
        source: source.id,
        uid: user.uid,
        plan: this.planId
      }).toPromise();
      this.loading = false;
      window.alert(
        "Thank You and Welcome to Rank Fantasy Sports! You are Subscribed!"
      );
      this.router.navigate(["list"]);
    }
  }
}
