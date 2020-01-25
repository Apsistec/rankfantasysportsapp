import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../_shared/shared.module';
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
