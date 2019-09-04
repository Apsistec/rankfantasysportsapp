import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.page.html',
  styleUrls: ['./free-trial.page.scss'],
})
export class FreeTrialPage implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
