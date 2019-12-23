import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ThemeService } from '../../_services/theme.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from './invoices/invoices.component';

const themes = {
  autumn: {
    primary: '#264E36',
    secondary: '#199867',
    tertiary: '#9B1B30',
    light: '#F7F7FF',
    medium: '#2A4B7C',
    dark: '#2A293E',
  },
  night: {
    primary: '#00539C',
    secondary: '#8CBA80',
    tertiary: '#BD3D3A',
    light: '#bcc2c7',
    medium: '#495867',
    dark: '#34162A',
  },
  neon: {
    primary: '#755139',
    secondary: '#D69C2F',
    tertiary: '#E47A2E',
    light: '#F0EAD6',
    medium: '#615550',
    dark: '#343148',
  }
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  component;
  InvoicesComponent;
  CancelSubscriptionComponent;
  titleId = 'RF$\u2122 User Profile';
  subscriptions: Observable<any>;
  confirmation;
  user;
  planId;

  constructor(
    public functions: AngularFireFunctions,
    public theme: ThemeService,
    public load: LoadingController,
    public modalCtrl: ModalController,
    public auth: AuthService,
    ) {

    }

  ngOnInit() {
    this.getSubscriptions();
  }

   changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  async getSubscriptions() {
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subscriptions = fun({uid: user.uid});
  }

  // async getPlan() {
  //   this.subscriptions.
  // }


  // Coupons

  // const couponForm = document.getElementById('couponForm');
  // const couponFun = fun.httpsCallable('stripeGetCoupon');

  // couponForm.onblur = async() => {
  //   const val = couponForm.value;
  //   console.log(val)
  //   const coupon = await couponFun({ coupon: val });
  //   console.log(coupon);
  //   alert(`sweet! ${coupon.data.name}`)
  // }


  async presentCancelSubModal() {
    const modal = await this.modalCtrl.create({
      component: CancelSubscriptionComponent
    });
    return await modal.present();
  }
  
  async presentInvoicesModal() {
    const modal = await this.modalCtrl.create({
      component: InvoicesComponent
    });
    return await modal.present();
  }

  async onDismissModal() {
    return await this.modalCtrl.dismiss();
  }
}