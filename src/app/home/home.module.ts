import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../_shared/shared.module';
import { DevicesComponent } from './devices/devices.component';
import { EndorsementsComponent } from './endorsements/endorsements.component';
import { HomePage } from './home.page';
import { LandingPageComponent } from './landing-page/landing-page.component';

// import { AuthModalComponent } from '../../auth-modal/auth-modal.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [
    HomePage,
    LandingPageComponent,
    EndorsementsComponent,
    DevicesComponent
    // AuthModalComponent
  ],

  imports: [CommonModule, YouTubePlayerModule, IonicModule, SharedModule, RouterModule.forChild(routes)],
  entryComponents: [
    // AuthModalComponent
  ]
})
export class HomeModule {}
