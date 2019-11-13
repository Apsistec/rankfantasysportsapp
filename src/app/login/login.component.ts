import { AuthService } from '../core/services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { MessageService } from '../core/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  @Input() user;
  titleId = 'RF$ Login';
  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private message: MessageService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async loadLoader() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...please wait'
    });
    return loading.present();
  }

  dismissLoader() {
    this.loadingCtrl.dismiss();
  }

  async login() {
    this.loadLoader();
    await this.auth.signIn(this.loginForm.value).subscribe(
      user => {
        this.dismissLoader();
        this.message.isLoggedInToast(this.loginForm.value.firstName);
        const role = user['role'];
        if (role === 'ADMIN') {
          this.router.navigateByUrl('/admin');
        } else if (role === 'USER') {
            const sub = (user.gold || user.silver || user.bronze);
            if (sub) {
              this.router.navigateByUrl('/auth/profile');
            } else {
              this.router.navigateByUrl('/purchase');
            }
        }
      },
      async err => {
        this.dismissLoader();
        this.message.errorAlert(err);
      }
    );
  }

  // Sign in with Google
  GoogleAuth() {
    return this.auth.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }
  // Sign in with Twitter
  TwitterAuth() {
    return this.auth.AuthLogin(new firebase.auth.TwitterAuthProvider());
  }

  // Sign in with Facebook
  FacebookAuth() {
    return this.auth.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  MicrosoftAuth() {
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
      return this.auth.AuthLogin(provider);
      provider.setCustomParameters({
      tenant: '775e45e1-79ea-465a-b26d-24ec063c54d1'
       });
      provider.addScope('files.read');
  }
}
