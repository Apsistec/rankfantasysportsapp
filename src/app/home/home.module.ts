import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { IonicModule } from '@ionic/angular';
// import { HttpClientModule } from '@angular/common/http';
import { HomePage} from './home.page';
import { from } from 'rxjs';
import { TestimonialsPage } from './testimonials/testimonials.page';
import { TweetsPage } from './tweets/tweets.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'testimonials',
    component: TestimonialsPage
  },
  {
    path: 'tweets',
    component: TweetsPage
  }
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
