import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from '../models/user';

import { LoadingController } from '@ionic/angular';
import { getLocaleDateFormat } from '@angular/common';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

declare var Stripe: stripe.StripeStatic;
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  stripe: stripe.Stripe;

  planId: string;
  user: User;
  subscriptionList;
  cancelConfirmation;

  userId: string;
  membership: any;

  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private loadingCtrl: LoadingController,
    private db: AngularFirestore,
  ) {

    // const ref = this.db.collection('users').doc('uid').get('stripeCustomerId?: string;');
    // console.log(ref);
  }


   async presentLoading() {
    const loadingElement = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    loadingElement.present();
  }

  onDismissLoader() {
    return this.loadingCtrl.dismiss();
  }

  async listSubscriptions() {
    await this.presentLoading();
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

  async cancelSubscription() {
    this.presentLoading();
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    this.cancelConfirmation = await fun({
      uid: user.uid,
    }).toPromise()
      .then((result) => {
        console.log(result);
        this.onDismissLoader();
      }).catch((subscriptionCancelError) => {
        window.alert(subscriptionCancelError.message);
      });
  }

}
