import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../_services/auth.service';
import { environment } from '../../environments/environment.prod';
import { NgForm } from '@angular/forms';
import { MessageService } from '@services/message.service';
import { ModalService } from '../_services/modal.service';
import { SeoService } from '@services/seo.service';
import { SpinnerService } from '@services/spinner.service';
import { WizardComponent   } from 'angular-archwizard';
import { PopoverComponent } from '@shared/popover/popover.component';

import {
  Component,
  AfterViewInit,
  ElementRef,
  OnInit,
  ViewChild,
  AfterContentInit,
} from '@angular/core';
import { PopoverController, LoadingController } from '@ionic/angular';
declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-purchase',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss']
})
export class MembershipPage implements OnInit, AfterViewInit {

  isRegister = true;
  titleId = 'RF$\u2122 Pro Memberships';

  user;
  @ViewChild(WizardComponent, {static: true}) public wizard: WizardComponent;

  showDetails: boolean;
  hideProduct: boolean;

  // blinker: Subscription;
  card;
  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;
  stripe: stripe.Stripe;

  confirmation1;
  confirmation0;
  cardErrors;
  isLoading = false;
  marked = false;
  theCheckbox = false;

  constructor(
    public functions: AngularFireFunctions,
    private spinner: SpinnerService,
    public auth: AuthService,
    private message: MessageService,
    public modal: ModalService,
    private seo: SeoService,
    private spin: LoadingController,
    private popoverController: PopoverController,
    // private checkn: CheckboxControlValueAccessor
    ) {
      this.seo.addTwitterCard(
        this.titleId,
        'This page is where you can sign up for a 7 day free trial and purchase a Rank Fantasy Sports Pro Subscription for $9.99 per month',
        '../../../assets/img/rfs-logo.svg'
        );
      }



  ngOnInit() {
    this.showDetails = true;

    this.stripe = Stripe(environment.stripeKey);

    const elements = this.stripe.elements();
    const style = {
      base: {
        color: '#227733',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#121212'
        }
      },
      invalid: {
        color: '#f73008',
        iconColor: '#f73008'
      }
    };

    // Create an instance of the card Element.
    this.card = elements.create('card', { style: style });
    this.card.mount(this.cardElement.nativeElement);
    this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
    });

  }

  ngAfterViewInit() {

    this.checkLoggedInStatus();


  }



  // wizard for signed in user to skip to step 2
  // navigateToStep() {
  //   this.wizard.goToStep(1);
  // }


  checkLoggedInStatus() {
    const user = this.auth.getUser();
    if (user !== null) {
      this.wizard.goToStep(1);
    }
  }

  // firebase analytics in node_modules indexed,d.ts

  // logEvent(
  //   eventName: 'add_payment_info',
  //   eventParams?: { [key: string]: any },
  //   options?: firebase.analytics.AnalyticsCallOptions
  // ): void;




  // checkmark value
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

  // Stripe single charge and stripe subscription logic (subscription only / or both)
  async onSubmit(stripe: NgForm) {
    this.spinner.loadSpinner();
    const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
      this.spinner.dismissSpinner();
      const cardErrors = error.message;
      // stripe.reset();
      window.alert(cardErrors);

    } else {
      if (this.theCheckbox) {
        const user = await this.auth.getUser();
        const fun0 = this.functions.httpsCallable('stripeCreateCharge');
        this.confirmation0 = await fun0({ source: source.id, uid: user.uid, amount: '5700' }).toPromise();
        if (this.confirmation0) {
          const fun1 = this.functions.httpsCallable('stripeCreateSubscription');
          this.confirmation1 = await fun1({
            source: source.id,
            uid: user.uid,
            plan: 'bronze'
          }).toPromise();
          if (this.confirmation0 && this.confirmation1) {
            stripe.reset();
            this.message.subscribedToast();
            this.spinner.dismissSpinner();
            this.wizard.goToStep(2);
          }
        }
      } else if (!this.theCheckbox) {
        const user = await this.auth.getUser();
        const fun1 = this.functions.httpsCallable('stripeCreateSubscription');
        this.confirmation1 = await fun1({
          source: source.id,
          uid: user.uid,
          plan: 'bronze'
        })
        .toPromise();
        if (this.confirmation1) {
          stripe.reset();
          this.spinner.dismissSpinner();
          this.message.subscribedToast();
          this.wizard.goToStep(2);
        }
      }
    }
  }




  switchAuthMode() {
    this.isRegister = !this.isRegister;
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'popoverUser'
    });
    popover.present();
  }
}

