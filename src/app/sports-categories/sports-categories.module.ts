import { PaidGuard } from '@guards/paid.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { SportsCategoriesPage } from './sports-categories.page';
import { SportsCategoriesDetailComponent } from './sports-categories-detail/sports-categories-detail.component';
// import { PaidGuard } from '../core/guard/paid.guard';
// import { Table1Component } from '../sports-categories/tennis/table1/table1.component';
// import { Table2Component } from '../sports-categories/tennis/table2/table2.component';
// import { Table3Component } from '../sports-categories/tennis/table3/table3.component';
// import { Table4Component } from '../sports-categories/tennis/table4/table4.component';
// import { Table5Component } from '../sports-categories/nba/table5/table5.component';
// import { Table6Component } from '../sports-categories/nba/table6/table6.component';
// import { Table7Component } from '../sports-categories/nba/table7/table7.component';
// import { Table8Component } from '../sports-categories/now/table8/table8.component';
// import { Table9Component } from '../sports-categories/now/table9/table9.component';
// import { PgaThisWeekComponent } from '../sports-categories/pga/pga-this-week/pga-this-week.component';
// import { PgaStatsComponent } from '../sports-categories/pga/pga-stats/pga-stats.component';
// import { NflPreComponent } from '../sports-categories/nfl/nfl-pre/nfl-pre.component';
// import { ScorePredictionsComponent } from '../sports-categories/cfb/score-predictions/score-predictions.component';
// import { PowerRankingsComponent } from '../sports-categories/cfb/power-rankings/power-rankings.component';
// import { NflWeekComponent } from '../sports-categories/nfl/nfl-week/nfl-week.component';
// import { NflScoreComponent } from '../sports-categories/nfl/nfl-score/nfl-score.component';
// import { TennisPageModule } from '../sports-categories/tennis/tennis.module';
// import { NbaPageModule } from '../sports-categories/nba/nba.module';
// import { NowPageModule } from '../sports-categories/now/now.module';
// import { PgaPageModule } from '../sports-categories/pga/pga.module';
// import { NflPageModule } from '../sports-categories/nfl/nfl.module';
const sportsRoutes: Routes = [
  {
    path: 'categories',
    component: SportsCategoriesPage,
    children: [

      { path: '', redirectTo: '/categories', pathMatch: 'full' },
    //   { path: 'tennis', loadChildren: './tennis/tennis.module#TennisPageModule' },
    //   { path: 'now', loadChildren: './now/now.module#NowPageModule' },
    //   { path: 'pga', loadChildren: './pga/pga.module#PgaPageModule' },
    //   { path: 'cfb', loadChildren: './cfb/cfb.module#CfbPageModule' },
    //   { path: 'nfl', loadChildren: './nfl/nfl.module#NflPageModule' },
    //   { path: 'nba', loadChildren: './nba/nba.module#NbaPageModule' },
    //   {
    //     path: 'mens-ratings',
    //     component: Table1Component, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'womens-ratings',
    //     component: Table2Component, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'mens-tournament',
    //     component: Table3Component, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'womens-tournament',
    //     component: Table4Component, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'nba-dk',
    //     component: Table5Component, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'nba-power-rank',
    //     component: Table6Component, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'nba-play-pred',
    //     component: Table7Component, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'todays-value',
    //     component: Table8Component, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'dk-accounting',
    //     component: Table9Component, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'pga-this-week',
    //     component: PgaThisWeekComponent, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'pga-stats',
    //     component: PgaStatsComponent, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'nfl-pre',
    //     component: NflPreComponent, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'nfl-week',
    //     component: NflWeekComponent, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'nfl-score',
    //     component: NflScoreComponent, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'power-rankings',
    //     component: PowerRankingsComponent, canActivate: [PaidGuard]
    // },
    // {
    //     path: 'score-predictions',
    //     component: ScorePredictionsComponent, canActivate: [PaidGuard]
    // },
    ]

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(sportsRoutes)
  ],
  declarations: [
    SportsCategoriesPage,
    SportsCategoriesDetailComponent,
    // PgaStatsComponent,
    // PowerRankingsComponent,
    // ScorePredictionsComponent,
    // PgaThisWeekComponent,
    // NflPreComponent,
    // NflWeekComponent,
    // NflScoreComponent,
    // Table1Component,
    // Table2Component,
    // Table3Component,
    // Table4Component,
    // Table5Component,
    // Table6Component,
    // Table7Component,
    // Table8Component,
    // Table9Component
  ],
  exports: [
    SportsCategoriesPage
    // RouterModule
  ]
})
export class SportsCategoriesPageModule {}
