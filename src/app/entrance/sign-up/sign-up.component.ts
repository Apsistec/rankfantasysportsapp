import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {



  userEmail: string;
  userPwd: string;
  userName: string;

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  signUp() {
    this.authService.SignUp(this.userEmail, this.userPwd);
    this.authService.SetUserData(this.userName);
  }
}
