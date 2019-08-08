import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { TweetsPage } from './tweets.page';

const routes: Routes = [
  {
    path: '',
    component: TweetsPage
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
  declarations: [TweetsPage]
})
export class TweetsPageModule { }
