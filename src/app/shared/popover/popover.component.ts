import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'popover-component',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  page;

  constructor(
    public popoverController: PopoverController,
    public auth: AuthService,
    private router: Router
    ) {}

    // code for logout
  async logOut() {
    await this.dismissPopover();
    return await this.auth.SignOut();
  }

  async goToProfile() {
    await this.dismissPopover();
    return await this.router.navigateByUrl('/profile');
  }

  async dismissPopover() {
    return await this.popoverController.dismiss();
  }
}
