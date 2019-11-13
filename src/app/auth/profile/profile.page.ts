import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ThemeService } from '../../core/services/theme.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable, Subscription, of } from 'rxjs';
import { switchMap, first, map } from 'rxjs/operators';
import { User } from '../../core/models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessageService } from '../../core/services/message.service';
import { Customer, Source, Charge, SubscriptionPlan, StripeObject } from '../../core/models/stripe.models';

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
  titleId = 'RF$ User Profile';
  @Input() planId: string;
  subscriptions$: Observable<SubscriptionPlan[]>;
  subId;
  confirmation;
  charges$: Observable<Charge[]>;
  data;
  constructor(
    public functions: AngularFireFunctions,
    public theme: ThemeService,
    public load: LoadingController,
    public modalCtrl: ModalController,
    public auth: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
    private message: MessageService
  ) {

    }
  ngOnInit() {
    // this.user$ = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       return of(null);
    //     }
    //   })
    // );

    // this.user = this.afAuth.authState.pipe(first()).toPromise();

    // this.subscriptions$ = this.auth.user.pipe(map( user => user.subscriptions || {} ));
    this.getSubscriptionInfo();
   this.getCharges();
  }

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
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subscriptions$ = await fun({
      uid: user.uid,
    }).pipe(map(res => res.data));
  }


  async getCharges() {
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeGetCharges');
    this.charges$ = await fun({
      uid: user.uid,
      limit: '10'
    }).pipe(map(res => res.data));
  }

  async viewInvoicesModal() {

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
      return this.message.unsubscribedAlert();
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
