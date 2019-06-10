import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireFunctions, AngularFireFunctionsModule } from '@angular/fire/functions';
import { getSubscriptions } from 'functions/src/subscriptions';
// import { User } from '../core/user';
// import { FirebaseFunctions } from '@angular/fire';
@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.scss']
})
export class LaunchPageComponent {

  constructor(
    public auth: AuthService,
    public aff: AngularFireFunctions
    ) { }
  // subs;
  // subscription;
  // user;
  // plan;
  // async getSubscriptions() {
  //   const user = await this.auth.afAuth.user;

  //   const subs = this.aff.httpsCallable('stripeGetSubscriptions');
  //   this.subscription = await subs({uid: this.user.uid})
  // }

  }
