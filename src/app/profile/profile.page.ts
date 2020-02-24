import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ThemeService } from '../_services/theme.service';
import { ModalController } from '@ionic/angular';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SettingsComponent } from './settings/settings.component';
import { StripeService } from '../_services/stripe.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap,  first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from '@models/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  titleId = 'RF$\u2122 User Profile';

  user: Observable<User>;
  planId;
  authenticated;
  atp;
  buy;
  purchase;
  
  constructor(
    private theme: ThemeService,
    private modalCtrl: ModalController,
    public auth: AuthService,
    public afAuth: AngularFireAuth,
    public stripeService: StripeService,
    public afs: AngularFirestore,
    private functions: AngularFireFunctions,
    public stripe: StripeService
  ) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
     switchMap(user => {
       if (user !== null) {
         return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
       } else {
         return of(null);
       }
     })
   );
 }
ngOnInit(){

}


// Themes
  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }

// Stripe Account Administration Modals
  async presentCancelSubModal() {
    const modal = await this.modalCtrl.create({
      component: CancelSubscriptionComponent,
    });
    return modal.present();
  }

  async presentInvoicesModal() {
    const modal = await this.modalCtrl.create({
      component: InvoicesComponent,
    });
    return modal.present();
  }

  // App User Settings Modal
  async presentSettingsModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsComponent,
    });
    return modal.present();
  }

  // dismiss Modals
  async onDismissModal() {
    return this.modalCtrl.dismiss();
  }



}
