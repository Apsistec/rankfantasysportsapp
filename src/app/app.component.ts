import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TicketService } from './core/services/ticket.service';

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
    private statusBar: StatusBar,
    public ticket: TicketService
  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
