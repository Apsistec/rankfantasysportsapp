import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements  OnInit {
  @Input()
  user;
  subscription;
  titleId = 'Profile Settings';

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private toastCtrl: ToastController,
    private auth: AuthService,
    private modalCtrl: ModalController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.user = this.getUserInformation();
  }

  async updateToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your name was updated.',
      duration: 5000,
      position: 'top',
      cssClass: 'successT',
      translucent: true
    });
    await toast.present();
    return this.router.navigateByUrl('/auth/profile');
  }
  async getUserInformation() {
    await this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges();
  }

  async updateUser (displayName) {
    await this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
    .update({displayName: displayName});
    this.updateToast();
  }

  async updateEmail (email) {
    await this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
    .update({email: email});
    this.updateToast();
  }

  async updateUserPhoto (photoURL) {
    await this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`)
    .update({photoURL: photoURL});
    this.updateToast();
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
}
