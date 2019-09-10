import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Platform } from '@ionic/angular';
// import { slideInAnimation } from './animations';

// import { Plugins } from '@capacitor/core';
// const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // animations: [slideInAnimation]
})
export class AppComponent {
  // getAnimationData(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  constructor(
    public auth: AuthService,
    public platform: Platform,
    // public splashScreen: SplashScreen,
    // public statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
  //  SplashScreen.hide().catch(error => {
  //   console.error(error);
  //   });
  // StatusBar.hide().catch(error => {
  //   console.error(error);
  //   });
  }

}
