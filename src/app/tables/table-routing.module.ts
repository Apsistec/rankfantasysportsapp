import { CfbComponent } from './cfb/cfb.component';
import { MhcbarComponent } from './tennis/mhcbar/mhcbar.component';
import { MtrdsComponent } from './tennis/mtrds/mtrds.component';
import { MttsaComponent } from './tennis/mttsa/mttsa.component';
import { NbaComponent } from './nba/nba.component';
import { NflComponent } from './nfl/nfl.component';
import { NflPreComponent } from './nfl/nfl-pre/nfl-pre.component';
import { NflScoreComponent } from './nfl/nfl-score/nfl-score.component';
import { NflWeekComponent } from './nfl/nfl-week/nfl-week.component';
import { NgModule } from '@angular/core';
import { NowComponent } from './now/now.component';
import { PgaComponent } from './pga/pga.component';
import { PgaStatsComponent } from './pga/pga-stats/pga-stats.component';
import { PgaThisWeekComponent } from './pga/pga-this-week/pga-this-week.component';
import { PowerRankingsComponent } from './cfb/power-rankings/power-rankings.component';
import { RouterModule, Routes } from '@angular/router';
import { ScorePredictionsComponent } from './cfb/score-predictions/score-predictions.component';
import { Table5Component } from './nba/table5/table5.component';
import { Table6Component } from './nba/table6/table6.component';
import { Table7Component } from './nba/table7/table7.component';
import { Table8Component } from './now/table8/table8.component';
import { Table9Component } from './now/table9/table9.component';
import { TableListComponent } from './table-list/table-list.component';
import { TennisComponent } from './tennis/tennis.component';
import { WhcbarComponent } from './tennis/whcbar/whcbar.component';
import { WtrdsComponent } from './tennis/wtrds/wtrds.component';
import { WttsaComponent } from './tennis/wttsa/wttsa.component';
import { TablePage } from './table.page';

// import { PaidGuard } from '../core/guard/paid.guard';

const routes: Routes = [
  {
    path: '',
    component: TablePage,
    children: [
      // { path: '', redirectTo: 'tables', pathMatch: 'full' },
      { path: 'table-list', component: TableListComponent },
      { path: 'tennis', component: TennisComponent },
      { path: 'nfl', component: NflComponent },
      { path: 'nba', component: NbaComponent },
      { path: 'pga', component: PgaComponent },
      { path: 'now', component: NowComponent },
      { path: 'cfb', component: CfbComponent },
      {
        path: 'mhcbar',
        component: MhcbarComponent // canActivate: [PaidGuard]
      },
      {
        path: 'mtrds',
        component: MtrdsComponent // canActivate: [PaidGuard]
      },
      {
        path: 'mttsa',
        component: MttsaComponent // canActivate: [PaidGuard]
      },
      {
        path: 'whcbar',
        component: WhcbarComponent // canActivate: [PaidGuard]
      },
      {
        path: 'wtrds',
        component: WtrdsComponent // canActivate: [PaidGuard]
      },
      {
        path: 'wttsa',
        component: WttsaComponent // canActivate: [PaidGuard]
      },
      {
        path: 'nba-dk',
        component: Table5Component // canActivate: [PaidGuard]
      },
      {
        path: 'nba-power-rank',
        component: Table6Component // canActivate: [PaidGuard]
      },
      {
        path: 'nba-play-pred',
        component: Table7Component // canActivate: [PaidGuard]
      },
      {
        path: 'today-val',
        component: Table8Component // canActivate: [PaidGuard]
      },
      {
        path: 'dk-acct',
        component: Table9Component // canActivate: [PaidGuard]
      },
      {
        path: 'pga-this-week',
        component: PgaThisWeekComponent // canActivate: [PaidGuard]
      },
      {
        path: 'pga-stats',
        component: PgaStatsComponent // canActivate: [PaidGuard]
      },
      {
        path: 'nfl-pre',
        component: NflPreComponent // canActivate: [PaidGuard]
      },
      {
        path: 'nfl-week',
        component: NflWeekComponent // canActivate: [PaidGuard]
      },
      {
        path: 'nfl-score',
        component: NflScoreComponent // canActivate: [PaidGuard]
      },
      {
        path: 'power-rankings',
        component: PowerRankingsComponent // canActivate: [PaidGuard]
      },
      {
        path: 'score-predictions',
        component: ScorePredictionsComponent // canActivate: [PaidGuard]
      }
    ]
  },
  {
    path: 'data-table',
    loadChildren: () => import('./data-table/data-table.module').then( m => m.DataTablePageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
