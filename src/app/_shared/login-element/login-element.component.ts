import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SpinnerService } from '@services/spinner.service';
import { Router } from '@angular/router';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-login-element',
  templateUrl: './login-element.component.html',
  styleUrls: ['./login-element.component.scss'],
})
export class LoginElementComponent implements OnInit {

  hidePass: boolean;
  user;

  login; 
  loginForm;

  // loginForm = this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: [
  //     '',
  //     [
  //       Validators.required,
  //       Validators.minLength(8),
  //       Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
  //       Validators.maxLength(25)
  //     ]
  //   ]
  // });

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
