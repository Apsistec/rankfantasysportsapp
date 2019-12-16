import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedPageModule } from '../shared/shared.module';

import { HowToPage } from './how-to.page';

const routes: Routes = [
  {
    path: '',
    component: HowToPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HowToPage]
})
export class HowToPageModule {}
