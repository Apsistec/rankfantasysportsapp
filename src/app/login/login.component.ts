import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormsModule, Validators} from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  isLoading = false;
  isLogin = true;
  error;

  constructor(
    public auth: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) { }

  async onSubmit(form: NgForm) {
    const loadingEl = await this.loadingCtrl.create({ keyboardClose: true, message: 'Logging In...' });
    const email = form.value.email;
    const password = form.value.password;
    loadingEl.present();
    await this.auth.Login(email, password)
      .catch((error) => {
        const loginErrors = this.error.message;
        return window.alert(loginErrors);
      });
    loadingEl.dismiss();
    return form.reset();
  }
}
