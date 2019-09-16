import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // animations: [slideInAnimation]
})
export class AppComponent {

  constructor(
    public auth: AuthService,
    public platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {

  }

}
