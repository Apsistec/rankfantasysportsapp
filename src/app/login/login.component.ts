import { AuthService } from '../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  AlertController,
  ToastController,
  LoadingController
} from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  // @Input() user;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async login() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.auth.signIn(this.loginForm.value).subscribe(
      user => {
        loading.dismiss();
        this.isLoggedInToast(user);
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
        loading.dismiss();

        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: err.message,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

  async isLoggedInToast(user) {
    // const user = await this.auth.getUser();
    const toast = await this.toastCtrl.create({
      header: 'Account Sign In Successful',
      message: 'Welcome Back ' + user.displayName + '. Email: ' + user.email,
      cssClass: 'login',
      position: 'top',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
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
}
