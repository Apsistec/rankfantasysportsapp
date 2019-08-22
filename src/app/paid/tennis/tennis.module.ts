import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { TennisPage } from './tennis.page';

const routes: Routes = [
  {
    path: '',
    component: TennisPage
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
  declarations: [TennisPage]
})
export class TennisPageModule {}
