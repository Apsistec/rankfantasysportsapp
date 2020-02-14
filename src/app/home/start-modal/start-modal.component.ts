import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-start-modal',
  templateUrl: './start-modal.component.html',
  styleUrls: ['./start-modal.component.scss'],
})
export class StartModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {}

  async showNoMoreModal() {
    await this.storage.set('modalAlreadyShown', true);
    this.router.navigateByUrl('/home');
  }

  dismiss() {
    this.modalCtrl.dismiss();
    this.showNoMoreModal();
  }

  gotoPurchase() {
    this.modalCtrl.dismiss().then(() => {
      this.router.navigateByUrl('/purchase');
    })
  }

}
