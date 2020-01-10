import { AuthService } from '@services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController, Platform, ToastController } from '@ionic/angular';
import { PrivacyDialogComponent } from '@shared/privacy-dialog/privacy-dialog.component';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwUpdate } from '@angular/service-worker';
import { TermsDialogComponent } from '@shared/terms-dialog/terms-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;
  titleId;

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

  ngOnInit(): void {
    this.swUpdate.available.subscribe(async res => {
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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });
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
}
