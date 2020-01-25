import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  subscriptions: Observable<any>;
  confirmation; // : Observable<any>;
  invoices: Observable<any>;

  constructor(
    private auth: AuthService,
    private functions: AngularFireFunctions,
    private message: MessageService,
    private router: Router,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  ) { }
=======
    private spinner: SpinnerService
  ) {}
>>>>>>> Stashed changes
=======
    private spinner: SpinnerService
  ) {}
>>>>>>> Stashed changes

  async subscribeUser(source, planId) {
    const user = await this.auth.getCurrentUser();
    const fun = this.functions.httpsCallable('stripeCreateSubscription');
    this.confirmation = await fun({
      source: source.id,
      uid: user.uid,
      plan: planId
    }).toPromise();
  }

  async getSubscriptions() {
    const user = await this.auth.getCurrentUser();
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subscriptions = fun({ uid: user.uid });
  }

  async cancelSubscription() {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
    this.spinner.loadSpinner();
    const user = await this.auth.getCurrentUser();
    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    this.confirmation = await fun({
      uid: user.uid,
=======
    this.spinner.loadSpinner();
    const user = await this.auth.getCurrentUser();
    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    this.confirmation = await fun({
      uid: user.uid,
>>>>>>> Stashed changes
      subId: user.subId
    })
      .toPromise()
      .then(() => {
        this.spinner.dismissSpinner();
        this.message.unsubscribedAlert();
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.spinner.dismissSpinner();
        this.message.errorAlert(error.message);
      });
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }

  async getInvoices() {
    const user = await this.auth.getCurrentUser();
    const fun = this.functions.httpsCallable('stripeGetInvoices');
    this.invoices = fun({ uid: user.uid });
  }
}
