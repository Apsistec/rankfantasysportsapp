import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TermsDialogComponent } from '@shared/terms-dialog/terms-dialog.component';
import { PrivacyDialogComponent } from '@shared/privacy-dialog/privacy-dialog.component';
import { AuthModalComponent } from '@shared/auth-modal/auth-modal.component';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalController: ModalController,
    private message: MessageService
  ) { }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsDialogComponent,
      cssClass: 'modalcss'
    });
    return modal.present().catch(err => {
      return this.message.errorAlert(err);
    });;
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyDialogComponent,
      cssClass: 'modalcss'
    });
    return modal.present().catch(err => {
      return this.message.errorAlert(err);
    });
  }
  async loginModal() {
    const modal = await this.modalController.create({
      component: AuthModalComponent,
      cssClass: 'auth-modal-css',
      backdropDismiss: false,
      showBackdrop: true
    });
    return modal.present().catch(err => {
      return this.message.errorAlert(err);
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
