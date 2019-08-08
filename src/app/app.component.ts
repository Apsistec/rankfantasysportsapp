import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  animations: [slideInAnimation]
})
export class AppComponent {
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor(
    public auth: AuthService,
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.statusBar.styleDefault();
    this.splashScreen.show();
  }
}
