import { PrivacyDialogComponent } from './shared/privacy-dialog/privacy-dialog.component';
import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material';
import { TermsDialogComponent } from './shared/terms-dialog/terms-dialog.component';
import { MessageService } from './_services/message.service';
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
    private dialog: MatDialog,
    private statusBar: StatusBar,
    private message: MessageService,
    private router: Router
  ) {
      this.initializeApp();
  }


  showModalTerms() {
    this.dialog.open(TermsDialogComponent);
  }

  showModalPrivacy() {
    this.dialog.open(PrivacyDialogComponent);
  }

  stopDialog() {
    this.dialog.closeAll();
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

