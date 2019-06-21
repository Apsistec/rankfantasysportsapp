import { PaymentService } from '../core/payment.service';
import { switchMap, tap, map } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Component, OnInit, Input } from '@angular/core';

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
  
  // State of async activity
  constructor(
    public auth: AuthService,
    public pmt: PaymentService,
    public functions: AngularFireFunctions,
  
    ) { }

  ngOnInit() {
    // this.subscriptions$ = this.auth.user.map(user => user.subscriptions || {});

  }

  cancelHandler() {
    this.loading = true;
    const funSub = this.functions.httpsCallable('stripeCancelSubscription');
    const cancelSubs = funSub({ plan: this.planId }).subscribe(data => {
      this.loading = false;
      alert('You have been unsubscribed');
    });
  }
      

  createHandler() {
    this.loading = true;
    const user = this.auth.getUser();
    const getFun = this.functions.httpsCallable('stripeCreateSubscription');
    const createSubs = getFun({ source: this.sourceId, plan: this.planId }).subscribe(data => {
      this.loading = false;
    });
  }
      
  // ngOnDestroy() {
  //   this.card.destroy();
  // }
}
