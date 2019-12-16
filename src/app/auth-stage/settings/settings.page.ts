import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ToastController, ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { MessageService } from '../../core/services/message.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  @Input()
  user;
  editUser: Observable<any>;
  titleId = 'RF$\u2122 Profile Settings';
  hide = true;
  isEditButtonDisabled = true;

  constructor(
    public toastCtrl: ToastController,
    public auth: AuthService,
    public modalCtrl: ModalController,
    public router: Router,
    private message: MessageService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

  // ionViewWillEnter() {
  //    this.auth.getUserInformation().pipe( map( this.user ) => {
  //     // this.editUser = this.user;
  //   });
  // }

  async loadSpinner() {
    const load = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Please wait...',
      translucent: true,
      cssClass: 'successA'
    });
    load.present();
  }

  dismissSpinner() {
    this.loadingCtrl.dismiss();
  }


  enableEdit() {
    this.isEditButtonDisabled = !this.isEditButtonDisabled;
    this.message.editEnabledToast();
  }

  async updateUser() {
    const user = await this.auth.getUser();
    this.loadSpinner();
    this.isEditButtonDisabled = !this.isEditButtonDisabled;
    await this.auth.updateUser(user.displayName);
    this.dismissSpinner();
    this.router.navigateByUrl('/auth/profile')
    .catch((error) => {
      alert(error.message);
    });
  }

  async linkGoogle() {
    this.loadSpinner();
    const provider = await new firebase.auth.GoogleAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider);
    return this.dismissSpinner();
  }

  async linkFacebook() {
    this.loadSpinner();
    const provider = await new firebase.auth.FacebookAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider);
    return this.dismissSpinner();
  }

  async linkTwitter() {
    this.loadSpinner();
    const provider = await new firebase.auth.TwitterAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider);
    return this.dismissSpinner();
  }

  async linkMicrosoft() {
    this.loadSpinner();
    const provider = await new firebase.auth.OAuthProvider('microsoft.com');
    firebase.auth().currentUser.linkWithPopup(provider);
    return this.dismissSpinner();
  }

}
