import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { User } from '@models/user';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() titleId: string;

  user: User;
  button = document.querySelector('ion-button');

  constructor(
    public auth: AuthService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    // this.homePage();
  }

  // Returns true when user is looged in and email is verified
  get isHomePage(): boolean {
    return this.titleId === 'RF$\u2122 Home' ? true : false;
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'popoverUser'
    });
    return await popover.present();
  }
}
