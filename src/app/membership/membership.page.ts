import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../_services/auth.service';
import { environment } from '../../environments/environment.prod';
import { NgForm } from '@angular/forms';
import { MessageService } from '@services/message.service';
import { ModalService } from '../_services/modal.service';
import { SeoService } from '@services/seo.service';
import { SpinnerService } from '@services/spinner.service';
import { WizardComponent } from 'angular-archwizard';
import { PopoverComponent } from '@shared/popover/popover.component';


import {
  Component,
  AfterViewInit,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PopoverController } from '@ionic/angular';
declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-purchase',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss']
})
// tslint:disable-next-line: component-class-suffix
export class MembershipPage implements OnInit, AfterViewInit {

  isRegister = true;
  titleId = 'RF$\u2122 Pro Memberships';

  user;
  @ViewChild(WizardComponent, {static: false}) public wizard: WizardComponent;


  showDetails: boolean;
  hideProduct: boolean;

  // blinker: Subscription;
  isChecked = false;
  card;
  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;
  stripe: stripe.Stripe;

  confirmation;
  cardErrors;

  constructor(
    public functions: AngularFireFunctions,
    private spinner: SpinnerService,
    public auth: AuthService,
    private message: MessageService,
    public modal: ModalService,
    private seo: SeoService,
    private popoverController: PopoverController
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

  // checkIt() {
  //   this.isChecked = !this.isChecked;
  // }

  async onSubmit(form) {
    if (this.isChecked) {
      this.bumpUpOrder(form).then(() => {
        this.subscribeUser(form);
      });
    }{
      this.subscribeUser(form);
    }
  }

  async subscribeUser(stripe: NgForm) {
    const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
      this.spinner.dismissSpinner();
      stripe.reset();
      // Inform the customer that there was an error.
      const cardErrors = error.message;
      window.alert(cardErrors);
    } else {
      this.spinner.loadSpinner();
      const user = await this.auth.getUser();
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      this.confirmation = await fun({
        source: source.id,
        uid: user.uid,
        plan: 'plan_Gl53WD33vJA3uR'
      }).toPromise();
      this.spinner.dismissSpinner();
      stripe.reset();
      this.message.subscribedToast();
        this.wizard.goToStep(2);
    }
  }

  async bumpUpOrder(check: NgForm) {
    const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
    } else {
        // Send the token to your server.
        const user = await this.auth.getUser();
        const fun = this.functions.httpsCallable('stripeCreateCharge');
        this.confirmation = await fun({ source: source.id, uid: user.uid, amount: '999' }).toPromise();
    }
  }

  // wizard for signed in user to skip to step 2
  navigateToStep() {
    this.wizard.goToStep(1);
  }

  checkLoggedInStatus() {
    const user = this.auth.getCurrentUser();
    if (user !== null) {
      this.wizard.goToStep(1);
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
    return popover.present();
  }
}

