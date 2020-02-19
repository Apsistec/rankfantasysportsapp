import { CbbComponent } from './cbb/cbb.component';
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
import { TablePage } from './table.page';
import { TennisComponent } from './tennis/tennis.component';
import { WhcbarComponent } from './tennis/whcbar/whcbar.component';
import { WtrdsComponent } from './tennis/wtrds/wtrds.component';
import { WttsaComponent } from './tennis/wttsa/wttsa.component';

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
      { path: 'detail/:id, '}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
