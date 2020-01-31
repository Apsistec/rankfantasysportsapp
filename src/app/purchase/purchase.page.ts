import {
  OnDestroy,
  Component,
  Input,
  OnInit,
  ViewChild,
  HostListener,
  HostBinding
} from "@angular/core";
import { AngularFireFunctions } from "@angular/fire/functions";
import { AuthService } from "../_services/auth.service";
import { IonContent, ModalController } from "@ionic/angular";
import { PrivacyDialogComponent } from "../_shared/privacy-dialog/privacy-dialog.component";
import { RegModalComponent } from "../_shared/reg-modal/reg-modal.component";
import { TermsDialogComponent } from "../_shared/terms-dialog/terms-dialog.component";
import { SpinnerService } from "@services/spinner.service";
import { environment } from "@environments/environment";

declare var StripeCheckout: StripeCheckoutStatic;

@Component({
  selector: "app-purchase",
  templateUrl: "./purchase.page.html",
  styleUrls: ["./purchase.page.scss"]
})
export class PurchasePage implements OnInit {
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;

  @Input() user;
  // @Input() description;
  description;
  amount;
  finalAmount;
  handler: StripeCheckoutHandler;

  confirmation: any;
  stripe: stripe.Stripe;

  titleId = "RF$\u2122 Pro Memberships";

  constructor(
    public auth: AuthService,
    public functions: AngularFireFunctions,
    private spinner: SpinnerService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: "../../assets/img/icon-500x500.png",
      locale: "auto",
      source: async source => {
        this.spinner.loadSpinner();
        const fun = this.functions.httpsCallable("stripeCreateCharge");
        this.confirmation = await fun({
          source: source.id,
          uid: this.user.uid,
          amount: this.amount
        }).toPromise();
        this.spinner.dismissSpinner();
      }
    });
  }

  // Open the checkout handler
  async checkout(e) {
    // thi user = await this.auth.getUser();
    this.handler.open({
      name: "RANK FANTASY SPORTS",
      description: this.description,
      amount: this.amount,
      email: this.user.email
    });
    e.preventDefault();
  }

  // Close on navigate
  @HostListener("window:popstate")
  onPopstate() {
    this.handler.close();
  }

  // Skip down to Payment Form after choosing plan and while modal pops up
  // async ScrollToTarget() {
  //   await this.ionContent.scrollToPoint(0, 775, 1500);
  // }

  // Modalized version of Register Form Page
  async presentModal() {
    const modal = await this.modalController.create({
      component: RegModalComponent,
      cssClass: "app-reg-modal"
    });
    return modal.present();
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsDialogComponent
    });
    return modal.present();
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyDialogComponent
    });
    return modal.present();
  }

  // Stop Spinner
  async onDismissLoader() {
    await this.spinner.dismissSpinner();
  }
  bumpOrder() {
    this.finalAmount = +this.amount + 57;
  }
}
