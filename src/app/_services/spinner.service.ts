import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  constructor(private loadingCtrl: LoadingController) {}

  async loadSpinner() {
    const load = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Please wait...',
     
    });
    load.present();
  }

  async dismissSpinner() {
    await this.loadingCtrl.dismiss();
  }
}
