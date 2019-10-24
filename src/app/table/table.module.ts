import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
// import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TablePage } from './table.page';

const routes: Routes = [
  {
    path: '',
    component: TablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    // AgGridModule.withComponents([]),
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablePage]
})
export class TablePageModule {}
