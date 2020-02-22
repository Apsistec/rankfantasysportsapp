import { CbbComponent } from './cbb/cbb.component';
import { CfbComponent } from './cfb/cfb.component';
import { RouterModule, Routes } from '@angular/router';
import { TableListComponent } from './table-list.component';
import { TablePage } from './table.page';
import { TennisComponent } from './tennis/tennis.component';
import { NbaComponent } from './nba/nba.component';
import { NflComponent } from './nfl/nfl.component';
import { NgModule } from '@angular/core';
import { NowComponent } from './now/now.component';
import { PgaComponent } from './pga/pga.component';
import { TableDetailComponent } from './table-detail/table-detail.component';


// import { PaidGuard } from '../core/guard/paid.guard';

const routes: Routes = [
  {
    path: '',
    component: TablePage,
    children: [
      { path: '', component: TableListComponent },
      { path: 'list', component: TableListComponent },
      { path: 'tennis', component: TennisComponent },
      { path: 'nfl', component: NflComponent },
      { path: 'nba', component: NbaComponent },
      { path: 'pga', component: PgaComponent },
      { path: 'now', component: NowComponent },
      { path: 'cfb', component: CfbComponent },
      { path: 'cbb', component: CbbComponent },
      { path: 'detail', component: TableDetailComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
