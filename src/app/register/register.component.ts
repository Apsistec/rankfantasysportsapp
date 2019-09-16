import { AuthService } from '../core/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController, ToastController, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Input() user;

  registerForm: FormGroup;
  hide = true;

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController
  ) {

      this.registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'), Validators.maxLength(25)], ),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required])
      });
    }

  ngOnInit() {
  }

  async register() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });

    await loading.present();

    this.auth.signUp(this.registerForm.value).then(async res => {
      loading.dismiss();
      this.modalDismiss();
      this.registerSuccessToast(this.registerForm.value);
      this.modalDismiss();
    }, async err => {
      loading.dismiss();
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }
  async registerSuccessToast(user) {
    const toast = await this.toastCtrl.create({
      header: 'Registration Successful',
      message: 'Welcome ' + user.firstName + '. Account Created using ' + user.email,
      cssClass: 'login',
      position: 'top',
      duration: 5000,
      showCloseButton: true,
      translucent: true,
    });
    return toast.present();
  }

  // Register in with Google
  async GoogleRegister() {
    await this.auth.AuthRegister(new firebase.auth.GoogleAuthProvider());
    return this.modalDismiss();
  }
  // Register in with Twitter
  async TwitterRegister() {
    await this.auth.AuthRegister(new firebase.auth.TwitterAuthProvider());
    return this.modalDismiss();
  }

  // Register in with Facebook
  async FacebookRegister() {
    await this.auth.AuthRegister(new firebase.auth.FacebookAuthProvider());
    return this.modalDismiss();
  }

  modalDismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
