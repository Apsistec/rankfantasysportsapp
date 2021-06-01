import { WizardComponent } from 'angular-archwizard';

import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

import { AuthService } from '../_services/auth.service';
import { MessageService } from '../_services/message.service';
import { ModalService } from '../_services/modal.service';
import { SeoService } from '../_services/seo.service';
import { PopoverComponent } from '../_shared/popover/popover.component';

declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-purchase',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss']
})
export class MembershipPage implements OnInit, OnChanges {
  isRegister = true;
  titleId = 'RF$\u2122 Pro Memberships';

  @ViewChild(WizardComponent, { static: true }) public wizard: WizardComponent;
  user;
  showDetails: boolean;
  hideProduct: boolean;
  isLoggedIn: boolean = false;
  card;
  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;
  stripe: stripe.Stripe;
  uid;
  subscription;
  amount = 0;
  cardErrors;
  isLoading = false;
  price;
  marked = false;
  theCheckbox = false;
  hide = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  userId;
  source;

  constructor(
    public functions: AngularFireFunctions,
    public authService: AuthService,
    private message: MessageService,
    public modal: ModalService,
    private seo: SeoService,
    private popoverController: PopoverController,
    private fb: FormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.seo.addTwitterCard(
      this.titleId,
      'This page is where you can sign up for a 7 day free trial and purchase a Rank Fantasy Sports Pro Subscription for $9.99 per month',
      '../../../assets/img/rfs-logo.svg'
    );
    this.user = this.afAuth.currentUser;
  }

  ngOnInit() {
    if (this.authService.authenticated && this.authService.isSubscribed) {
      this.router.navigate['profile'];
    } else {
      this.wizard.goToStep(0);
    }

    // (this.authService.authenticated)? this.wizard.goToStep(1) : this.wizard.goToStep(0);

    this.amount = this.theCheckbox ? +'5700' : +'000';

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

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      displayName: ['', [Validators.required, Validators.minLength(3)]],
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

    this.hide = true;
    this.showDetails = true;

    // Stripe Details
    this.stripe = Stripe('pk_test_Rm4QbcP0thjADBses4DnzU5600K3q0XqMA');
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



  ngOnChanges() {}

  // checkmark value
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

  async handleForm(e) {
    e.preventDefault();

    const { source, error } = await this.stripe.createSource(this.card);

    if (error) {
      // Inform the customer that there was an error.
      const cardErrors = error.message;
    } else {
      // Send the token to your server.
      this.isLoading = true;
      if (this.theCheckbox === true) {
        this.price = 'price_1Ix0urKgDdcItEX8yB5ES8yL';
      }
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      await fun({ source: source.id, uid: this.authService.user.uid, plan: 'prod_JaB0GVUd3VjPCL', price: this.price }).subscribe((res) => {
        this.subscription = res;
      });
      this.isLoading = false;
      this.wizard.goToStep(2);
    }
  }

  firstStep() {
    this.wizard.goToStep(0);
  }

  nextStep() {
    this.wizard.goToStep(1);
  }

  async Login() {
    try {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      const res = await this.authService.SignIn(email, password);
      this.nextStep();
      this.message.isLoggedInToast();
    } catch {
      (error) => {
        this.message.errorAlert(error.message);
      };
    }
  }

  async registerUser() {
    try {
      const email = this.registerForm.value.email;
      const displayName = this.registerForm.value.displayName;
      const password = this.registerForm.value.password;
      const res = await this.authService.SignUp(displayName, email, password);
      this.nextStep();
      this.message.registerSuccessToast();
    } catch {
      (error) => {
        this.message.errorAlert(error.message);
      };
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
