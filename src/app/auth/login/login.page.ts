import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginPage implements OnInit {

  @Input()login;
  
  titleId = 'RF$\u2122 Login';

  ngOnInit() {

  }
}
