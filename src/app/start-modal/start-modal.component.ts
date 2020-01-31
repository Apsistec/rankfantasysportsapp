import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-modal',
  templateUrl: './start-modal.component.html',
  styleUrls: ['./start-modal.component.scss'],
})
export class StartModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  gotoPurchase() {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('/purchase');
  }

}
