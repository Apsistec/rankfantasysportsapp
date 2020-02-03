import { environment } from './../../environments/environment.prod';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../_services/auth.service';
import { BlinkDirective } from '@directives/blink.directive';
import {
  Component,
  HostBinding,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { IonContent, ModalController } from '@ionic/angular';
import { MessageService } from '@services/message.service';
import { PrivacyDialogComponent } from '../_shared/privacy-dialog/privacy-dialog.component';
import { Router } from '@angular/router';
import { SpinnerService } from '@services/spinner.service';
import { TermsDialogComponent } from '../_shared/terms-dialog/terms-dialog.component';
declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit {
  
  
  titleId = 'RF$\u2122 Pro Memberships';

  // @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  hide = true;
  registerForm;
  // @Input() blinker$;
  amount: number= 999;
  description: string = 'Rank Fantasy Sports Bronze Pro Plan';
  @ViewChild('cardElement',{ static: true }) cardElement: ElementRef;
  
  checked= false;
  bumpupAmount;
  
  stripe:stripe.Stripe;
  card;
  cardErrors;

  loading = false;
  confirmation;

  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private spinner: SpinnerService,
    private modalController: ModalController,
    private router: Router,
    private fb: FormBuilder,
    private message: MessageService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
          Validators.maxLength(25),
        ],
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
          Validators.maxLength(25),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
          Validators.maxLength(25),
        ],
      ],
    });
 
    this.stripe = Stripe(environment.stripeKey);

    const elements = this.stripe.elements();
    const style = {
      base: {
        color: '#227733',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#9911c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    // Create an instance of the card Element.
    this.card = elements.create('card', { style: style });
    this.card.mount(this.cardElement.nativeElement);
    this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
    });
  }

  // Stop Spinner
  async onDismissLoader() {
    await this.spinner.dismissSpinner();
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsDialogComponent,
      cssClass: 'modalcss',
    });
    return modal.present();
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyDialogComponent,
      cssClass: 'modalcss',
    });
    return modal.present();
  }

  async register() {
    this.spinner.loadSpinner();
    this.auth.SignUp(this.registerForm.value).then(
      async res => {
        await this.spinner.dismissSpinner();
        this.message.registerSuccessToast();
      },
      async err => {
        await this.spinner.dismissSpinner();
        this.message.errorAlert(err.message);
      }
    );
  }



  async onSubmit(f: NgForm) {
    const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
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
        plan: 'bronze'
      }).toPromise();
      this.message.subscribedToast();
      this.spinner.dismissSpinner();
      f.reset();
      return this.router.navigate(['/welcome']);
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



  }
  

  bumpOrder() {

  }
}
