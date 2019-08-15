import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

declare var Stripe: stripe.StripeStatic;
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  loading = false;
  user: User;
  stripe: stripe.Stripe;
  card;
  cardErrors;
  confirmation;
  // cardElement;
  // planId;
  // price;

  constructor(
    private router: Router,
    private auth: AuthService,
    private aff: AngularFireFunctions,
    public toast: ToastController
  ) {
    // const form = document.getElementById('payment-form');
    // form.addEventListener('submit', async (event) => {
    //   event.preventDefault();

    //   const { source, error } = await this.stripe.createSource(this.card); 
    //   if (error) {
    //     // Inform the customer that there was an error.
    //     const errorElement = document.getElementById('card-errors');
    //     errorElement.textContent = error.message;
    //   } else {
    //     // Send the source to your server.
    //     this.subscriptionHandler(source);
    //   }
    // });
  }
// Attach a Payment Source
const attachFun = this.aff.httpsCallable('stripeAttachSource');
const sourceHandler = async (source) => {
  const res = await this.attachFun({ source: source.id });
  alert('Success! source attached to customer');

}

// Create Charge for Specfic Amount
const chargeFun = fun.httpsCallable('stripeCreateCharge');
const chargeHandler = async (source) => {
  const res = await chargeFun({ source: source.id, amount: 3000 });
  console.log(res);
  alert('Success, charged customer $30.00');
}


// Get Charges
const chargesBtn = document.getElementById('charges');
const getChargesFun = fun.httpsCallable('stripeGetCharges');

// chargesBtn.onclick = async(source) => {
//   const res = await getChargesFun();
//   console.log(res)
//   const node = document.createElement('pre')
//   node.innerText = JSON.stringify(res);
//   chargesBtn.replaceWith(node)
// }


/// Subscriptions

// Create Charge for Specfic Amount
const subscriptionFun = fun.httpsCallable('stripeCreateSubscription');
const subscriptionHandler = async (source) => {
  console.log(source.id);
  const res = await this.subscriptionFun({ plan: 'bronze-plan', source: source.id });
  console.log(res);
  alert('Success, subscribed to plan');
}

// Coupons

const couponForm = document.getElementById('couponForm');
const couponFun = fun.httpsCallable('stripeGetCoupon');

couponForm.onblur = async () => {
  const val = couponForm.value;
  console.log(val)
  const coupon = await couponFun({ coupon: val });
  console.log(coupon);
  alert(`sweet! ${coupon.data.name}`)
}


  
}
