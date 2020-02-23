import { Injectable, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { User } from '@models/user';

@Injectable({
  providedIn: 'root'
})
export class StripeService implements OnInit{


  user: User;
  subscriptions: Observable<any>;
  confirmation; // : Observable<any>;
  invoices: Observable<any>;

  constructor(
    private auth: AuthService,
    private functions: AngularFireFunctions,
    private message: MessageService,
    private router: Router,
    private spinner: SpinnerService
  ) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user)
  }

  async subscribeUser(source, planId) {

    const fun = this.functions.httpsCallable('stripeCreateSubscription');
    this.confirmation = await fun({
      source: source.id,
      uid: this.user.uid,
      plan: planId
    }).toPromise();
  }

  async getSubscriptions() {
    const fun = this.functions.httpsCallable('stripeGetSubscriptions');
    this.subscriptions = fun({ uid: this.user.uid });
  }

  async cancelSubscription() {
    this.spinner.loadSpinner();

    const fun = this.functions.httpsCallable('stripeCancelSubscription');
    this.confirmation = await fun({
      uid: this.user.uid,
      subId: this.user.subId
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
  }

  async getInvoices() {
    const fun = this.functions.httpsCallable('stripeGetInvoices');
    this.invoices = fun({ uid: this.user.uid });
  }

  // Coupons

  // const couponForm = document.getElementById('couponForm');
  // const couponFun = fun.httpsCallable('stripeGetCoupon');

  // couponForm.onblur = async() => {
  //   const val = couponForm.value;
  //   console.log(val)
  //   const coupon = await couponFun({ coupon: val });
  //   console.log(coupon);
  //   alert(`sweet! ${coupon.data.name}`)
  // }
}
