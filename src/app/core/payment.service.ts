// import { environment } from '../../environments/environment';
import { switchMap, map } from 'rxjs/operators';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

import { Customer, Source, Charge, SubscriptionPlan, StripeObject } from '../models';
import { Injectable, EventEmitter, ViewChild, ElementRef, Output, Input } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ArgumentOutOfRangeError } from 'rxjs';
// import { Charge, Source } from '../models';



@Injectable()



export class PaymentService {

  elements: any;

  constructor(public auth: AuthService, public functions: AngularFireFunctions) {}
  @Input() planId: string;
  @Input() amount: number;
  @Input() description: string;
  @ViewChild('cardElement') cardElement: ElementRef;


  stripe: stripe.Stripe;
  card;
  // cardErrors;
  loading = false;
  confirmation;
 customer;
    async handleForm(e) {
      e.preventDefault();

      const { source, error } = await this.stripe.createSource(this.card);
      console.log(this.planId);
      if (error) {
        // Inform the customer that there was an error.
        const cardErrors = error.message;
      } else {
        // Send the token to your server.
        this.loading = true;
        const user = await this.auth.getUser();
        console.log(source.id);
        console.log(user.uid);
        const fun = this.functions.httpsCallable('stripeCreateSubscription');
        this.confirmation = await fun({ source: source.id, uid: user.uid, plan: this.planId }).toPromise();
        const customerId = await this.customer().toPromise();
        this.loading = false;
      }
    }
    }



// readonly api = `${environment.functionsURL}/app`;

// private stripe = Stripe(environment.stripePublishable);

// constructor(private http: HttpClient) {
//   this.elements = this.stripe.elements()
// }
///// RETRIEVE DATA ////

// Get customer data
// getCustomer(): Observable<Customer> {
//   const url = `${this.api}/customer/`;

//   return this.http.get<Customer>(url);
// }

// // Get a list of charges
// getCharges(): Observable<Charge[]> {
//   const url = `${this.api}/charges/`;

//   return this.http.get<StripeObject>(url).map(res => res.data);
// }


// ///// PAYMENT ACTIONS ////


// createCharge(card: any, amount: number): Observable<Charge> {
//   const url = `${this.api}/charges/`;

//   return fromPromise<Source>( this.stripe.createSource(card) ).pipe(
//     switchMap(data => {
//       return this.http.post<Charge>(url, { amount, sourceId: data.source.id })
//     })
//   )
// }

// Saves a payment source to the user account that can be charged later
// attachSource(card: any): Observable<Source> {
//   const url = `${this.api}/sources/`;

//   return from<Source>( this.stripe.createSource(card) ).pipe(
//     switchMap(data => {
//       return this.http.post<Source>(url, { sourceId: data.source.id })
//     })
//   )
// }


///// SUBSCRIPTION ACTIONS ////

// // Attaches subscription to user (Stripe will charge the source)
// attachSubscription(sourceId: string, planId: string): Observable<SubscriptionPlan> {
//     const url = `${this.api}/subscriptions`;

//     return this.http.post<SubscriptionPlan>(url, { sourceId, planId });
// }

// // Cancels subscription
// cancelSubscription(planId: string): Observable<SubscriptionPlan> {
//   const url = `${this.api}/subscriptions/cancel`;

//   return this.http.put<SubscriptionPlan>(url, { planId });
// }