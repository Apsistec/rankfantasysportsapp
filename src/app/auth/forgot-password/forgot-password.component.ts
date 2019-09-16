import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
// import { SubmitIfValidDirective } from '../../shared/directives/submit-if-valid.directive';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
