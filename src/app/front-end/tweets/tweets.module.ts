import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

import { IonicModule } from '@ionic/angular';

import { TweetsPage } from './tweets.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TweetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxTwitterTimelineModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [TweetsPage]
})
export class TweetsPageModule {}
