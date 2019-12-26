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

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // animations: [slideInAnimation]
})
export class AppComponent {

  constructor(
    public auth: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private modalController: ModalController,
    private statusBar: StatusBar
  ) {
      this.initializeApp();
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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });
  }

  signOut() {
    this.auth.SignOut();
  }

}

