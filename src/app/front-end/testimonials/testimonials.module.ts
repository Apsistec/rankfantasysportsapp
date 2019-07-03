import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TestimonialsPage } from './testimonials.page';
// import {
//   SwiperModule, SwiperConfigInterface,
//   SWIPER_CONFIG
// } from 'ngx-swiper-wrapper';

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   observer: true,
//   direction: 'horizontal',
//   threshold: 50,
//   spaceBetween: 5,
//   slidesPerView: 1,
//   centeredSlides: true
// };


const routes: Routes = [
  {
    path: '',
    component: TestimonialsPage
  }
];

@NgModule({
  imports: [
    // SwiperModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestimonialsPage],
  entryComponents: [],
  // providers: [
  //   {
  //     provide: SWIPER_CONFIG,
  //     useValue: DEFAULT_SWIPER_CONFIG
  //   }
  // ]
})
export class TestimonialsPageModule {}
