import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'privacy-dialog',
  exportAs: 'modal',
  templateUrl: 'privacy-dialog.component.html',
  styleUrls: ['./privacy-dialog.component.scss']
})
export class PrivacyDialogComponent {
  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
