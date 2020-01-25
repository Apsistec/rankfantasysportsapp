import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
=======
import { DevicesComponent } from './devices/devices.component';
>>>>>>> Stashed changes
=======
import { DevicesComponent } from './devices/devices.component';
>>>>>>> Stashed changes
import { HomePage } from './home.page';
import { IconRowComponent } from './icon-row/icon-row.component';
import { InformaComponent } from './informa/informa.component';
import { IonicModule } from '@ionic/angular';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { PhonetestComponent } from './phonetest/phonetest.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
<<<<<<< Updated upstream
=======
import { VideoComponent } from './video/video.component';
import { SpotsComponent } from './spots/spots.component';
>>>>>>> Stashed changes

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [
    HomePage,
<<<<<<< Updated upstream
=======
    VideoComponent,
>>>>>>> Stashed changes
    LandingPageComponent,
    InformaComponent,
    AboutComponent,
    PhonetestComponent,
    IconRowComponent,
<<<<<<< Updated upstream
    DevicesComponent
=======
    DevicesComponent,
    SpotsComponent
>>>>>>> Stashed changes
  ],

  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: []
})
export class HomePageModule {}
