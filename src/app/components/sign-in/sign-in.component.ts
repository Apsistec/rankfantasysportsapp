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
  colorCard;
  isLoading = false;
  isLogin = true;
  error;
  // @Input() user: User;
  // @ViewChild('f') f: ElementRef;
  // email;
  // password;

  constructor(
    public auth: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  // onSignIn(email, password) {
  //   this.isLoading = true;
  //   this.auth.SignIn(email, password);
  //   this.loadingCtrl
  //     .create({ keyboardClose: true, message: 'Signing In...' })
  //     .then(loadingEl => {
  //       loadingEl.present();
  //       setTimeout(() => {
  //         this.isLoading = false;
  //         loadingEl.dismiss();
  //         this.router.navigateByUrl('/list');
  //       }, 1500);
  //     });
  // }

  // onSignUp(email, password) {
  //   this.isLoading = true;
  //   this.auth.SignUp(email, password);
  //   this.auth.SetUserData(this.user.displayName);
  //   this.loadingCtrl
  //     .create({ keyboardClose: true, message: 'Signing Up...' })
  //     .then(loadingEl => {
  //       loadingEl.present();
  //       setTimeout(() => {
  //         this.isLoading = false;
  //         loadingEl.dismiss();
  //         this.router.navigateByUrl('/list');
  //       }, 1500);
  //     });
  // }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  async onSubmit(form: NgForm) {
    if (!form.valid) {
      return alert('Invalid Login Attempt, IP Recorded for Security');
    } else {
      const loadingEl = await this.loadingCtrl.create({ keyboardClose: true, message: 'Signing ' + (this.isLogin ? 'In' : 'Up') + '...'});
      const email = form.value.email;
      const password = form.value.password;
      loadingEl.present();
      if (this.isLogin) {
        loadingEl.present();
        await this.auth.SignIn(email, password);
        loadingEl.dismiss();
      } else {
        if (this.error) {
          const cardErrors = this.error.message;
          window.alert(cardErrors);
        } else {
          await this.auth.SignUp(email, password);
        }
      }
        loadingEl.dismiss();
        this.router.navigateByUrl('/list');
        return form.reset();
    }
  }
}
