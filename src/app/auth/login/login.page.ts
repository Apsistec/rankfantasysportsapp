import { AuthService } from '@services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  hide = true;
  user;
  // @Input() user: User;
  titleId = 'RF$\u2122 Login';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'), Validators.maxLength(25)]]
  });

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,

  ) { }




  Login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.auth.SignIn(email, password);
  }


}
