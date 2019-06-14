import {
  Component,
  // AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { PaymentService } from '../core/payment.service';
import { Charge, Source } from '../models';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';

declare var Stripe: stripe.StripeStatic;
const style = {

}

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit, OnDestroy {

  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private cd: ChangeDetectorRef,
    public pmt: PaymentService
    ) {}
  // Total amount of the charge
  @Input() totalAmount: number;

  // // Emit result of operation to other components
  @Output() stripeResult = new EventEmitter<Charge | Source>();

  // Result used locacally to display status.
  result: Charge | Source;

  // // The Stripe Elements Card
  // // @ViewChild('cardElement') cardElement: ElementRef;
  card: any;
  formError: string;
  formComplete = false;

  // // State of async activity
  loading = false;

  @Input() planId: string;
  @Input() amount: number;
  @Input() description: string;
  @ViewChild('cardElement') cardElement: ElementRef;
  source: Source;
  stripe: stripe.Stripe;
  // // card;
  cardErrors;

  // loading = false;
  confirmation;


  ngOnInit() {
    this.stripe = Stripe('pk_test_mFFXjOh5rHb7VLruDV39tGE200iVUj9Ook');
    const elements = this.stripe.elements();

    this.card = elements.create('card', { style: {
      base: {
        color: '#d7dfea',
        fontWeight: 600,
        fontFamily: 'Inter UI, Open Sans, Segoe UI, sans-serif',
        fontSize: '19px',
        fontSmoothing: 'antialiased',

        '::placeholder': {
          color: '#999b9e'
        }
      },
      invalid: {
        color: '#E25950'
      }
    }
  });
  
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', ({ error }) => {
        this.cardErrors = error && error.message;
    });
  }

  async handleForm(e) {
    e.preventDefault();

    const { source, error } = await this.stripe.createSource(this.card);

    if (error) {
      // Inform the customer that there was an error.
      const cardErrors = error.message;
    } else {
      // Send the token to your server.
      this.loading = true;
      const user = await this.auth.getUser();
      console.log(user);
      console.log(source.id);
      console.log(user.uid);
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      this.confirmation = await fun({ source: source.id, uid: user.uid, plan: this.planId }).toPromise();
      this.loading = false;
    }
  }



  // ngAfterViewInit() {
  //   this.card = this.pmt.elements.create('card');
  //   this.card.mount(this.cardElement.nativeElement);

  //   // Listens to change event on the card for validation errors
  //   this.card.on('change', (evt) => {
  //     this.formError = evt.error ? evt.error.message : null;
  //     this.formComplete = evt.complete;
  //     this.cd.detectChanges();
  //   });
  // }

  // Called when the user submits the form
  // formHandler(): void {
  //   this.loading = true
  //   let action;

  //   if (this.totalAmount) {
  //     action = this.pmt.createCharge(this.card, this.totalAmount);
  //   } else {
  //     action = this.pmt.attachSource(this.card);
  //   }

  //   action.subscribe(
  //     data => {
  //       this.result = data;
  //       this.stripeResult.emit(data);
  //       this.loading = false;
  //     },
  //     err => {
  //       this.result = err;
  //       this.loading = false;
  //     }
  //   );
  // }


  ngOnDestroy() {
    this.card.destroy();
  }

}

