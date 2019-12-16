import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedPageModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { NflPage } from './nfl.page';
// import { NflPreComponent } from './nfl-pre/nfl-pre.component';
// import { NflScoreComponent } from './nfl-score/nfl-score.component';
// import { NflWeekComponent } from './nfl-week/nfl-week.component';
import { PaidGuard } from '../../core/guards/paid.guard';

const routes: Routes = [
  {
    path: '',
    component: NflPage,
    // children: [
    //   { path: 'nfl-pre', component: NflPreComponent, canActivate: [PaidGuard] },
    //   { path: 'nfl-score', component: NflScoreComponent, canActivate: [PaidGuard] },
    //   { path: 'nfl-week', component: NflWeekComponent, canActivate: [PaidGuard] }
    // ]
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
    NflPage,
    // NflPreComponent,
    // NflScoreComponent,
    // NflWeekComponent
  ],
  exports: [
    // RouterModule
  ]
})
export class NflPageModule {}
