import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from '../core/payment.service';
import { switchMap, tap, map } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';
// import { Customer, Source, Charge, SubscriptionPlan, StripeObject } from '../models';

@Component({
  selector: 'subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss']
})
export class SubscriptionPlanComponent implements OnInit {

  @Input() planId: string;
  @Input() sourceId: string;

  subscriptions$: Observable<any>;
  loading = false;
  cancelSub;
  getSubs;
  constructor(
    public auth: AuthService,
    public pmt: PaymentService,
    public functions: AngularFireFunctions
    ) { }

  ngOnInit() {
    this.subscriptions$ = this.auth.user.map( user => user.subscriptions || {} );
  }

    async cancelSubscription() {
      this.loading = true;
      const funSub = this.functions.httpsCallable('stripeCancelSubscription');
      this.cancelSub = await funSub({plan: this.planId}).toPromise();
      this.loading = false;
      alert('You have been unsubscribed');
  }

  async getSubscriptions() {
    this.loading = true;
    const user = await this.auth.getUser();
    const getFun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.getSubs = await getFun({ uid: user.uid}).toPromise();
    this.loading = false;
  }

}
