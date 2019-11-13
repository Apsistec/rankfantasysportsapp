import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  titleId = 'Rank Fantasy $ports Welcomes You';
  
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
