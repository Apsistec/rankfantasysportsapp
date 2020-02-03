import { EndorsementsComponent } from './endorsements/endorsements.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices/devices.component';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';

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
    AboutComponent,
    EndorsementsComponent,
    DevicesComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ ]
})
export class HomePageModule {}
