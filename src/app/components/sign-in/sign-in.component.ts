import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../core/auth.service';

export class Signup {
  constructor(
    public fullname: string = '',
    public email: string = '',
    public password: string = '',
  ) { }


}

  @Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
  })

export class SignInComponent {
  isLoading = false;
  isLogin = true;
  model: Signup = new Signup();
  @ViewChild('f') form: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }


  onSignIn(email, password) {
    this.isLoading = true;
    this.authService.SignIn(email, password);
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Signing In...' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/profile');
        }, 1500);
      });
  }
  onSignUp(email, password) {
    this.isLoading = true;
    this.authService.SignUp(email, password);
    this.authService.SetUserData(this.model.fullname);
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Signing Up...' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/profile');
        }, 1500);
      });
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const displayName = form.value.firstname;
    console.log(email, password);

    if (this.isLogin) {
      this.onSignIn(email, password);
    } else {
      this.onSignUp(email, password);
    }
    form.reset();

  }
}
