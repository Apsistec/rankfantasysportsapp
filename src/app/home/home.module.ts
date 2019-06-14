import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { IonicModule } from '@ionic/angular';
import { HomePage} from './home.page';
// import { HttpClientModule } from '@angular/common/http';
// import { from } from 'rxjs';
// import { TestimonialsPage } from './testimonials/testimonials.page';
// import { TweetsPage } from './tweets/tweets.page';
// import { TestimonialsPage } from './testimonials/testimonials.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    // children: [
    //   {
    //     path: 'testimonials',
    //     loadChildren: './testimonials/testimonials.module#TestimonialsPageModule'
    //   },
    //   {
    //     path: 'tweets',
    //     loadChildren: './tweets/tweets.module#TweetsPageModule'
    //   }
    // ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxTwitterTimelineModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
