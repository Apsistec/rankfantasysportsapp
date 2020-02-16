import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TermsDialogComponent } from '@shared/terms-dialog/terms-dialog.component';
import { PrivacyDialogComponent } from '@shared/privacy-dialog/privacy-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalController: ModalController
  ) { }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsDialogComponent,
      cssClass: "modalcss"
    });
    return modal.present();
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyDialogComponent,
      cssClass: "modalcss"
    });
    return modal.present();
  }
}
