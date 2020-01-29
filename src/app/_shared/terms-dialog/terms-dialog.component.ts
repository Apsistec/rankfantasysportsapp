import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-terms-dialog',
  exportAs: 'modal',
  templateUrl: './terms-dialog.component.html',
  styleUrls: ['./terms-dialog.component.scss']
})
export class TermsDialogComponent {
  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
