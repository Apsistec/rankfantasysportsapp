import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
})
export class PricingPage implements OnInit {
  titleId = 'RF$\u2122 Pro Pricing';
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
