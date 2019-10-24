import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnDestroy, OnInit {
  @Input()
  user;
  subscription;

  constructor(
    public toastCtrl: ToastController,
    public auth: AuthService,
    public modalCtrl: ModalController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.subscription = this.auth.getUserInformation().subscribe(user => {
      this.user = user;
    });
  }

  async updateUser() {
    await this.auth.updateUser(this.user.displayName);
    const toast = await this.toastCtrl.create({
      message: 'Your name was updated.',
      duration: 2000,
      position: 'top',
      cssClass: 'login',
      translucent: true
    });
    toast.present();
    return this.router.navigateByUrl('/auth/profile')
    .catch((error) => {
      alert(error.message);
    });
  }

  linkGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider);
  }

  linkFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider);
  }

  linkTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().currentUser.linkWithPopup(provider);
  }

  linkMicrosoft() {
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
    firebase.auth().currentUser.linkWithPopup(provider);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
