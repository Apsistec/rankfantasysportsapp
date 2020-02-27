import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../_services/auth.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '@services/message.service';
import { ModalService } from '../_services/modal.service';
import { SeoService } from '@services/seo.service';
import { WizardComponent } from 'angular-archwizard';
import { PopoverComponent } from '@shared/popover/popover.component';

import { Component, AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class MembershipPage implements OnInit, AfterViewInit {
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
  hide;
  loginForm: FormGroup;
  registerForm: FormGroup;
  userId;
  source;
  ;
  dataForm: FormGroup;
  cart = [];
  constructor(
    public functions: AngularFireFunctions,
    public auth: AuthService,
    // private storage: StorageService,
    private message: MessageService,
    public modal: ModalService,
    private seo: SeoService,
    private popoverController: PopoverController,
    private fb: FormBuilder,
    private router: Router,
    private loadingCtrl: LoadingController,
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
    console.log(this.auth.user);

    console.log(this.auth.currentBehaviorUser);
    console.log(this.auth.currentUser);
    console.log(this.auth.currentUserId);
    console.log(this.auth.authenticated);
      (this.auth.authenticated)? this.wizard.goToStep(1) : this.wizard.goToStep(0);

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

  // async presentLoading() {
  //   const loadingElement = await this.loadingCtrl.create({
  //     message: 'Please wait...',
  //     spinner: 'crescent'
  //   });
  //   await loadingElement.present();
  // }

  // async onDismissLoader() {
  //   await this.loadingCtrl.dismiss();
  // }



  // checkmark value
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

  // Stripe single charge and stripe subscription logic (subscription only / or both)
  // async subHandler() {
  //   console.log('first' + this.user);
  //   this.presentLoading();
  //   const { source, error } = await this.stripe.createSource(this.card);
  //   console.log('aftersource' + this.user.uid);
  //   if (error) {
  //     this.onDismissLoader();
  //     const cardErrors = error.message;
  //     window.alert(cardErrors);
  //   } else {
  //     const user = this.getUserI();
  //     console.log('b4fun' + this.userId );
  //     const fun = this.functions.httpsCallable('stripeCreateSubscription');
  //         this.confirmation = await fun({
  //           source: source.id,
  //           uid: this.user.uid,
  //           plan: 'bronze'
  //         }).toPromise();
  //         console.log('afterconfirm'+ this.user);
  //         this.onDismissLoader();
  //         this.message.subscribedToast();
  //         this.wizard.goToStep(2);
  //       }

  //     }

  // async buyNow() {
  //  try{
  //       const source  = await this.stripe.createSource(this.card);
  //       this. presentLoading();
  //       const fun = this.functions.httpsCallable('stripeCreateSubscription');
  //       this.confirmation = await fun({ source: source, uid: this.afAuth.auth.currentBehaviorUser.uid, plan: 'bronze' }).toPromise();
  //       this.onDismissLoader();
  //   } catch (error) {
  //     // Inform the customer that there was an error.
  //     const cardErrors = error.message;
  //   }
  // }

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
    error => this.message.errorAlert(error.message);
  }
}

  async registerUser() {
    const email = this.registerForm.value.email;
    const displayName = this.registerForm.value.displayName;
    const password = this.registerForm.value.password;
    const res = await this.auth.SignUp(this.registerForm.value);
    this.nextStep();
    this.message.registerSuccessToast();
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
