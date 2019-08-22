import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';
import { ThemeService } from '../core/services/theme.service';
import { User, Role } from '../core/models/user';
import { first } from 'rxjs/operators';
import { SubscriptionService } from '../core/services/subscription.service';
import { LoadingController } from '@ionic/angular';
import { ModalController, NavParams } from '@ionic/angular';
// import { SupportModalComponent } from './support-modal/support-modal.component';

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
  @Input() user;
  canEdit;
  loading = false;
  currentUser: User;
  subscriptionList;

  results;
  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private router: Router,
    private theme: ThemeService,
    public subs: SubscriptionService,
    private loader: LoadingController,
    public modalCtrl: ModalController,
    private userService: UserService,
    private authenticationService: AuthenticationService

  ) {
    this.currentUser = this.authenticationService.currentUserValue;
    this.auth.afAuth.currentUser.subscribe(x => this.currentUser = x);
  }
  currentUser: User;
  userFromApi: User;

  ngOnInit() {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
    });
  }
}

  ngOnInit() {
    this.loading = false;
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.subscriber;
  }

  getUser() {
    return this.user.pipe(first()).toPromise();
  }


  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  // changeSpeed(val) {
  //   this.theme.setVariable('--speed', `${val}ms`);
  // }

  async presentLoader() {
    const loadElement = await this.loader.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 4000
    });
    loadElement.present();
  }
  onDismissLoader() {
    return this.loader.dismiss();
  }


  async showSubscriptions() {
    const subscriptions = await this.subs.listSubscriptions();
    this.presentLoader();
  }

  async endSubscription() {
    const cancelConfirmation = await this.subs.cancelSubscription();
    this.presentLoader();
  }

  // async openSubscriptionModal() {
  //   const modalEl = await this.modalCtrl
  //     .create({
  //       component: SupportModalComponent,
  //       componentProps: {
  //         // Name: this.user.displayName ,
  //         // email: this.user.email
  //       }
  //     });
  //   await modalEl.present()
  //     .catch(err => window.alert(err));
  // }

  // async onCloseModal() {
  //   await this.modalCtrl.dismiss('', 'cancel')
  //     .catch(err => window.alert(err));
  // }
  async listSubscriptions() {
    await this.presentLoader();
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subscriptionList = await fun({
      uid: user.uid,
    }).toPromise()
      .then((result) => {
        console.log(result);
        this.onDismissLoader();
      }).catch((subscriptionError) => {
        window.alert(subscriptionError.message);
      });
  }

}
