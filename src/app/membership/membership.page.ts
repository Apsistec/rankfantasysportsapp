import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../_services/auth.service';
import { BlinkDirective } from '@directives/blink.directive';
import { environment } from '../../environments/environment.prod';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { IonContent, ModalController } from '@ionic/angular';
import { MembershipPageModule } from './membership.module';
import { MessageService } from '@services/message.service';
import { ModalService } from '../_services/modal.service';
import { PrivacyDialogComponent } from '../_shared/privacy-dialog/privacy-dialog.component';
import { Router } from '@angular/router';
import { SeoService } from '@services/seo.service';
import { SpinnerService } from '@services/spinner.service';
import { TermsDialogComponent } from '../_shared/terms-dialog/terms-dialog.component';
import { WizardComponent } from 'angular-archwizard';

import {
  Component,
  HostBinding,
  AfterViewInit,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
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

  loading = false;

  @ViewChild(WizardComponent, {static: false})
  public wizard: WizardComponent;

  showDetails: boolean;
  hideProduct: boolean;

  // blinker: Subscription;
  checked: boolean;
  card;
  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;
  stripe: stripe.Stripe;

  confirmation;
  cardErrors;

  @Input()register;
  @Input()login;

  constructor(
    public functions: AngularFireFunctions,
    private spinner: SpinnerService,
    public auth: AuthService,
    private message: MessageService,
    public modal: ModalService,
    private seo: SeoService
    ) {
      this.seo.addTwitterCard(
        this.titleId,
        'This page is where you can sign up for a 7 day free trial and purchase a Rank Fantasy Sports Pro Subscription for $9.99 per month',
        '../../../assets/img/rfs-logo.svg'
        );
      }


      ngOnInit() {
        this.showDetails = true;
      }





      ngAfterViewInit() {


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

  isChecked() {
    this.checked = !this.checked;
  }


  async onSubmit(stripe: NgForm) {
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

  // async handleForm(e) {
    //   e.preventDefault();

    //   const { source, error } = await this.stripe.createSource(this.card);

    //   if (error) {
      //     // Inform the customer that there was an error.
      //     const cardErrors = error.message;
      //   } else {
        //     // Send the token to your server.
        //     this.loading = true;
        //     const user = await this.auth.getUser();
        //     const fun = this.functions.httpsCallable('stripeCreateCharge');
        //     this.confirmation = await fun({ source: source.id, uid: user.uid, amount: this.amount }).toPromise();
        //     this.loading = false;

        //   }

        // wizard for signed in user to skip to step 2
      navigateToStep() {

      }



        switchAuthMode() {
          this.isRegister = !this.isRegister;
        }
      }

