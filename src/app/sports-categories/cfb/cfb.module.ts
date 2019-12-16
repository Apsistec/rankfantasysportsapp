import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CfbPage } from './cfb.page';
import { SharedPageModule } from '../../shared/shared.module';
// import { ScorePredictionsComponent } from './score-predictions/score-predictions.component';
// import { PowerRankingsComponent } from './power-rankings/power-rankings.component';
import { PaidGuard } from '../../core/guards/paid.guard';

const routes: Routes = [
  {
    path: '',
    component: CfbPage,
    //  children:
    //   [
    //     // { path: '', redirectTo: '/categories/cfb', pathMatch: 'full' },

    //     {
    //       path: 'power-rankings',
    //       component: PowerRankingsComponent, canActivate: [PaidGuard],
    //     },
    //     {
    //       path: 'score-predictions',
    //       component: ScorePredictionsComponent, canActivate: [PaidGuard],
    //     },
    //   ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    // ScorePredictionsComponent,
    // PowerRankingsComponent,
    CfbPage
  ],
  exports: [
    // RouterModule
  ]
})

export class CfbPageModule {}
