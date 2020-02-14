import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../_services/auth.service';
import { BlinkDirective } from '@directives/blink.directive';
import { environment } from './../../environments/environment.prod';
import { FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { IonContent, ModalController } from '@ionic/angular';
import { MessageService } from '@services/message.service';
import { PrivacyDialogComponent } from '../_shared/privacy-dialog/privacy-dialog.component';
import { Router } from '@angular/router';
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
} from '@angular/core';
declare var Stripe: stripe.StripeStatic;

@Component({
  selector: "app-purchase",
  templateUrl: "./purchase.page.html",
  styleUrls: ["./purchase.page.scss"]
})
export class PurchasePage implements OnInit, AfterViewInit {

  titleId = "RF$\u2122 Pro Memberships";

  // @ViewChild(WizardComponent)
  // @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  // @Input() blinker$;
  user;

  loading = false;

  registerForm;
  hidePass: boolean;

  @ViewChild(WizardComponent, {static: false})
  public wizard: WizardComponent;

  checked: boolean;

  card;
  @ViewChild("cardElement", { static: true }) cardElement: ElementRef;
  stripe: stripe.Stripe;
  description: string = "Rank Fantasy Sports Bronze Pro Plan";
  amount: number = 999;
  confirmation;
  cardErrors;

  showDetails: boolean;
  hideProduct: boolean;


  // myControl = new FormControl('');

  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private spinner: SpinnerService,
    private modalController: ModalController,
    private router: Router,
    private fb: FormBuilder,
    private message: MessageService,
  ) {}


  ngOnInit() {
    !this.checked;
    this.hidePass = true;
    this.showDetails = true;
    this.registerForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern("^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$"),
          Validators.maxLength(25)
        ]
      ],
      firstName: [
        "",
        [
          Validators.required,
          Validators.pattern("^[_A-z0-9]*((-|s)*[_A-z0-9])*$"),
          Validators.maxLength(25)
        ]
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.pattern("^[_A-z0-9]*((-|s)*[_A-z0-9])*$"),
          Validators.maxLength(25)
        ]
      ]
    });


    console.log('oninit' + this.checked);

    this.navigateToStep();

  }

  ngAfterViewInit() {
    console.log('afterinit' + this.checked);

    this.stripe = Stripe(environment.stripeKey);

    const elements = this.stripe.elements();
    const style = {
      base: {
        color: "#227733",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#121212"
        }
      },
      invalid: {
        color: "#f73008",
        iconColor: "#f73008"
      }
    };

    // Create an instance of the card Element.
    this.card = elements.create("card", { style: style });
    this.card.mount(this.cardElement.nativeElement);
    this.card.addEventListener("change", ({ error }) => {
      this.cardErrors = error && error.message;
    });
  }

    isChecked() {
      this.checked = !this.checked;
      console.log('onCheck' + this.checked);
    }

  async registerUser(reg: NgForm) {
    this.spinner.loadSpinner();
    this.auth.registerUser(this.registerForm.value).then(
      async res => {
        await this.spinner.dismissSpinner();
        if (res.user.uid) {
          this.message.registerSuccessToast();
          this.wizard.goToStep(1);
          reg.reset();
        }
      },
      async err => {
        await this.spinner.dismissSpinner();
        await this.message.errorAlert(err.message);
        reg.reset();
      }
    );
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
      const fun = this.functions.httpsCallable("stripeCreateSubscription");
      this.confirmation = await fun({
        source: source.id,
        uid: user.uid,
        plan: "bronze"
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
 async navigateToStep() {
    this.user = await this.auth.getUser();
    this.user ? true : false;
    if (this.user) {
      await this.wizard.goToStep(1);
    }
  }


  // Stop Spinner
  async onDismissLoader() {
    await this.spinner.dismissSpinner();
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsDialogComponent,
      cssClass: "modalcss"
    });
    return modal.present();
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyDialogComponent,
      cssClass: "modalcss"
    });
    return modal.present();
  }
}
