import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedPageModule } from '../../shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { PgaPage } from './pga.page';

const routes: Routes = [
  {
    path: '',
    component: PgaPage,
    // children: [
    //   { path: 'pga-stats', component: PgaStatsComponent },
    //   { path: 'pga-this-week', component: PgaThisWeekComponent },
    // ]
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
  declarations: [
    PgaPage,
    // PgaStatsComponent,
    // PgaThisWeekComponent
  ],
  exports: [
    // RouterModule
  ]
})
export class PgaPageModule {}
