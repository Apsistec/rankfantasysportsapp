import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {
  isLogin = true;

  constructor(
    public auth: AuthService
  ) {}

  ngOnInit() {}

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    const displayName = form.value['username'];
    const email = form.value['email'];
    const password = form.value['password'];
    if (this.isLogin) {
      this.auth.SignIn(email, password);
    }
    else {
        this.auth.SignUp(email, password) &&
          this.auth.SetUserData(displayName);
      }
    }

      
}
