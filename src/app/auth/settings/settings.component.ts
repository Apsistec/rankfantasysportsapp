import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@services/auth.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
// tslint:disable: object-literal-shorthand

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input()
  user;
  subscription;
  titleId = 'Profile Settings';
  unsavedChanges;
  
  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private toastCtrl: ToastController,
    private auth: AuthService,
    private modalCtrl: ModalController,
    public router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.user = this.getUserInformation();
  }

  async updateToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your info was updated.',
      duration: 5000,
      position: 'top',
      cssClass: 'successT',
      translucent: true
    });
    await toast.present();
    return this.router.navigateByUrl('/auth/profile');
  }
  getUserInformation() {
    this.afs.doc(`users/${this.afAuth.auth.currentUser.uid}`).valueChanges();
  }

  async updateUser(displayName) {
    await this.afs
      .doc(`users/${this.afAuth.auth.currentUser.uid}`)
      .update({ displayName: displayName });
    this.updateToast();
  }

  async updateEmail(email) {
    await this.afs
      .doc(`users/${this.afAuth.auth.currentUser.uid}`)
      .update({ email: email });
    this.updateToast();
  }

  async updateUserPhoto(photoURL) {
    await this.afs
      .doc(`users/${this.afAuth.auth.currentUser.uid}`)
      .update({ photoURL: photoURL });
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

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
