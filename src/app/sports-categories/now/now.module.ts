import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { SharedPageModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
// import { Table8Component } from './table8/table8.component';
// import { Table9Component } from './table9/table9.component';

import { NowPage } from './now.page';

const routes: Routes = [
  {
    path: '',
    component: NowPage,
    // children: [
    //   { path: 'todays-value', component: Table8Component },
    //   { path: 'dk-accounting', component: Table9Component }
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedPageModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NowPage,
    // Table8Component,
    // Table9Component
  ],
  exports: [
    // RouterModule
  ]
})
export class NowPageModule {}
