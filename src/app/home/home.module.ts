import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { TimelineComponent } from '../timeline/timeline.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { InformaComponent } from 'app/informa/informa.component';
import { DevicesComponent } from 'app/devices/devices.component';
import { PhonetestComponent } from 'app/phonetest/phonetest.component';
import { IconRowComponent } from 'app/icon-row/icon-row.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePage,
    TimelineComponent,
    LandingPageComponent,
    InformaComponent,
    PhonetestComponent,
    IconRowComponent,
    DevicesComponent,
  ],
  exports: []
})
export class HomePageModule { }
