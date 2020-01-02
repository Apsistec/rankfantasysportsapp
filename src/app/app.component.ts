import { PrivacyDialogComponent } from '@shared/privacy-dialog/privacy-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TermsDialogComponent } from '@shared/terms-dialog/terms-dialog.component';
import { SwUpdate } from '@angular/service-worker';
import { MessageService } from '@services/message.service';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  // animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  scrolledDown = false;

  titleId;

  constructor(private swUpdate: SwUpdate,
    public auth: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private modalController: ModalController,
    private statusBar: StatusBar,
    private message: MessageService
  ) {
    this.initializeApp();
  }

  public ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
        this.swUpdate.available.subscribe((evt) => {
          this.message.refreshBrowserAlert();
            console.log('service worker updated');
        });
        this.swUpdate.checkForUpdate().then(() => {
             // noop
        }).catch((err) => {
             console.error('error when checking for update', err);
        });
    }
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

  onScroll(event) {
    this.scrolledDown = (event.detail.scrollTop > 200) ? true : false;
    }
  ScrollToTop() {
    this.ionContent.scrollToTop(1500);
  }

  signOut() {
    this.auth.SignOut();
  }
}
