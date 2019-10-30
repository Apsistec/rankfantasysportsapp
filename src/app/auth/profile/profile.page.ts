import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ThemeService } from '../../core/services/theme.service';
import { LoadingController, AlertController, ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  @Input() user;
  @Input() planId: string;
  subInfo;
  subId;
  confirmation;

  constructor(
    public functions: AngularFireFunctions,
    public theme: ThemeService,
    public load: LoadingController,
    public modalCtrl: ModalController,
    public auth: AuthService,
    private toast: ToastController,
    private router: Router,
    private alert: AlertController
  ) {

    }
  ngOnInit() {
    this.getSubscriptionInfo();
    // this.sortPlan();
  }

  // sortPlan() {
  //   this.auth.getUser();
  //     if (this.user.gold) {
  //       this.planId = 'gold';
  //     } else if (this.user.silver) {
  //       this.planId = 'silver';
  //     } else if (this.user.bronze) {
  //       this.planId = 'bronze';
  //     } else {
  //       this.planId = '';
  //     }
  //   console.log(this.planId);
  // }
  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  async presentLoader() {
    const loadElement = await this.load.create({
      message: 'Please wait...',
      spinner: 'crescent',
    });
    loadElement.present();
  }

  onDismissLoader() {
    return this.load.dismiss();
  }

  async getSubscriptionInfo() {
    this.presentLoader();
    this.user = this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subInfo = await fun({
      uid: this.user.uid,
    }).toPromise();
    this.onDismissLoader()
    .catch((error) => {
      window.alert(error.message);
    });
  }
  // async subscribedToast() {
  //   const toast = await this.toast.create({
  //     header: 'Authentication Message:',
  //     cssClass: 'login',
  //     message: 'Thank You for your payment. You are subscribed!',
  //     position: 'top',
  //     duration: 5000,
  //     showCloseButton: true,
  //     translucent: true,
  //   });
  //   toast.present();
  // }
  async viewInvoicesModal() {

  }

  async unsubscribedAlert() {
    const alert = await this.alert.create({
      header: 'Account Cancellation Message',
      cssClass: 'logout',
      message: 'We are sorry to see you go, but your account has been canceled.',
      buttons: ['OK']
    });
    alert.present();
  }

  async cancelSubscription() {
    this.presentLoader();
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    this.confirmation = await fun({
      uid: user.uid,
      planId: this.planId
    });
    return this.onDismissLoader().then
    (() => {
      this.router.navigate(['/home']);
      return this.unsubscribedAlert();
    }).catch((error) => {
      window.alert(error.message);
    });
  }
  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: cancelComponent
  //   });
  //   return await modal.present();
  // }
}
