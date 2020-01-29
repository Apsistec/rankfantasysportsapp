import { AuthService } from '../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../../_services/message.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SpinnerService } from '../../_services/spinner.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  titleId = 'RF$\u2122 Signup';
  hide = true;
  registerForm;

  constructor(
    public auth: AuthService,
    private router: Router,
    public modalCtrl: ModalController,
    private fb: FormBuilder,
    private spinner: SpinnerService,
    private message: MessageService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
          Validators.maxLength(25)
        ]
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
          Validators.maxLength(25)
        ]
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
          Validators.maxLength(25)
        ]
      ]
    });
  }

  gotoLogin() {
    // this.modalDismiss();
    this.router.navigateByUrl('/login');
  }

  // modalDismiss() {
  //   // using the injected ModalController this page
  //   // can "dismiss" itself and optionally pass back data
  //   this.modalCtrl.dismiss();

  async register() {
    this.spinner.loadSpinner();
    return this.auth.SignUp(this.registerForm.value).then(
      async res => {
        await this.spinner.dismissSpinner();
        this.message.registerSuccessToast(res);
        this.router.navigateByUrl('/purchase');
      },
      async err => {
        await this.spinner.dismissSpinner();
        this.message.errorAlert(err.message);
      }
    );
  }
}
