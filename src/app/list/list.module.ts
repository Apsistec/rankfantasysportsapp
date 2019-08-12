import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
// import { FirstTableComponent } from '../tables/first-table/first-table.component';
// import { TestableComponent } from '../testable/testable.component';
// import { Table1Component } from '../tables/table1/table1.component';
// import { Table2Component } from '../tables/table2/table2.component';
// import { Table3Component } from '../tables/table3/table3.component';
// import { Table4Component } from '../tables/table4/table4.component';
// import { Table5Component } from '../tables/table5/table5.component';
// import { Table6Component } from '../tables/table6/table6.component';
// import { Table7Component } from '../tables/table7/table7.component';
// import { Table8Component } from '../tables/table8/table8.component';
// import { Table9Component } from '../tables/table9/table9.component';
import { ListPage } from './list.page';
import { AuthGuard } from '../core/guard/auth.guard';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListPage,
    // children: [

    //   {
    //     path: 'test',
    //     component: TestableComponent
    //   },
    //   {
    //     path: 'first',
    //     component: FirstTableComponent
    //   },
    //   {
    //     path: 'table1',
    //     component: Table1Component, canActivate: [AuthGuard]
    //   },
    //   {
    //     path: 'table2',
    //     component: Table2Component
    //   },
    //   {
    //     path: 'table3',
    //     component: Table3Component, canActivate: [AuthGuard]
    //   },
    //   {
    //     path: 'table4',
    //     component: Table4Component, canActivate: [AuthGuard]
    //   },
    //   {
    //     path: 'table5',
    //     component: Table5Component, canActivate: [AuthGuard]
    //   },
    //   {
    //     path: 'table6',
    //     component: Table6Component, canActivate: [AuthGuard]
    //   },
    //   {
    //     path: 'table7',
    //     component: Table7Component, canActivate: [AuthGuard]
    //   },
    //   {
    //     path: 'table8',
    //     component: Table8Component, canActivate: [AuthGuard]
    //   },
    //   {
    //     path: 'table9',
    //     component: Table9Component, canActivate: [AuthGuard]
    //   },
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ListPage,

  ],
  providers: [AuthGuard],
  exports: [
    // ListPage,
    // FirstTableComponent,
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
