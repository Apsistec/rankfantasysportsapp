import { CommonModule } from '@angular/common';
import { FaqPage } from './faq.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatExpansionModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../_shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FaqPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MatExpansionModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaqPage],
  entryComponents: []
})
export class FaqPageModule {}
