import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { SupportModalComponent } from './support-modal/support-modal.component';
import { ModalController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { IonContent } from '@ionic/angular';


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
  canEdit;
  loading = false;
  currentUser;
  subscriptionList;
  @ViewChild(IonContent) ionContent: IonContent;
  scrolledDown = false;
  title: string;
  info: string;
  err;
  panelOpenState;
  results;
  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private router: Router,
    public theme: ThemeService,
    public loader: LoadingController,
    public modalCtrl: ModalController,

    // private userService: UserService,
  ) {
    this.currentUser = this.auth.afAuth.user;
    this.auth.afAuth.user.subscribe(x => this.user = x);
  }

  ngOnInit() {

  }

  async getUser() {
    await this.auth.afAuth.authState.pipe(first()).toPromise();
    return this.user;
  }
  // get isModerator() {
  //   return this.currentUser && this.currentUser.roles === this.user.role.moderator;
  // }
  // get isAdmin() {
  //   return this.currentUser && this.currentUser.roles === this.user.role.admin;
  // }

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
  async openSupportModal() {
    const modalEl = await this.modalCtrl
      .create({
        component: SupportModalComponent,
        componentProps: {

        }
      });
    return modalEl.present();
  }

  onScroll(event) {
    if (event.detail.scrollTop > 200) {
      this.scrolledDown = true;
    } else {
      this.scrolledDown = false;
    }
  }

  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }

  // async showSubscriptions() {
  //   const subscriptions = await this.subs.listSubscriptions();
  //   this.presentLoader();
  // }

  // async endSubscription() {
  //   const cancelConfirmation = await this.subs.cancelSubscription();
  //   this.presentLoader();
  

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
    }).toPromise().catch((error) => {
      window.alert(error.message);
    });
    this.onDismissLoader();
  }
}
