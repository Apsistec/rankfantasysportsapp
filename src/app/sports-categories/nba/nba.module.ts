import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedPageModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { NbaPage } from './nba.page';
// import { Table5Component } from './table5/table5.component';
// import { Table6Component } from './table6/table6.component';
// import { Table7Component } from './table7/table7.component';
// import { DkleadersComponent } from './dkleaders/dkleaders.component';

const nbaRoutes: Routes = [
  {
    path: '',
    component: NbaPage,
    // children: [
    //   { path: 'dkleaders', component: DkleadersComponent },
    //   { path: 'dk-rankings', component: Table5Component  },
    //   { path: 'power-rankings', component: Table6Component  },
    //   { path: 'team-predictions', component: Table7Component  }
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    SharedPageModule,
    RouterModule.forChild(nbaRoutes),
  ],
  declarations: [
    NbaPage,
    // DkleadersComponent,
    // Table5Component,
    // Table6Component,
    // Table7Component
  ],
  exports: [
    // RouterModule
  ]
})
export class NbaPageModule {}
