import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  titleId = 'RF$\u2122 Welcomes You';

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}