import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../_shared/shared.module';
import { TestimonialsPage } from './testimonials.page';

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
    SharedModule,
    RouterModule.forChild(testiRoutes)
  ],
  declarations: [TestimonialsPage],
  entryComponents: []
})
export class TestimonialsPageModule {}
