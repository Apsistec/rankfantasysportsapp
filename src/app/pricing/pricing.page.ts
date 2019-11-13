import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
})
export class PricingPage implements OnInit {
  titleId = 'RF$ Pro Membership Pricing';
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
