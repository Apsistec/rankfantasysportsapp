import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FaqPage } from './faq.page';
import { SharedModule } from '@shared/shared.module';
import { MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FaqPage,
  ],
  entryComponents: []
})
export class FaqPageModule {}
