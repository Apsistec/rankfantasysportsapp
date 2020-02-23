import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { AngularFireAuth } from '@angular/fire/auth';

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
    private auth: AuthService
  ) {}

  // code for logout
  async logOut() {
    await this.dismissPopover();
      this.auth.signOut();
  }

  async goToProfile() {
    await this.dismissPopover();
    this.router.navigateByUrl('/profile');
  }

  dismissPopover() {
    this.popoverController.dismiss();
  }
}
