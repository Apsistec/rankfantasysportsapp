import { AuthService } from '@services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Component, OnInit, ElementRef, Output, ViewChild, AfterViewInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, IonContent } from '@ionic/angular';
import { RegModalComponent } from '@shared/reg-modal/reg-modal.component';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MessageService } from '@services/message.service';
import { MatDialog } from '@angular/material';
import { TermsDialogComponent } from '@shared/terms-dialog/terms-dialog.component';
import { PrivacyDialogComponent } from '@shared/privacy-dialog/privacy-dialog.component';
import { StripeService } from '@services/stripe.service';

declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit, AfterViewInit {

  public trustedVideoUrl: SafeResourceUrl;
  video: any = {
    url: 'https://www.youtube.com/embed/Ok-zmmoSZe8'
  };
  public trustedVideoUrl2: SafeResourceUrl;
  video2: any = {
    url: 'https://www.youtube.com/embed/FWZIisrxodY'
  };

  @ViewChild('cardElement', { static: true }) cardElement: ElementRef;
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;

  @Input() user;

  stripe: stripe.Stripe;

  @Output() planId: string;

  price: string;
  isClickedSilver = false;
  isClickedGold = false;
  isClickedBronze = false;
  planChosen = false;
  titleId = 'RF$\u2122 Pro Memberships';
  card;
  cardErrors;

  constructor(
    public auth: AuthService,
    public domSanitizer: DomSanitizer,
    public functions: AngularFireFunctions,
    private router: Router,
    private loadingCtrl: LoadingController,
    public modalController: ModalController,
    private message: MessageService,
    private stripeFun: StripeService
  ) {
  }

  clickedGold() {
    if (this.auth.afAuth.auth.currentUser) {
      this.isClickedSilver = false;
      this.isClickedBronze = false;
      this.isClickedGold = true;
      this.planChosen = true;
      this.planId = 'gold';
      this.price = '$90.00 for 12 Months';
      this.ScrollToTarget();
    } else {
      this.presentModal();
      this.isClickedSilver = false;
      this.isClickedBronze = false;
      this.isClickedGold = true;
      this.planChosen = true;
      this.planId = 'gold';
      this.price = '$90.00 for 12 Months';
      this.ScrollToTarget();
    }
  }

  clickedSilver() {
    if (this.auth.afAuth.auth.currentUser) {
      this.isClickedBronze = false;
      this.isClickedGold = false;
      this.isClickedSilver = true;
      this.planChosen = true;
      this.planId = 'silver';
      this.price = '$50.00 for 6 Months';
      this.ScrollToTarget();
    } else {
      this.presentModal();
      this.isClickedBronze = false;
      this.isClickedGold = false;
      this.isClickedSilver = true;
      this.planChosen = true;
      this.planId = 'silver';
      this.price = '$50.00 for 6 Months';
      this.ScrollToTarget();
    }
  }

  clickedBronze() {
    if (this.auth.afAuth.auth.currentUser) {
      this.isClickedSilver = false;
      this.isClickedGold = false;
      this.isClickedBronze = true;
      this.planChosen = true;
      this.planId = 'bronze';
      this.price = '$9.99 per Month';
      this.ScrollToTarget();
    } else {
      this.presentModal();
      this.isClickedSilver = false;
      this.isClickedGold = false;
      this.isClickedBronze = true;
      this.planChosen = true;
      this.planId = 'bronze';
      this.price = '$9.99 per Month';
      this.ScrollToTarget();
    }
  }

  ngOnInit() {
    this.showVid();
    this.stripe = Stripe('pk_test_mFFXjOh5rHb7VLruDV39tGE200iVUj9Ook');
    const elements = this.stripe.elements();
    const style = {
      base: {
        color: '#006b12',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '17px',
        '::placeholder': {
          color: '#696969'
        }
      },
      invalid: {
        color: '#711300',
        iconColor: '#f00f00'
      }
    };

    // Create an instance of the card Element.
    this.card = elements.create('card', { style: style });
    this.card.mount(this.cardElement.nativeElement);
    this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
    });
    this.planChosen = false;
    this.isClickedSilver = false;
    this.isClickedBronze = false;
    this.isClickedGold = false;
  }

  ngAfterViewInit() {
  }

  async presentLoading() {
    const loadingElement = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
    });
    await loadingElement.present();
  }

  async onDismissLoader() {
    await this.loadingCtrl.dismiss();
  }

  async onSubmit(f: NgForm) {
      this.presentLoading();
      const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
      // Inform the customer that there was an error.
      const cardErrors = error.message;
      window.alert(cardErrors);
    } else {
      await this.stripeFun.subscribeUser(source, this.planId)
        .then(( confirmation ) => {
          this.onDismissLoader();
          this.message.subscribedToast();
          this.planChosen = false;
          this.isClickedSilver = false;
          this.isClickedBronze = false;
          this.isClickedGold = false;
          f.reset();
          return this.router.navigate(['/welcome']);
        });
    }
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: RegModalComponent,
      cssClass: 'app-reg-modal'
    });
    return await modal.present();
  }

  async ScrollToTarget() {
    await this.ionContent.scrollToPoint(0, 775, 1500);
  }

  async showVid() {
    this.trustedVideoUrl = await this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    this.trustedVideoUrl2 = await this.domSanitizer.bypassSecurityTrustResourceUrl(this.video2.url);
  }

  async showModalTerms() {
    const modal = await this.modalController.create({
      component: TermsDialogComponent
    });
    return await modal.present();
  }

  async showModalPrivacy() {
    const modal = await this.modalController.create({
      component: PrivacyDialogComponent
    });
    return await modal.present();
  }


}
