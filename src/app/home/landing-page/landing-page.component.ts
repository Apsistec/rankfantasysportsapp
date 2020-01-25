import { Component, OnInit } from '@angular/core';
import { Config, PopoverController } from '@ionic/angular';
<<<<<<< Updated upstream
=======
import { AuthService } from '@services/auth.service'
>>>>>>> Stashed changes

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  core;

  constructor(
    private config: Config,
    private popoverCtrl: PopoverController,
<<<<<<< Updated upstream
=======
    public auth: AuthService
>>>>>>> Stashed changes
  ) { }

  ngOnInit() {
    this.core = this.config.get('mode') === 'core';
  }


  // async presentPopover(ev: any) {
  //   const popover = await this.popoverCtrl.create({
  //     component: , //PagesComponent,
  //     event: ev,
  //     translucent: true,
  //     cssClass: 'popoverUser'
  //   });
  //   return popover.present();
  // }
}
