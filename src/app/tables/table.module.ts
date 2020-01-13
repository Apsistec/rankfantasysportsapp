import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
// import { TennisComponent } from './tennis/tennis.component';
// import { PgaComponent } from './pga/pga.component';
// import { NflComponent } from './nfl/nfl.component';
// import { NbaComponent } from './nba/nba.component';
// import { NowComponent } from './now/now.component';
// import { CfbComponent } from './cfb/cfb.component';
import { GridBasicComponent } from './grid-basic/grid-basic.component';
import { TableDisplayComponent } from './table-display/table-display.component';
import { TableListComponent } from './table-list.component';
import { TableDetailComponent } from '../tables/table-detail/table-detail.component';
import { TableResolver } from '../_services/table-resolver.service';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { AngularSlickgridModule } from 'angular-slickgrid';

const routes: Routes = [
  {
    path: '',
    component: TableListComponent
  },
  {
    path: ':id',
    component: TableDetailComponent,
    resolve: { resolvedData: TableResolver }
  },

]

@NgModule({
  declarations: [
    TableDetailComponent,
    DialogBoxComponent,
    TableListComponent,
    // TennisComponent,
    // PgaComponent,
    // NflComponent,
    // NbaComponent,
    // NowComponent,
    // CfbComponent,
    GridBasicComponent,
    TableDisplayComponent
  ],
  entryComponents: [DialogBoxComponent],
  imports: [
    CommonModule,
    AngularSlickgridModule.forRoot(),
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TableModule {}
