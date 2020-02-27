import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading = false;
  constructor(private loadingCtrl: LoadingController) {}
  
  async loadSpinner() {
    const load = await this.loadingCtrl
    .create({ 
      spinner: 'circles',
      duration: 5000,
    })
    .then(a => {a.present()
      .then(() => {
        if (!this.isLoading) {a.dismiss()}
      });
    });

  }

  async dismissSpinner() {
    this.isLoading = false;
    
    await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }
}
