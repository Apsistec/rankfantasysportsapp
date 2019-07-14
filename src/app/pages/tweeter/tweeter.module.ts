import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { TweeterPage } from './tweeter.page';

const routes: Routes = [
  {
    path: '',
    component: TweeterPage
  }
];

@NgModule({
  imports: [
    NgxTwitterTimelineModule,
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TweeterPage]
})
export class TweeterPageModule {}
