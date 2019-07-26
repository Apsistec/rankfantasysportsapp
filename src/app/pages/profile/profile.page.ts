import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { ModalController, NavParams } from '@ionic/angular';
import { SupportModalComponent } from '../../components/support-modal/support-modal.component';
import { User } from '../../core/user';
import { Request } from '../../core/request.model';

const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  load = false;
  confirmation;
  subscription;
  backdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;
  user: User;
  request: Request;

  constructor(
    public navParams: NavParams,
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private router: Router,
    private theme: ThemeService,
    public modalCtrl: ModalController
  ) {
    // this.navParams.get({ 'this.issue', 'this.description', 'user.email', 'user.displayName'}).
  }

  ngOnInit() { }

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  changeSpeed(val) {
    this.theme.setVariable('--speed', `${val}ms`);
  }

  async openSupportModal(mode: 'select' | 'random') {
    await this.modalCtrl
      .create({
        component: SupportModalComponent,
        componentProps: {
          displayName: this.request.displayName,
          email: this.request.email,
          issue: this.request.issue,
          description: this.request.description
        }
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'Submit') {
          console.log('BOOKED!');
        }
      })
      .catch(err => window.alert(err))
      .then(() => console.log('this will succeed'));
  }
  async onCancel() {
    await this.modalCtrl.dismiss('', 'cancel')
      .catch(err => window.alert(err))
      .then(() => console.log('this will succeed'));
  }
  async onSubmitRequest() {
    await this.modalCtrl.dismiss({ message: 'Request Submitted' }, 'confirm')
      .catch(err => window.alert(err))
      .then(() => console.log('this will succeed'));
  }

  // async cancelSubscription() {
  //   this.load = true;
  //   await this.auth.getUser();
  //   const fun = this.functions.httpsCallable('stripeCancelSubscription');
  //   this.confirmation = fun({ uid: this.user.uid }).toPromise();
  //   this.load = false;
  //   window.alert('You have been unsubscribed. We are sorry to see you go.');
  //   return this.router.navigate(['/home']);
  // }

  // async getSubscriptions() {
  //   this.load = true;
  //   const user = await this.auth.getUser();
  //   const fun = this.functions.httpsCallable('stripeGetSubscriptions');
  //   this.confirmation = await fun({ uid: user.uid }).toPromise();
  //   this.load = false;
  // }

  // async presentModal() {
  //   const modalEl = await this.modalController
  //     .create({
  //       component: SupportModalComponent,
  //       componentProps: {
  //         displayName: this.user.displayName,
  //         email: this.user.email,
  //         issue: this.issue,
  //         description: this.description
  //       },
  //     })
  //     .then((modalEl => {
  //       return modalEl.present();
  //       modalEl.onDidDismiss();
  //     })
  //     );
  // }
}
