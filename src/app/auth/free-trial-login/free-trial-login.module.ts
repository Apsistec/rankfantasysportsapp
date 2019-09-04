import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { FreeTrialLoginPage } from './free-trial-login.page';

const routes: Routes = [
  {
    path: '',
    component: FreeTrialLoginPage
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
  declarations: [FreeTrialLoginPage]
})
export class FreeTrialLoginPageModule {}
