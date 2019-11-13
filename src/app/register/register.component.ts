import { AuthService } from '../core/services/auth.service';
import { MessageService } from '../core/services/message.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
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
  loading;
  registerForm: FormGroup;
  hide = true;

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
    private message: MessageService,
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
  async loadLoader() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading... Please wait'
    });
    this.loading.present();
  }
  async dismissLoader() {
    await this.loadingCtrl.dismiss();
  }

  async register() {
    this.loadLoader();
    const fullName: string = this.registerForm.value.firstName + this.registerForm.value.lastName;
    this.auth.signUp(this.registerForm.value).then(async res => {
      this.dismissLoader();
      this.modalDismiss();
      this.message.registerSuccessToast(fullName);
    }, async err => {
      this.dismissLoader();
      this.message.errorAlert(err);
    });
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
  async MicrosoftRegister() {
    await this.auth.AuthRegister(new firebase.auth.OAuthProvider('microsoft.com'));
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
