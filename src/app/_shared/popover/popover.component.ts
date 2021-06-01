import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

import { User } from '../../_models/user';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'popover-component',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {

  page;
  @Input()user: User;

  constructor(
    private popoverController: PopoverController,
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) {}

  // code for logout
  async logOut() {
    await this.dismissPopover();
     this.authService.SignOut();
  }

  async goToProfile() {
    await this.dismissPopover();
    this.router.navigateByUrl('/profile');
  }

  dismissPopover() {
    this.popoverController.dismiss();
  }
}
