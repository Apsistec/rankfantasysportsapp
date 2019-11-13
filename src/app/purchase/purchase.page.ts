import { AuthService } from '../core/services/auth.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ModalController, IonContent } from '@ionic/angular';
import { RegisterComponent } from '../register/register.component';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

declare var Stripe: stripe.StripeStatic;

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage implements OnInit, AfterViewInit {
  @ViewChild('cardElement') cardElement: ElementRef;
  planId: string;
  price: string;
  @Input() user;
  @ViewChild(IonContent) ionContent: IonContent;
  isClickedSilver = false;
  isClickedGold = false;
  isClickedBronze = false;
  planChosen = false;
  titleId = 'Rank Fantasy $ports Pro Membership'
  stripe: stripe.Stripe;
  card;
  cardErrors;
  confirmation;

  public trustedVideoUrl: SafeResourceUrl;
  video: any = {
    url: ' https://www.youtube.com/embed/Ok-zmmoSZe8',
  };

  constructor(
    public auth: AuthService,
    public domSanitizer: DomSanitizer,
    public functions: AngularFireFunctions,
    private router: Router,
    private loadingCtrl: LoadingController,
    public toaster: ToastController,
    public modalController: ModalController
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
    this.stripe = Stripe('pk_live_zv7QgGqhVvrQW6bAUAn7yju400T3RMqWDt');

    const elements = this.stripe.elements();
    const style = {
      base: {
        color: '#268135',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '22px',
        '::placeholder': {
          color: '#9911c4'
        }
      },
      invalid: {
        color: '#981a00',
        iconColor: '#981a00'
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
    loadingElement.present();
  }
  onDismissLoader() {
    return this.loadingCtrl.dismiss();
  }

  async subscribedToast() {
    const toast = await this.toaster.create({
      header: 'Authentication Message:',
      cssClass: 'login',
      message: 'Thank You for your payment. You are subscribed!',
      position: 'bottom',
      duration: 5000,
      showCloseButton: true,
      translucent: true,
    });
    toast.present();
  }


  async onSubmit(f: NgForm) {
    const { source, error } = await this.stripe.createSource(this.card);
    if (error) {
      // Inform the customer that there was an error.
      const cardErrors = error.message;
      window.alert(cardErrors);
    } else {
      this.presentLoading();
      const user = await this.auth.getUser();
      const fun = this.functions.httpsCallable('stripeCreateSubscription');
      this.confirmation = await fun({
        source: source.id,
        uid: user.uid,
        plan: this.planId
      }).toPromise();
      this.subscribedToast();
      this.onDismissLoader();
      this.planChosen = false;
      this.isClickedSilver = false;
      this.isClickedBronze = false;
      this.isClickedGold = false;
      f.reset();
      return this.router.navigate(['/welcome']);
    }

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: RegisterComponent
    });
    return await modal.present();
  }

  ScrollToTarget() {
    this.ionContent.scrollToPoint(0, 775, 1500);
  }

  showVid() {
    (this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url));
  }
}
