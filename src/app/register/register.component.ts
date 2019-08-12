import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, EmailValidator } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  isLoading = false;
  isLogin = true;
  error;

  constructor(
    public auth: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  async onSubmit(form: NgForm) {
    const loadingEl = await this.loadingCtrl.create({ keyboardClose: true, message: 'Registering...' });
    const email = form.value.email;
    const password = form.value.password;
    loadingEl.present();
    await this.auth.Register(email, password);
    loadingEl.dismiss()
      .catch((error) => {
        const registerErrors = this.error.message;
        return window.alert(registerErrors);
      });
    return form.reset();
  }
}
