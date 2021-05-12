import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MessageService } from '../../_services/message.service';

import { StorageService } from '../../_services/storage.service';

@Component({
  selector: 'app-start-modal',
  templateUrl: './start-modal.component.html',
  styleUrls: ['./start-modal.component.scss'],
})
export class StartModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private message: MessageService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.storage.set('popModalState', 'shown');

  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  gotoPurchase() {
    this.modalCtrl.dismiss()
    .then( () =>
      this.router.navigateByUrl('/membership')
    ).catch(error => {
      this.message.errorAlert(error.message);
    });
  }
}
