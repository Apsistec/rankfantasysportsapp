import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CfbPage } from './cfb.page';
import { SharedModule } from '../../shared/shared.module';
import { ScorePredictionsComponent } from './score-predictions/score-predictions.component';
import { PowerRankingsComponent } from './power-rankings/power-rankings.component';
import { PaidGuard } from '../../core/guard/paid.guard';

const routes: Routes = [
  {
    path: '',
    component: CfbPage,
      // children:
      // [
      //   {
      //     path: 'power-rankings',
      //     component: PowerRankingsComponent, canActivate: [PaidGuard],
      //     children: [
      //       {
      //         path: '', redirectTo: '/cfb/power-rankings', pathMatch: 'full'
      //     }
      //     ]
      //   },
      //   {
      //     path: 'score-predictions',
      //     component: ScorePredictionsComponent, canActivate: [PaidGuard]
      //   },
      // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    // ScorePredictionsComponent,
    // PowerRankingsComponent,
    CfbPage
  ]
})
export class CfbPageModule {}
