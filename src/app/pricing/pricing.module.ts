import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { PricingPage } from './pricing.page';

const routes: Routes = [
  {
    path: '',
    component: PricingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PricingPage
  ],
  entryComponents: [
  ]
})
export class PricingPageModule {}
