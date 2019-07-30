import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { ModalController, NavParams } from '@ionic/angular';
import { SupportModalComponent } from '../../main-pages/support-modal/support-modal.component';
import { User } from '../../core/models/user';
import { Request } from '../../core/models/request.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
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
  loading = false;
  confirmation;
  subscription;
  backdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;
  // user: User;
  request: Request;
  userData: any;
  user: User;
  constructor(
    // public navParams: NavParams,
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private router: Router,
    private theme: ThemeService,
    public modalCtrl: ModalController,
    private afAuth: AngularFireAuth
  ) {
    // this.navParams.get({ 'this.issue', 'this.description', 'user.email', 'user.displayName'}).
  }

  ngOnInit() {
    // this.loading = false;
  }
  async getUser() {
    await this.afAuth.authState.pipe(first()).toPromise();
    return this.userData;
  }

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  // changeSpeed(val) {
  //   this.theme.setVariable('--speed', `${val}ms`);
  // }

  // async openSupportModal() {
  //   const modalEl = await this.modalCtrl
  //     .create({
  //       component: SupportModalComponent,
  //       componentProps: {
  //         displayName: this.user.displayName,
  //         email: this.user.email
  //       }
  //     });
  //   await modalEl.present()
  //     .catch(err => window.alert(err));
  // }

  // async onCancelModal() {
  //   await this.modalCtrl.dismiss('', 'cancel')
  //   .catch(err => window.alert(err))
  //   .then(() => console.log('this will succeed'));
  // }

  // async onSubmitRequest() {
  //   await this.modalCtrl.dismiss({ message: 'Request Submitted' }, 'confirm')
  //   .catch(err => window.alert(err))
  //   .then(() => console.log('this will succeed'));
  // }

  async getSubscriptions() {
    this.loading = true;
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subscription = await fun({ uid: user.uid }).toPromise;
    this.loading = false;
  }

  async cancelSubscription() {
    this.loading = true;
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    // tslint:disable-next-line: await-promise
    await fun({ uid: user.uid }).toPromise;
    this.loading = false;
    window.alert('You have been unsubscribed. We are sorry to see you go.');
    this.router.navigate(['/']);
  }
}
