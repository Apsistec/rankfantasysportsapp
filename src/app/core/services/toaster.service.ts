import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(
    public toaster: ToastController,
  ) { }

  async errorToast() {
    const errorToast = await this.toaster.create({
      header: 'Error Message:',
      cssClass: 'errorToastMsg',
      message: errorMessage,
      position: 'middle',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }

  async signOutToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'logout',
      message: 'You have successfully logged out',
      position: 'middle',
      duration: 4000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }
}
