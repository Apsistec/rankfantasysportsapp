import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { HomePage } from './home.page';
import { SharedModule } from '../../shared/shared.module';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxTwitterTimelineModule,
    IonicModule,
    RouterModule.forChild(homeRoutes),
    SharedModule
  ],
  declarations: [HomePage],
  exports: [NgxTwitterTimelineModule]
})
export class HomePageModule {}
