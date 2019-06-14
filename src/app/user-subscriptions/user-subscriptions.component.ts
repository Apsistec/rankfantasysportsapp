import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../core/payment.service';
import { tap, map } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { Observable, pipe} from 'rxjs';
import { SubscriptionPlan } from '../models';

@Component({
  selector: 'user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.scss']
})
export class UserSubscriptionsComponent implements OnInit {

   subscriptions$: Observable<SubscriptionPlan>;

  constructor(public pmt: PaymentService, public auth: AuthService) { }

  ngOnInit() {
    this.subscriptions$ = this.pmt.customer().map(user => user.subscriptions.data );
  }

}
