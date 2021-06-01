// import { Subscription } from 'rxjs';

import { Component, OnInit, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonContent, Platform, ToastController } from '@ionic/angular';

import { AuthService } from './_services/auth.service';
import { ModalService } from './_services/modal.service';
// import { SwUpdate } from '@angular/service-worker';
import { StripeService } from './_services/stripe.service';

// import { FcmService } from '../../fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  // @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;
  titleId;
  // subs: Subscription;
  year;

  constructor(
    // private swUpdate: SwUpdate,
    public authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private toastCtrl: ToastController,
    private modal: ModalService,
    public stripeService: StripeService

    // private fcm: FcmService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.fcm.getPermission().subscribe();
      // this.fcm.listenToMessages().subscribe();
    });
  }
  ngOnInit(): void {
    // this.subs = this.swUpdate.available.subscribe(async res => {
    //   const toast = await this.toastCtrl.create({
    //     message: 'Update available!',
    //     showCloseButton: true,
    //     position: 'bottom',
    //     closeButtonText: `Reload`
    //   });

    //   await toast.present();

    //   toast
    //     .onDidDismiss()
    //     .then(() => this.swUpdate.activateUpdate())
    //     .then(() => window.location.reload());
    // });

    this.year = new Date().getFullYear();
  }

  // onScroll(event) {
  //   this.scrolledDown = event.detail.scrollTop > 200 ? true : false;
  // }
  // ScrollToTop() {
  //   this.ionContent.scrollToTop(1500);
  // }

  // signOut() {
  //   this.authService.SignOut();
  // }

  // dismis() {
  //   this.modal.dismiss();
  // }

  // ngOnDestroy(): void {
  //   this.subs.unsubscribe();
  // }
}
