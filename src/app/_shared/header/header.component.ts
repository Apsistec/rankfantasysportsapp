import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverController, ModalController } from '@ionic/angular';
import { User } from '../../_models/user';
import { AuthService } from '../../_services/auth.service';
import { ModalService } from '@services/modal.service';

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
