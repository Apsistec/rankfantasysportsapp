import { AuthService } from '@services/auth.service';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { MessageService } from '@services/message.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SpinnerService } from '@services/spinner.service';

@Component({
  selector: 'app-login-element',
  templateUrl: './login-element.component.html',
  styleUrls: ['./login-element.component.scss'],
})
export class LoginElementComponent implements OnInit {
  hidePass: boolean;
  user;

  loginForm;
  // @ViewChild(WizardComponent, {static: false}) public wizard: WizardComponent;


  @Output() readyToStep = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private spinner: SpinnerService,
    private router: Router,
    private message: MessageService,
    private modal: ModalController,
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


  async onSubmit(login: NgForm) {
    this.spinner.loadSpinner();
    return this.auth.signIn(this.loginForm.value).then (() => {
      this.message.isLoggedInToast();
      this.spinner.dismissSpinner();
      this.modal.dismiss();
      login.reset();
      if (this.user.role === 'ADMIN') {
        this.router.navigateByUrl('/admin');
      } else if (this.user.plan && (this.user.status === 'active' || 'trialing')) {
        this.router.navigateByUrl('/profile');
      } else {
        this.router.navigateByUrl('/membership')        }
    }, (async (err) => {
        this.spinner.dismissSpinner();
        this.modal.dismiss();
        this.message.errorAlert(err.message);
      }
    )
    )
  }

}
