import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss']
})
export class VerifyEmailPage implements OnInit {
  titleId = 'Verify RF$\u2122 Email';

  constructor(
    public auth: AuthService
  ) {}

  ngOnInit() {

  }
}
