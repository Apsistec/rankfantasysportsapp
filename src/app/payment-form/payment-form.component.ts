import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { PaymentService } from '../core/payment.service';
import { Charge, Source } from '../models';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit, OnDestroy {

  // Total amount of the charge
  // @Input() totalAmount: number;

  // Emit result of operation to other components
  @Output() stripeResult = new EventEmitter<Source>();

  // Result used locacally to display status.
  result: Source;

  // The Stripe Elements Card
  @ViewChild('cardElement') cardElement: ElementRef;
  card: any;
  formError: string;
  formComplete = false

  // State of async activity
  loading = false;

  constructor(private cd: ChangeDetectorRef, public pmt: PaymentService) { }

  ngOnInit() {
    this.card = this.pmt.elements.create('card');
    this.card.mount(this.cardElement.nativeElement);

    // Listens to change event on the card for validation errors
    this.card.on('change', (evt) => {
      this.formError = evt.error ? evt.error.message : null
      this.formComplete = evt.complete
      this.cd.detectChanges()
    })
  }

  // Called when the user submits the form
  formHandler(): void {
    this.loading = true
    let action;
    if (this.card)
    action = this.pmt.attachSource()
    

    action.subscribe(
      data => {
        this.result = data
        this.stripeResult.emit(data)
        this.loading = false
      },
      err => {
        this.result = err
        this.loading = false;
      }
    );
  }


  ngOnDestroy() {
    this.card.destroy();
  }

}
