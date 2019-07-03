import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Table1Component } from '../table1/table1.component';
import { Table2Component } from '../table2/table2.component';
import { Table3Component } from '../table3/table3.component';
import { Table4Component } from '../table4/table4.component';
import { Table5Component } from '../table5/table5.component';
import { Table6Component } from '../table6/table6.component';
import { Table7Component } from '../table7/table7.component';
import { Table8Component } from '../table8/table8.component';
import { Table9Component } from '../table9/table9.component';
import { ListPage } from './list.page';
import { AuthGuard } from '../../core/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  {
    path: 'table1',
     component: Table1Component, canActivate: [AuthGuard]
  },
  {
    path: 'table2',
     component: Table2Component, canActivate: [AuthGuard]
  },
  {
    path: 'table3',
     component: Table3Component, canActivate: [AuthGuard]
  },
  {
    path: 'table4',
     component: Table4Component, canActivate: [AuthGuard]
  },
  {
    path: 'table5',
     component: Table5Component, canActivate: [AuthGuard]
  },
  {
    path: 'table6',
     component: Table6Component, canActivate: [AuthGuard]
  },
  {
    path: 'table7',
     component: Table7Component, canActivate: [AuthGuard]
  },
  {
    path: 'table8',
     component: Table8Component, canActivate: [AuthGuard]
  },
  {
    path: 'table9',
     component: Table9Component, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ListPage,
    Table1Component,
    Table2Component,
    Table3Component,
    Table4Component,
    Table5Component,
    Table6Component,
    Table7Component,
    Table8Component,
    Table9Component,
  ],
  providers: [AuthGuard],
  exports: [
    // ListPage,
    // Table1Component,
    // Table2Component,
    // Table3Component,
    // Table4Component,
    // Table5Component,
    // Table6Component,
    // Table7Component,
    // Table8Component,
    // Table9Component
  ]
})
export class ListPageModule {}