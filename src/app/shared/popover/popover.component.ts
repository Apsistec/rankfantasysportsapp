import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'popover-component',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  page;

  constructor(
    public popoverController: PopoverController,
    private navParams: NavParams,
    public auth: AuthService
    ) {}

  logOut() {
    this.auth.SignOut();
    // code for logout
  }

  eventFromPopover() {
    // this.events.publish('fromPopoverEvent');
    // Get data from popover page
    this.page = this.navParams.get('data');
  }

  dismissPopover(){
    this.popoverController.dismiss();
  }
}
