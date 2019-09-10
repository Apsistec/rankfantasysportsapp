import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ThemeService } from '../../core/services/theme.service';
import { SupportModalComponent } from './support-modal/support-modal.component';
import { LoadingController, ModalController, IonContent } from '@ionic/angular';

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

  @Input()
  user;
  canEdit;
  loading = false;
  subscriptionList;
  @ViewChild(IonContent) ionContent: IonContent;
  scrolledDown = false;
  title: string;
  info: string;
  err;
  panelOpenState;
  results;
  isReadOnly = true;
  // photoURL: any;

  constructor(
    public functions: AngularFireFunctions,
    public theme: ThemeService,
    public loader: LoadingController,
    public modalCtrl: ModalController,
    public auth: AuthService,
  ) {

    }
  ngOnInit() {

  }


  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }



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

  async listSubscriptions() {
    await this.presentLoader();
    // const user = await this.getUser();
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subscriptionList = await fun({
      uid: this.user.uid,
    }).toPromise().catch((error) => {
      window.alert(error.message);
    });
    this.onDismissLoader();
  }

}
