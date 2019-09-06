import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Table1Component } from './tennis/table1/table1.component';
import { Table2Component } from './tennis/table2/table2.component';
import { Table3Component } from './tennis/table3/table3.component';
import { Table4Component } from './tennis/table4/table4.component';
import { Table5Component } from './nba/table5/table5.component';
import { Table6Component } from './nba/table6/table6.component';
import { Table7Component } from './nba/table7/table7.component';
import { Table8Component } from './now/table8/table8.component';
import { Table9Component } from './now/table9/table9.component';
import { PgaThisWeekComponent } from './pga/pga-this-week/pga-this-week.component';
import { PgaStatsComponent } from './pga/pga-stats/pga-stats.component';
import { NflPreComponent } from './nfl/nfl-pre/nfl-pre.component';
import { ScorePredictionsComponent } from './cfb/score-predictions/score-predictions.component';
import { PowerRankingsComponent } from '../list/cfb/power-rankings/power-rankings.component';
import { ListPage } from './list.page';
import { SharedModule } from './../shared/shared.module';
import { ListAppRoutingModule } from './list-app.routing.module';
import { NflWeekComponent } from './nfl/nfl-week/nfl-week.component';
import { NflScoreComponent } from './nfl/nfl-score/nfl-score.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ListAppRoutingModule
  ],
  declarations: [
    ListPage,
    PgaStatsComponent,
    PowerRankingsComponent,
    ScorePredictionsComponent,
    PgaThisWeekComponent,
    NflPreComponent,
    NflWeekComponent,
    NflScoreComponent,
    ListPage,
    Table1Component,
    Table2Component,
    Table3Component,
    Table4Component,
    Table5Component,
    Table6Component,
    Table7Component,
    Table8Component,
    Table9Component
  ],
  providers: [],
  exports: [
  ]
})
export class ListPageModule {}
