import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';
import { AlertController } from '@ionic/angular';

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
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  async onSubmit(form: NgForm) {
    const loadingEl = await this.loadingCtrl.create({ keyboardClose: true, message: 'Registering ...' });
    loadingEl.present();
    const email = form.value.email;
    const password = form.value.password;
    await this.auth.Login(email, password)
      .catch((error) => {
        const loginErrors = this.error.message;
        return window.alert(loginErrors);
      });
    loadingEl.dismiss();
    return form.reset();
  }
}


