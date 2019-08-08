import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatsPage } from './stats.page';
import { GolfComponent } from './golf/golf.component';
import { TennisComponent } from './tennis/tennis.component';
import { SoccerComponent } from './soccer/soccer.component';
import { SharedModule } from './../shared/shared.module';
import { StatsListComponent } from './stats-list/stats-list.component';

const statsRoutes: Routes = [
  {
    path: '',
    component: StatsPage,
    children: [
      {
        path: '',
        component: StatsListComponent
      }
    ]
  },
  { path: 'golf', component: GolfComponent },
  { path: 'soccer', component: SoccerComponent },
  { path: 'tennis', component: TennisComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(statsRoutes),
  ],
  declarations: [
    StatsListComponent,
    StatsPage,
    GolfComponent,
    TennisComponent,
    SoccerComponent
  ]
})
export class StatsPageModule {}
