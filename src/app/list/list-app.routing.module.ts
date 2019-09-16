import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Table1Component } from '../list/tennis/table1/table1.component';
import { Table2Component } from '../list/tennis/table2/table2.component';
import { Table3Component } from '../list/tennis/table3/table3.component';
import { Table4Component } from '../list/tennis/table4/table4.component';
import { Table5Component } from '../list/nba/table5/table5.component';
import { Table6Component } from '../list/nba/table6/table6.component';
import { Table7Component } from '../list/nba/table7/table7.component';
import { Table8Component } from '../list/now/table8/table8.component';
import { Table9Component } from '../list/now/table9/table9.component';
import { PgaThisWeekComponent } from '../list/pga/pga-this-week/pga-this-week.component';
import { PgaStatsComponent } from '../list/pga/pga-stats/pga-stats.component';
import { NflPreComponent } from '../list/nfl/nfl-pre/nfl-pre.component';
import { PaidGuard } from '../core/guard/paid.guard';
import { ScorePredictionsComponent } from '../list/cfb/score-predictions/score-predictions.component';
import { PowerRankingsComponent } from '../list/cfb/power-rankings/power-rankings.component';
import { ListPage } from './list.page';
import { NflWeekComponent } from './nfl/nfl-week/nfl-week.component';
import { NflScoreComponent } from './nfl/nfl-score/nfl-score.component';

const routes: Routes = [
    {
        path: '',
        component: ListPage,
        children: [
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            {
                path: 'admin',
                loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardPageModule',
                data: {
                    role: 'ADMIN'
                }
            },
            { path: 'categories', loadChildren: './sports-categories/sports-categories.module#SportsCategoriesPageModule' },
            { path: 'tennis', loadChildren: './tennis/tennis.module#TennisPageModule' },
            { path: 'nfl', loadChildren: './nfl/nfl.module#NflPageModule' },
            { path: 'fifa', loadChildren: './fifa/fifa.module#FifaPageModule' },
            { path: 'nba', loadChildren: './nba/nba.module#NbaPageModule' },
            { path: 'pga', loadChildren: './pga/pga.module#PgaPageModule' },
            { path: 'now', loadChildren: './now/now.module#NowPageModule' },
            { path: 'cfb', loadChildren: './cfb/cfb.module#CfbPageModule' },
            {
                path: 'men-ten-rate',
                component: Table1Component, canActivate: [PaidGuard]
            },
            {
                path: 'women-ten-rate',
                component: Table2Component, canActivate: [PaidGuard]
            },
            {
                path: 'men-ten-tourny',
                component: Table3Component, canActivate: [PaidGuard]
            },
            {
                path: 'women-ten-tourny',
                component: Table4Component, canActivate: [PaidGuard]
            },
            {
                path: 'nba-dk',
                component: Table5Component, canActivate: [PaidGuard]
            },
            {
                path: 'nba-power-rank',
                component: Table6Component, canActivate: [PaidGuard]
            },
            {
                path: 'nba-play-pred',
                component: Table7Component, canActivate: [PaidGuard]
            },
            {
                path: 'today-val',
                component: Table8Component, canActivate: [PaidGuard]
            },
            {
                path: 'dk-acct',
                component: Table9Component, canActivate: [PaidGuard]
            },
            {
                path: 'pga-this-week',
                component: PgaThisWeekComponent, canActivate: [PaidGuard]
            },
            {
                path: 'pga-stats',
                component: PgaStatsComponent, canActivate: [PaidGuard]
            },
            {
                path: 'nfl-pre',
                component: NflPreComponent, canActivate: [PaidGuard]
            },
            {
                path: 'nfl-week',
                component: NflWeekComponent, canActivate: [PaidGuard]
            },
            {
                path: 'nfl-score',
                component: NflScoreComponent, canActivate: [PaidGuard]
            },
            {
                path: 'power-rankings',
                component: PowerRankingsComponent, canActivate: [PaidGuard]
            },
            {
                path: 'score-predictions',
                component: ScorePredictionsComponent, canActivate: [PaidGuard]
            },
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ListAppRoutingModule { }
