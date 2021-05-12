

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';

import { AuthService } from '../_services/auth.service';
import { StripeService } from '../_services/stripe.service';
import { ThemeService } from '../_services/theme.service';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from './invoices/invoices.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  titleId = 'RF$\u2122 User Profile';
  planId;
  atp;
  buy;
  purchase;


  constructor(
    private theme: ThemeService,
    private modalCtrl: ModalController,
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public stripe: StripeService,
  ) {

    }

ngOnInit(){


}
// Themes
  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }


// Stripe Account Administration Modals
  async presentCancelSubModal() {
    const modal = await this.modalCtrl.create({
      component: CancelSubscriptionComponent,
    });
    return modal.present();
  }

  async presentInvoicesModal() {
    const modal = await this.modalCtrl.create({
      component: InvoicesComponent,
    });
    return modal.present();
  }

  // App User Settings Modal
  // async presentSettingsModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: SettingsComponent,
  //   });
  //   return modal.present();
  // }

  // dismiss Modals
  async onDismissModal() {
    return this.modalCtrl.dismiss();
  }



}
