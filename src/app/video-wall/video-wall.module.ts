import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { VideoWallPage } from './video-wall.page';
import { TeaserComponent } from '../teaser/teaser.component';

const routes: Routes = [
  {
    path: '',
    component: VideoWallPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    VideoWallPage,
    TeaserComponent,
  ],
  exports: [
    TeaserComponent
  ]
})
export class VideoWallPageModule {}
