import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { SharedPageModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePage,
  ],
  exports: []
})
export class HomePageModule { }
