import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ThemeService } from '../../core/services/theme.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../core/services/message.service';
import { switchMap } from 'rxjs/operators';
import { User } from '../../core/models/user';

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
  titleId = 'RF$\u2122 User Profile';

  // confirmation: any = [];
  subscriptions: Observable<any>;
  // @Input() user: User;
  // subscriptions;
  user: User;
  // user;
  constructor(
    public functions: AngularFireFunctions,
    public theme: ThemeService,
    public load: LoadingController,
    public modalCtrl: ModalController,
    public auth: AuthService
    ) {}

  ngOnInit() {
    this.getSubscriptions();
  }

   changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  async presentLoader() {
    const loadElement = await this.load.create({
      message: 'Please wait...',
      spinner: 'crescent',
    });
    await loadElement.present();
  }

  async onDismissLoader() {
    await this.load.dismiss();
  }

  // getSubscriptionInfo() {
  //   const fun = this.functions.httpsCallable('stripeGetSubscriptions');
  //   fun({ uid: this.user.uid });
  // }

  async getSubscriptions() {
    const user = await this.auth.getUser();
    console.log(user.uid);
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subscriptions = await fun({uid: user.uid});
  }


  // async cancelSubscription() {
  //   this.presentLoader();
  //   const fun =  this.functions.httpsCallable('stripeCancelSubscription');
  //   this.confirmation = await fun({
  //     uid: this.user.uid,
  //     plan: this.subscriptionData.items.data.plan
  //   }).toPromise;
  //   this.onDismissLoader();
  //   this.message.unsubscribedAlert();
  //   return this.router.navigate(['/home'])
  //   .catch ((error) => {
  //     this.message.errorAlert(error.message);
  //   });
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

}
