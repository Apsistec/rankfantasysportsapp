import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedPageModule } from '../shared/shared.module';
import { AuthStagePage } from './auth-stage.page';

export const routes: Routes = [
  { path: '',
    component: AuthStagePage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthStagePage
  ]
})
export class AuthStagePageModule {}
