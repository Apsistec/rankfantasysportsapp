import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { ModalController } from "@ionic/angular";
import { SupportModalComponent } from "../../shared/support-modal/support-modal.component";
import { User } from "../../core/user";
import { NavParams } from '@ionic/angular';

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
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  loading = false;
  confirmation;
  subscription;
  backdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;
  user: User;
  issue: string;
  description: string;
  
  constructor(
    public navParams: NavParams,
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private router: Router,
    private theme: ThemeService,
    public modalController: ModalController
  ) {
    // this.navParams.get({ 'this.issue', 'this.description', 'user.email', 'user.displayName'}).
  }

  ngOnInit() {}

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }

  changeSpeed(val) {
    this.theme.setVariable("--speed", `${val}ms`);
  }

  async cancelSubscription() {
    this.loading = true;
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable("stripeCancelSubscription");
    this.confirmation = await fun({ uid: user.uid }).toPromise();
    this.loading = false;
    window.alert("You have been unsubscribed. We are sorry to see you go.");
    this.router.navigate(["/home"]);
  }

  async getSubscription() {
    this.loading = true;
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable("stripeGetSubscriptions");
    this.confirmation = await fun({ uid: user.uid }).toPromise();
    this.loading = false;
  }

  async presentModal() {
    const modal = await this.modalController
      .create({ component: SupportModalComponent,
      componentProps: {
        displayName: this.user.displayName,
        email: this.user.email,
        issue: this.issue,
        description: this.description
      }, 
    })
      return await modal.present();
  }
}
