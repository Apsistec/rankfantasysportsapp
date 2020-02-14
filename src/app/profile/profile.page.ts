import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ThemeService } from '../_services/theme.service';
import { ModalController } from '@ionic/angular';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SettingsComponent } from './settings/settings.component';
import { StripeService } from '../_services/stripe.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  titleId = 'RF$\u2122 User Profile';
  user;
  // subscriptions;

  constructor(
    private theme: ThemeService,
    private modalCtrl: ModalController,
    public auth: AuthService,
    public stripeService: StripeService
  ) {}

  ngOnInit() {
    this.getStripeDataIfValidUser();
  }

 async getStripeDataIfValidUser() {
    this.user = await this.auth.getUser();
      if (this.user.stripeCustomerId) {
        this.stripeService.getSubscriptions();
      } else {
        return false;
      }
    }


  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }
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
  async presentSettingsModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsComponent,
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
