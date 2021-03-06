import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { User } from '../../_models/user';
import { AuthService } from '../../_services/auth.service';
import { ModalService } from '../../_services/modal.service';
import { ThemeService } from '../../_services/theme.service';
import { PopoverComponent } from '../../_shared/popover/popover.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  core;
  user: User;
  constructor(
    // private config: Config,
    public authService: AuthService,
    private theme: ThemeService,
    public modal: ModalService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    // this.core = this.config.get('mode') === 'core';

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'popoverUser'
    });
    popover.present();
  }


  dismiss() {
    this.modal.dismiss();
  }

  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }

}
