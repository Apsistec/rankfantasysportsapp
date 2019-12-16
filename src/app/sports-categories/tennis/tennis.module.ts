import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedPageModule } from '../../shared/shared.module';

import { IonicModule } from '@ionic/angular';
import { TennisPage } from './tennis.page';
// import { Table1Component } from './table1/table1.component';
// import { Table2Component } from './table2/table2.component';
// import { Table3Component } from './table3/table3.component';
// import { Table4Component } from './table4/table4.component';

const routes: Routes = [
  {
    path: '',
    component: TennisPage,
    // children: [
    //   { path: 'mens-ratings', component: Table1Component },
    //   { path: 'womens-ratings', component: Table2Component },
    //   { path: 'mens-tournament', component: Table3Component },
    //   { path: 'womens-tournament', component: Table4Component },
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
    TennisPage,
    // Table1Component,
    // Table2Component,
    // Table3Component,
    // Table4Component
  ],
  exports: [
    // RouterModule
  ]
})
export class TennisPageModule {}
