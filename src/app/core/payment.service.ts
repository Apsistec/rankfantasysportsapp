// import { environment } from '../../environments/environment';
// import { switchMap, map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, pipe, from } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Customer, Source, Charge, SubscriptionPlan, StripeObject } from '../models';
import { User } from './user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  user: User;
  // readonly api = `${environment.functionsURL}/app`;

  private stripe = Stripe(environment.stripePublishable);
  elements: any;
  constructor(public auth: AuthService, public functions: AngularFireFunctions) {
    this.elements = this.stripe.elements()
  }
  source;
  cancle;
  confirmation;
  @Input() planId: string;
  @Input() amount: number;
  card;
  attachSourc;
  subscriptions$;


  ///// PAYMENT ACTIONS ////


  async createCharge(card: any, amount: number) {


  }

  // Saves a payment source to the user account that can be charged later
  async attachSource() {
    const funSource = this.functions.httpsCallable('stripeAttachSource');
    this.attachSourc = await funSource(this.card)
    return this.source;
  }


  ///// SUBSCRIPTION ACTIONS ////

  // Attaches subscription to user (Stripe will charge the source)
  async attachSubscription() {
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeCreateSubscription');
    this.confirmation = await fun({ source: this.source.id , uid: user.uid, plan: this.planId }).toPromise();
  }

  // Cancels subscription
  async cancelSubscription() {
    const fun = this.functions.httpsCallable('stripeCreateSubscription');
    await fun({ plan: this.planId }).toPromise();
  }

  // Get Subscriptions
  async getSubscriptions() {
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subscriptions$ = await fun({ uid: this.user.uid }).toPromise();
  }
}
