import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class UpdateService {

  constructor(
    private swUpdate: SwUpdate,
    private toast: ToastController
  ) {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(evt => {
        this.updateSW();
      });
    }
  }

  async updateSW() {
    await this.swUpdate.activateUpdate();
    return this.updatedToast();
  }

  async updatedToast() {
    const toast = await this.toast.create({
      header: 'Software Update Message:',
      cssClass: 'login',
      message: 'You are now using the latest version',
      position: 'top',
      duration: 5000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
    }
}
