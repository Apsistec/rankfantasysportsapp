import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
})
export class PricingPage implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
