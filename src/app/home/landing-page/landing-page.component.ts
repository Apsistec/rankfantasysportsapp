import { Component, OnInit } from '@angular/core';
import { Config, PopoverController } from '@ionic/angular';
import { AuthService } from '@services/auth.service';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  core;

  constructor(
    private config: Config,
    private popoverCtrl: PopoverController,
    public auth: AuthService,
    private theme: ThemeService
  ) {}

  ngOnInit() {
    this.core = this.config.get('mode') === 'core';
  }

  enableDark() {
    this.theme.enableDark();
  }

  enableLight() {
    this.theme.enableLight();
  }
}
