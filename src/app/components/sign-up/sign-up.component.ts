import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, EmailValidator } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {

  isLoading = false;
  isLogin = true;
  error;

  constructor(
    public auth: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  async onSubmit(form: NgForm) {
    const loadingEl = await this.loadingCtrl.create({ keyboardClose: true, message: 'Signing Up...' });
    const email = form.value.email;
    const password = form.value.password;
    loadingEl.present();
    await this.auth.SignUp(email, password);
    loadingEl.dismiss()
      .catch((error) => {
        const signupErrors = this.error.message;
        return window.alert(signupErrors);
      });
    return form.reset();
  }
}
