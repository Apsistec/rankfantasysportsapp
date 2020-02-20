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







  showGetStartedButton;
  mobile;





  user: User;
  button = document.querySelector('ion-button');

  constructor(
    public auth: AuthService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {}

  // Returns true when user is looged in and home page is verified
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
    return popover.present();
  }












  openModal() {

  }
}
