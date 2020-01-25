<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { AuthService } from '@services/auth.service';
import { MessageService } from '@services/message.service';
import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
=======
=======
>>>>>>> Stashed changes
import { AuthService } from '../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../../_services/message.service';
import { ModalController } from '@ionic/angular';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    private fb: FormBuilder
  ) {
    document.body.style.overflow = 'hidden';
    }
=======
=======
>>>>>>> Stashed changes
    private fb: FormBuilder,
    private spinner: SpinnerService,
    private message: MessageService
  ) {}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  register() {
    this.loadLoader();
    // const fullName: string = this.registerForm.value.firstName + this.registerForm.value.lastName;
    this.auth.SignUp(this.registerForm.value);
    this.dismissLoader();
    this.registerForm.reset();
    // this.modalDismiss();
    this.message.registerSuccessToast(`${this.registerForm.value.firstName} + ' ' + ${this.registerForm.value.lastName}`);
    this.router.navigateByUrl('/purchase');
  }

  gotoLogin() {
    // this.modalDismiss();
    this.router.navigateByUrl('/login');
  }

  // modalDismiss() {
  //   // using the injected ModalController this page
  //   // can "dismiss" itself and optionally pass back data
  //   this.modalCtrl.dismiss();

=======
  async register() {
    this.spinner.loadSpinner();
    this.auth.SignUp(this.registerForm.value).then(
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
>>>>>>> Stashed changes
=======
  async register() {
    this.spinner.loadSpinner();
    this.auth.SignUp(this.registerForm.value).then(
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
>>>>>>> Stashed changes
}
