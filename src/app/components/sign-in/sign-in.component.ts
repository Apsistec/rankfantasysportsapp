import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, EmailValidator } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {
  isLoading = false;
  isLogin = true;
  error;

  constructor(
    public auth: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  async onSubmit(form: NgForm) {
    const loadingEl = await this.loadingCtrl.create({ keyboardClose: true, message: 'Signing In...' });
    const email = form.value.email;
    const password = form.value.password;
    loadingEl.present();
    await this.auth.SignIn(email, password)
    .catch((error) => {
      const signinErrors = this.error.message;
      return window.alert(signinErrors);
    });
    loadingEl.dismiss();
    return form.reset();
  }
}
