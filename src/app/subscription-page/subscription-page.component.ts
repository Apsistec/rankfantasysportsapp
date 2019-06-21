import { PaymentService } from '../core/payment.service';
import { AuthService } from '../core/auth.service';
import { NgForm } from '@angular/forms';
import {  Source,  SubscriptionPlan,  } from '../models';
import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';


const options = {
  // Custom styling can be passed to options when creating an Element.
  style: {
    base: {
      // Add your base input styles here. For example:
      fontSize: '16px',
      color: '#9d33f4',
      padding: '18px 20px',
    },
  }
}
@Component({
  selector: 'subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss']
})
export class SubscriptionPageComponent implements OnInit {
  planId: string;
  sourceId: string;
  userSubscriptions;
  cancelSubs;
  stripe: stripe.Stripe;
  loading = false;
  
  cardErrors;
  // Emit result of operation to other components
  // @Output() stripeResult = new EventEmitter<Source>();
  // subscriptions$: Observable<any>;

  // Result used locacally to display status.
  source: Source;
  // The Stripe Elements Card
  @ViewChild('cardElement') cardElement: ElementRef;
  formError: string;
  formComplete = false
  confirmation;
  error;
  status;
  card;
  constructor(
    public pmt: PaymentService,
    private cd: ChangeDetectorRef,
    public auth: AuthService,
    public functions: AngularFireFunctions
    ) { }

    ngOnInit() {
 
  }
 
  setSource(e) {
    this.sourceId = e.id;
  }

 
 

}
