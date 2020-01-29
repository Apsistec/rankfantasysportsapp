import { CbbComponent } from './cbb/cbb.component';
import { CfbComponent } from './cfb/cfb.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
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
import { ScorePredictionsComponent } from './cfb/score-predictions/score-predictions.component';
import { SharedModule } from '../_shared/shared.module';
import { Table5Component } from './nba/table5/table5.component';
import { Table6Component } from './nba/table6/table6.component';
import { Table7Component } from './nba/table7/table7.component';
import { Table8Component } from './now/table8/table8.component';
import { Table9Component } from './now/table9/table9.component';
import { TableDetailComponent } from '../tables/table-detail/table-detail.component';
import { TableListComponent } from './table-list.component';
import { TablePage } from './table.page';
import { TableRoutingModule } from './table-routing.module';
// import { TennisComponent } from './tennis/tennis.component';
import { WhcbarComponent } from './tennis/whcbar/whcbar.component';
import { WtrdsComponent } from './tennis/wtrds/wtrds.component';
import { WttsaComponent } from './tennis/wttsa/wttsa.component';

@NgModule({
  declarations: [
    NflWeekComponent,
    NflScoreComponent,
    NflPreComponent,
    ScorePredictionsComponent,
    PowerRankingsComponent,
    PgaThisWeekComponent,
    PgaStatsComponent,
    Table5Component,
    Table6Component,
    Table7Component,
    Table8Component,
    Table9Component,
    TableDetailComponent,
    TableListComponent,
    TablePage,
    MtrdsComponent,
    WtrdsComponent,
    MttsaComponent,
    WttsaComponent,
    WhcbarComponent,
    MhcbarComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    HttpClientModule,
    TableRoutingModule
  ],
  exports: []
})
export class TableModule {}
