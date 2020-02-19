import { Component, OnInit } from '@angular/core';
import { MessageService } from '@services/message.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '@services/storage.service';


@Component({
  selector: 'app-start-modal',
  templateUrl: './start-modal.component.html',
  styleUrls: ['./start-modal.component.scss'],
})
export class StartModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private storage: StorageService,
    private message: MessageService
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
