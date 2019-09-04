import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-free-trial-login',
  templateUrl: './free-trial-login.page.html',
  styleUrls: ['./free-trial-login.page.scss'],
})
export class FreeTrialLoginPage {
  hide = true;
  constructor(
    public auth: AuthService,
  ) { }
}


