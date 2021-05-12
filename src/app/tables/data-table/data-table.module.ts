import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../../material/material.module';
import { DataTablePageRoutingModule } from './data-table-routing.module';
import { DataTablePage } from './data-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataTablePageRoutingModule,
    MaterialModule
  ],
  declarations: [DataTablePage]
})
export class DataTablePageModule {}
