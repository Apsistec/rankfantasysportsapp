import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataTablePageRoutingModule } from './data-table-routing.module';

import { DataTablePage } from './data-table.page';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataTablePageRoutingModule,
    MaterialModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [DataTablePage]
})
export class DataTablePageModule {}
