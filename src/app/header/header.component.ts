import { Component, Input, OnInit } from '@angular/core';
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
export class HeaderComponent implements OnInit {

  // @Input() titleId: string;

  user: User;
  // button= document.querySelector('ion-button');

  mobile;
  showGetStartedButton= true;

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
