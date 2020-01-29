import { Component, Input, OnInit } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverController } from '@ionic/angular';
import { User } from '../../_models/user';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() titleId: string;

  user: User;
  button = document.querySelector('ion-button');
  mobile;
  constructor(
    public auth: AuthService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    if (window.screen.width <= 400) { // 768px portrait
      this.mobile = true;
    }
  }

  // Returns true when user is looged in and home page is verified
  get isHomePage(): boolean {
    return this.titleId === 'RF$\u2122 Home' ? true : false;
  }
  get isLoginPage(): boolean {
    return this.titleId === 'RF$\u2122 Login' ? true : false;
  }
  get isRegisterPage(): boolean {
    return this.titleId === 'RF$\u2122 Signup' ? true : false;
  }
  get isPurchasePage(): boolean {
    return this.titleId === 'RF$\u2122 Pro Memberships' ? true : false;
  }
  get isWelcomePage(): boolean {
    return this.titleId === 'RF$\u2122 Welcomes You' ? true : false;
  }
  get isForgotPage(): boolean {
    return this.titleId === 'Reset RF$\u2122 Password' ? true : false;
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'popoverUser'
    });
    return popover.present();
  }
}
