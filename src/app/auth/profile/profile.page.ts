import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { ThemeService } from '@services/theme.service';
import { ModalController } from '@ionic/angular';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SettingsComponent } from '../settings/settings.component';
import { StripeService } from '@services/stripe.service';

const themes = {
  autumn: {
    primary: '#264E36',
    secondary: '#199867',
    tertiary: '#9B1B30',
    light: '#F7F7FF',
    medium: '#2A4B7C',
    dark: '#2A293E'
  },
  night: {
    primary: '#00539C',
    secondary: '#8CBA80',
    tertiary: '#BD3D3A',
    light: '#bcc2c7',
    medium: '#495867',
    dark: '#34162A'
  },
  neon: {
    primary: '#755139',
    secondary: '#D69C2F',
    tertiary: '#E47A2E',
    light: '#F0EAD6',
    medium: '#615550',
    dark: '#343148'
  }
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  titleId = 'RF$\u2122 User Profile';

  // subscriptions;

  constructor(
    private theme: ThemeService,
    private modalCtrl: ModalController,
    public auth: AuthService,
    public stripeService: StripeService
  ) {}

  ngOnInit() {
    this.stripeService.getSubscriptions();
  }

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  async presentCancelSubModal() {
    const modal = await this.modalCtrl.create({
      component: CancelSubscriptionComponent
    });
    return modal.present();
  }

  async presentInvoicesModal() {
    const modal = await this.modalCtrl.create({
      component: InvoicesComponent
    });
    return modal.present();
  }
  async presentSettingsModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsComponent
    });
    return modal.present();
  }

  async onDismissModal() {
    return this.modalCtrl.dismiss();
  }

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
}
