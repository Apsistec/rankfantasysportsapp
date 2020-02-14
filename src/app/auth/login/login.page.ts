import { AuthService } from '../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SpinnerService } from '../../_services/spinner.service';
import { Router } from '@angular/router';
import { MessageService } from '../../_services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  hidePass: boolean;
  user;
  titleId = 'RF$\u2122 Login';

  loginForm = this.fb.group({
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

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private spinner: SpinnerService,
    private router: Router,
    private message: MessageService
  ) {}

  ngOnInit() {
    this.hidePass = true;
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

  async onSubmit(login) {
    this.spinner.loadSpinner();
    this.auth.SignIn(this.loginForm.value).subscribe(
      data => {
        this.message.isLoggedInToast();
        this.spinner.dismissSpinner();
        login.reset();
        if (data.role === 'ADMIN') {
          this.router.navigateByUrl('/admin');
        } else if (data.plan && (data.status === 'active' || 'trialing')) {
          this.router.navigateByUrl('/profile');
        } else {
          this.router.navigateByUrl('/purchase');
        }
      },
      async err => {
        this.spinner.dismissSpinner();
        login.reset();
        this.message.errorAlert(err.message);
      }
    );
  }
}
