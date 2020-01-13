import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../_shared/shared.module';
import { WelcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
