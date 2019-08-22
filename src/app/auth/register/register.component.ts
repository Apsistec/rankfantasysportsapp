import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AlertController } from '@ionic/angular';

import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  isLoading = false;
  isLogin = false;
  error;

  constructor(
    public auth: AuthService,
    private loadingCtrl: LoadingController
  ) {  }

  async onSubmit(register: NgForm) {
    const loadingEl = await this.loadingCtrl.create({ keyboardClose: true, message: 'Registering your Account...' });
    loadingEl.present();
    const fullname = register.value.fullname;
    const email = register.value.email;
    const password = register.value.password;
    await this.auth.Register(email, password)
      .catch((error) => {
        const loginErrors = this.error.message;
        return window.alert(loginErrors);
      });
    loadingEl.dismiss();
    return register.reset();
  }
}


