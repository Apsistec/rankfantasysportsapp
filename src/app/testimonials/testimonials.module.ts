import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TestimonialsPage } from './testimonials.page';
import { SharedPageModule } from '../shared/shared.module';

const testiRoutes: Routes = [
  {
    path: '',
    component: TestimonialsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageModule,
    RouterModule.forChild(testiRoutes),
  ],
  declarations: [TestimonialsPage],
  entryComponents: []
})
export class TestimonialsPageModule {}
