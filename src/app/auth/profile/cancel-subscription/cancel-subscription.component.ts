import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from '@services/auth.service';
import { MessageService } from '@services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.component.html',
  styleUrls: ['./cancel-subscription.component.scss'],
})
export class CancelSubscriptionComponent implements OnInit {
  confirmation;
  planId;
  constructor(
    public functions: AngularFireFunctions,
    public load: LoadingController,
    public modalCtrl: ModalController,
    public auth: AuthService,
    private message: MessageService,
    private router: Router
  ) { }

  ngOnInit() {}

  async cancelSubscription() {
    await this.auth.loadSpinner;
    const user = await this.auth.getUser();
    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    this.confirmation = await fun({
      uid: user.uid,
      plan: this.planId
    }).toPromise().then(() => {
      this.auth.dismissSpinner();
      this.message.unsubscribedAlert();
      this.router.navigate(['/home']);
    }).catch ((error) => {
      this.auth.dismissSpinner();
      this.message.errorAlert(error.message);
    });
  }

}
