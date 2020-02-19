import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ModalService } from './../../_services/modal.service';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverController } from '@ionic/angular';
import { User } from '../../_models/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() titleId: string;

  user: User;
  button = document.querySelector('ion-button');
  mobile;
  showGetStartedButton: Boolean;
  constructor(
    public auth: AuthService,
    private popoverController: PopoverController,
    private modal: ModalService
  ) {}

  ngOnInit() {
    this.showGetStartedButton =
      !this.isHomePage && !this.isLoginPage && !this.isRegisterPage  && !this.isPurchasePage && !this.isForgotPage;

    if ( window.screen.width < 768 ) { // 768px portrait
      this.mobile = true;
    }
  }

  ngAfterViewInit() {
  }

  openModal() {
    this.modal.loginModal();
  }
  dismiss() {
    this.modal.dismiss();
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
  get isForgotPage(): boolean {
    return this.titleId === 'Reset RF$\u2122 Password' ? true : false;
  }
  get isProfilePage(): boolean {
    return this.titleId === 'RF$\u2122 User Profile' ? true : false;
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,

      cssClass: 'popoverUser'
    });
    return popover.present();
  }
}
