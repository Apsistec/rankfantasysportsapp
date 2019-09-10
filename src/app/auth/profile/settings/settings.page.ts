import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ToastController, ModalController } from '@ionic/angular';
// import { CameraComponent } from './camera/camera.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userData = null;
  @Input()
  user;
  constructor(
    public toastCtrl: ToastController,
    public auth: AuthService,
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.auth.getUserInformation().subscribe(res => {
      this.userData = res;
    });
  }

  ionViewWillEnter() {

  }

  updateUser() {
    this.auth.updateUser(this.user.displayName).then(() => {
      const toast = this.toastCtrl.create({
        message: 'Your name was updated.',
        duration: 2000
      });
      // tslint:disable-next-line: no-shadowed-variable
      toast.then(toast => toast.present());
    });
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
}
