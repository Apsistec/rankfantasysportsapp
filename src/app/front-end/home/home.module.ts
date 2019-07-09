import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { HomePage } from './home.page';
import { SharedModule } from '../../shared/shared.module';
// import { TestimonialsPageModule } from '../testimonials/testimonials.module';
// import { TweetsPageModule } from '../tweets/tweets.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
    // ,
    // children: [
    //   {
    //     path: 'testimonials',
    //     loadChildren: '../testimonials/testimonials.module#TestimonialsPageModule'
    //   },
    //   {
    //     path: 'tweets',
    //     loadChildren: '../tweets/tweets.module#TweetsPageModule'
    //   }
    // ],

  },
];

@NgModule({
  imports: [
    // TestimonialsPageModule,
    // TweetsPageModule,
    CommonModule,
    FormsModule,
    NgxTwitterTimelineModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
