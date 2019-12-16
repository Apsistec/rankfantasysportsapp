import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegModalComponent } from '../../shared/reg-modal/reg-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  titleId = 'RF$\u2122 Signup';

constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: RegModalComponent,
      cssClass: 'app-reg-modal',
      backdropDismiss: false
    });
    return await modal.present();
    document.body.style.overflow = 'hidden';

  }
  modalDismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
