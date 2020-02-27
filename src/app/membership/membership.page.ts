import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../_services/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '@services/message.service';
import { ModalService } from '../_services/modal.service';
import { SeoService } from '@services/seo.service';
import { WizardComponent } from 'angular-archwizard';
import { PopoverComponent } from '@shared/popover/popover.component';

import { Component, OnChanges, AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PopoverController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { StorageService } from '@services/storage.service';
import { User } from '@models/user';
declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-purchase',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss']
})
export class MembershipPage implements OnInit, AfterViewInit, OnChanges {
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
  confirmation;
  amount = 0;
  confirmation0;
  cardErrors;
  isLoading = false;

  marked = false;
  theCheckbox = false;
  hide = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  userId;
  source;

  constructor(
    public functions: AngularFireFunctions,
    public auth: AuthService,
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
      this.user = this.afAuth.auth.currentUser;
  }
  
  ngOnInit() {


    if (this.auth.authenticated && this.auth.isSubscribed) {
      this.router.navigate['profile'];
    } else if (this.auth.authenticated) {
      this.wizard.goToStep(1);
    } else {
      this.wizard.goToStep(0);
    }

    console.log(this.auth.user);
    console.log(this.auth.currentUser);
    console.log(this.auth.currentUserId);
    console.log(this.auth.authenticated);

    // (this.auth.authenticated)? this.wizard.goToStep(1) : this.wizard.goToStep(0);
    
    this.amount = this.theCheckbox? +'5700' : +'000';
    
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
    this.stripe = Stripe('pk_test_mFFXjOh5rHb7VLruDV39tGE200iVUj9Ook');
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
 
      if (this.auth.authenticated && this.auth.isSubscribed) {
        this.router.navigate['profile'];
      } else if (this.auth.authenticated) {
        this.wizard.goToStep(1);
      } else {
        this.wizard.goToStep(0);
      }
  }
  
  ngOnChanges() {

  }  
  
  
  
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
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      this.confirmation = await fun({ source: source.id, uid: this.auth.currentUserId, plan: 'bronze' }).toPromise();
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
    try{  
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      const res = await this.auth.SignIn(email, password);
      this.nextStep();
      this.message.isLoggedInToast();
    } catch {
        error => {
          this.message.errorAlert(error.message);
        }
    }
  }

  async registerUser() {
    try{

      const email = this.registerForm.value.email;
      const displayName = this.registerForm.value.displayName;
      const password = this.registerForm.value.password;
      const res = await this.auth.SignUp(this.registerForm.value);
      this.nextStep();
      this.message.registerSuccessToast();
    } catch {
        error => {
          this.message.errorAlert(error.message);
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
