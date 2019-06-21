import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentService } from '../core/payment.service';
import { Source, Customer } from '../models';

@Component({
  selector: 'user-sources',
  templateUrl: './user-sources.component.html',
  styleUrls: ['./user-sources.component.scss']
})
export class UserSourcesComponent implements OnInit {
  data;
  customer$: Observable<Customer>;

  @Input()  canSelect: boolean;
  @Output() selectedSource = new EventEmitter<Source>();

  constructor(private pmt: PaymentService) { }

  ngOnInit() {
    // this.customer$ = this.pmt.getCustomer()
  }

  clickHandler(source: Source) {
    this.selectedSource.emit(source)
  }

}
