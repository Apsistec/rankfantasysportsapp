import { Component, OnInit } from '@angular/core';
import { Config, MenuController } from '@ionic/angular';
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
    public auth: AuthService,
    private theme: ThemeService,
    private menu: MenuController
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

  toggleMenu() {
    // this.menu.getOpen('first')
    this.menu.open();
  }
}
