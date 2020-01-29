import { AuthService } from './_services/auth.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  IonContent,
  ModalController,
  Platform,
  ToastController
} from '@ionic/angular';
import { PrivacyDialogComponent } from './_shared/privacy-dialog/privacy-dialog.component';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';
import { TermsDialogComponent } from './_shared/terms-dialog/terms-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;
  titleId;
  subs: Subscription;

  constructor(
    private swUpdate: SwUpdate,
    public auth: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private modalController: ModalController,
    private statusBar: StatusBar,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });
  }
  ngOnInit(): void {
    this.subs = this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: `Reload`
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
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

  onScroll(event) {
    this.scrolledDown = event.detail.scrollTop > 200 ? true : false;
  }
  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }

  signOut() {
    this.auth.SignOut();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
