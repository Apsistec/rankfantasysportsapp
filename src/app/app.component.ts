<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { PrivacyDialogComponent } from '@shared/privacy-dialog/privacy-dialog.component';
import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material';
import { TermsDialogComponent } from '@shared/terms-dialog/terms-dialog.component';
import { MessageService } from '@services/message.service';
import { Router } from '@angular/router';
=======
import { AuthService } from './_services/auth.service';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild
  } from '@angular/core';
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
>>>>>>> Stashed changes
=======
import { AuthService } from './_services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonContent,
  ModalController,
  Platform,
  ToastController
} from '@ionic/angular';
import { PrivacyDialogComponent } from './_shared/privacy-dialog/privacy-dialog.component';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwUpdate } from '@angular/service-worker';
import { TermsDialogComponent } from './_shared/terms-dialog/terms-dialog.component';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
<<<<<<< Updated upstream
<<<<<<< Updated upstream
export class AppComponent {
=======
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;
  titleId;
  subs: Subscription;
>>>>>>> Stashed changes
=======
export class AppComponent implements OnInit {
  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;
  titleId;
>>>>>>> Stashed changes

  constructor(
    private swUpdate: SwUpdate,
    public auth: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private modalController: ModalController,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    private statusBar: StatusBar
  ) {
      this.initializeApp();
=======
    private statusBar: StatusBar,
    private toastCtrl: ToastController
  ) {
=======
    private statusBar: StatusBar,
    private toastCtrl: ToastController
  ) {
>>>>>>> Stashed changes
    this.initializeApp();
  }

  ngOnInit(): void {
<<<<<<< Updated upstream
    this.subs = this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        showCloseButton: true,
        position: 'bottom',
=======
    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        showCloseButton: true,
        position: 'top',
>>>>>>> Stashed changes
        closeButtonText: `Reload`
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

<<<<<<< Updated upstream
=======
  ngOnDestroy(): void {
    this.subs.unsubscribe();
}
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}
