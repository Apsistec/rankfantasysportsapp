import { Component, OnInit, Input } from '@angular/core';
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
  @Input() user: any;
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
      if (this.user.stripeCustomerId !== null) {
        this.stripeService.getSubscriptions();
      } else {
        return false;
      }
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
  async presentSettingsModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsComponent,
    });
    return modal.present();
  }

  // dismiss Modals
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
