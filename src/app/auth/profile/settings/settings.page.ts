import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ToastController, ModalController } from '@ionic/angular';
// import { CameraComponent } from './camera/camera.component';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnDestroy, OnInit {
  // userData = null;
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
    return await this.auth.updateUser(this.user.displayName).then(() => {
      const toast = this.toastCtrl.create({
        message: 'Your name was updated.',
        duration: 2000,
        position: 'top',
        translucent: true
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
      this.router.navigateByUrl('/auth/profile');
    }).catch((error) => {
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

  // async presentCameraModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: CameraComponent,
  //     componentProps: {

  //     }
  //   });
  //   modal.onDidDismiss()
  //     .then((data) => {
  //       const photoURL = data['data']; // Here's your selected image!
  //     });
  //   return await modal.present();
  // }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
