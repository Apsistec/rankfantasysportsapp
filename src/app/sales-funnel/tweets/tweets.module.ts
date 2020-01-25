import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../_shared/shared.module';
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
export class TweetsPageModule {}
