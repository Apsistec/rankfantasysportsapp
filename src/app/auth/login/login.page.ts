import { AuthService } from '@services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SpinnerService } from '@services/spinner.service';
import { Router } from '@angular/router';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  hide = true;
  user;
  // @Input() user: User;
  titleId = 'RF$\u2122 Login';
  loginForm;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private spinner: SpinnerService,
    private router: Router,
    private message: MessageService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
          Validators.maxLength(25)
        ]
      ]
    });
  }

  async Login() {
    this.spinner.loadSpinner();
    this.auth.SignIn(this.loginForm.value).subscribe(user => {
      this.message.isLoggedInToast(user);
      this.spinner.dismissSpinner();
      if (user.role === 'ADMIN') {
        this.router.navigateByUrl('/admin');
      } else if (user.plan && (user.status === 'active' || 'trialing')) {
        this.router.navigateByUrl('/auth/profile');
      } else {
        this.router.navigateByUrl('/purchase');
      }
    }, async err => {
      this.spinner.dismissSpinner();
      this.message.errorAlert(err.message);
    });
  }
}
