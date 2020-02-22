import { AuthService } from '@services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Config, PopoverController } from '@ionic/angular';
import { ModalService } from '@services/modal.service';
import { ThemeService } from '@services/theme.service';
import { PopoverComponent } from '@shared/popover/popover.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  core;

  constructor(
    private config: Config,
    public auth: AuthService,
    private theme: ThemeService,
    public modal: ModalService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.core = this.config.get('mode') === 'core';
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

  openModal() {
    this.modal.loginModal();
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
