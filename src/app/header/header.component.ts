import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { User } from '../_models/user';
import { AuthService } from '../_services/auth.service';
import { ModalService } from '../_services/modal.service';
import { PopoverComponent } from '../_shared/popover/popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() titleId: string;

  user: User;
  button= document.querySelector('ion-button');

  mobile;
  showGetStartedButton: Boolean;

  constructor(
    public authService: AuthService,
    private popoverController: PopoverController,
    private modal: ModalService
  ) {}

  ngOnInit() {
    if ( window.screen.width < 768 ) { // 768px portrait
      this.mobile = true;
    }
  }

  ngAfterViewInit() {
    this.showGetStartedButton = !this.isHomePage && !this.isPurchasePage;
  }

  // Returns true when user is looged in and home page is verified
  get isHomePage(): boolean {
    return this.titleId === 'RF$\u2122 Home' ? true : false;
  }

  get isPurchasePage(): boolean {
    return this.titleId === 'RF$\u2122 Pro Memberships' ? true : false;
  }

  get isProfilePage(): boolean {
    return this.titleId === 'RF$\u2122 User Profile' ? true : false;
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

  openModal() {
    this.modal.loginModal();
  }
}
