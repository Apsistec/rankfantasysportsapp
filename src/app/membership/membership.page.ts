import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../_services/auth.service';
import { environment } from '../../environments/environment.prod';
import { NgForm, Validators, FormBuilder } from '@angular/forms';
// tslint:disable-next-line: no-implicit-dependencies
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
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from '@models/user';
import { Router } from '@angular/router';
declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-purchase',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss']
})
export class MembershipPage implements OnInit, AfterViewInit {

  isRegister = true;
  titleId = 'RF$\u2122 Pro Memberships';

  user: User;
  @ViewChild(WizardComponent, {static: true}) public wizard: WizardComponent;

  showDetails: boolean;
  hideProduct: boolean;

  // blinker: Subscription;
  card;
  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;
  stripe: stripe.Stripe;
  loginForm;
  confirmation1;
  confirmation0;
  cardErrors;
  isLoading = false;
  marked = false;
  theCheckbox = false;
  hidePass;
  registerForm;



  constructor(
    public functions: AngularFireFunctions,
    private spinner: SpinnerService,
    public auth: AuthService,
    private message: MessageService,
    public modal: ModalService,
    private seo: SeoService,
    private spin: LoadingController,
    private popoverController: PopoverController,
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private router: Router
  
    ) {
      this.seo.addTwitterCard(
        this.titleId,
        'This page is where you can sign up for a 7 day free trial and purchase a Rank Fantasy Sports Pro Subscription for $9.99 per month',
        '../../../assets/img/rfs-logo.svg'
        );
      }



  ngOnInit() {

    this.hidePass = true;
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
          Validators.maxLength(25)
        ]
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
          Validators.maxLength(25)
        ]
      ],
    });
    this.hidePass = true;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
          Validators.maxLength(25)
        ]
      ]
    });

  

    this.showDetails = true;

    this.stripe = Stripe(environment.stripeKey);

    const elements = this.stripe.elements();
    const style = {
      base: {
        color: '#227733',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
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

    // tslint:disable-next-line: no-floating-promises
    this.checkLoggedInStatus();


  }



  async checkLoggedInStatus() {
    await this.auth.user$.subscribe(user => this.user = user)

    if (this.user) {
      this.wizard.goToStep(1);
    }
  }
  


  // checkmark value
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

  // Stripe single charge and stripe subscription logic (subscription only / or both)
  async handleForm(e) {
    this.spinner.loadSpinner();
    const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
      this.spinner.dismissSpinner();
      const cardErrors = error.message;
      // stripe.reset();
      window.alert(cardErrors);

    } else {
      if (this.theCheckbox) {
        const fun0 = this.functions.httpsCallable('stripeCreateCharge');
        this.confirmation0 = await fun0({ source: source.id, uid: this.user.uid, amount: '5700' }).toPromise();
        const fun1 = this.functions.httpsCallable('stripeCreateSubscription');
          this.confirmation1 = await fun1({
            source: source.id,
            uid: this.user.uid,
            plan: 'bronze'
          }).toPromise();
            await this.message.subscribedToast();
            await this.spinner.dismissSpinner();
            // tslint:disable-next-line: no-void-expression
            return this.wizard.goToStep(2);
      } else if (!this.theCheckbox) {
        const fun1 = this.functions.httpsCallable('stripeCreateSubscription');
        this.confirmation1 = await fun1({
          source: source.id,
          uid: this.user.uid,
          plan: 'bronze'
        })
        .toPromise();
        if (this.confirmation1) {
          this.spinner.dismissSpinner();
          this.message.subscribedToast();
          this.wizard.goToStep(2);
        }
      }
    }
  }
  

    
    async onSubmit() {
      return this.auth.signIn(this.loginForm.value).then((data) => {
        (this.auth.isSubscribed) ? this.router.navigateByUrl('/profile') : this.wizard.goToStep(1);        
     })
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


  async registerUser() {
    try {
      // tslint:disable-next-line: no-floating-promises
      await this.auth.registerUser(this.registerForm.value).then(() => {
        this.wizard.goToStep(1);
      });
    } catch (error) {
      this.message.errorAlert(error.message);
    }
  }

}

