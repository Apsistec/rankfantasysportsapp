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
import { AuthGuard } from '@guards/auth.guard';
import { PaidGuard } from '@guards/paid.guard';


// import { PaidGuard } from '../core/guard/paid.guard';

const routes: Routes = [
  {
    path: '',
    component: TablePage,
    children: [
      { path: '', component: TableListComponent, canActivate: [AuthGuard, PaidGuard], },
      { path: 'list', component: TableListComponent, canActivate: [AuthGuard, PaidGuard], },
      { path: 'tennis', component: TennisComponent, canActivate: [AuthGuard, PaidGuard], },
      { path: 'nfl', component: NflComponent, canActivate: [AuthGuard, PaidGuard], },
      { path: 'nba', component: NbaComponent, canActivate: [AuthGuard, PaidGuard], },
      { path: 'pga', component: PgaComponent, canActivate: [AuthGuard, PaidGuard], },
      { path: 'now', component: NowComponent, canActivate: [AuthGuard, PaidGuard], },
      { path: 'cfb', component: CfbComponent, canActivate: [AuthGuard, PaidGuard], },
      { path: 'cbb', component: CbbComponent, canActivate: [AuthGuard, PaidGuard], },
      { path: 'detail', component: TableDetailComponent, canActivate: [AuthGuard, PaidGuard], },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
