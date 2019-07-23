import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(public toastr: ToastController) { }

  async toastWithOptions() {
    const toast = await this.toastr.create({
      header: 'Toast header',
      message: 'Your settings have been saved.',
      duration: 2000,
      animated: true,
      showCloseButton: true,
      closeButtonText: 'OK',
      cssClass: 'my-toast',
      position: 'middle',
    });
    return toast.present();
  }

  onToastDismiss() {
    return this.toastr.dismiss();
  }

}
