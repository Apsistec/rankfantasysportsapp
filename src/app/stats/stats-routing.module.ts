import { NgModule } from '@angular/core';
import { StatsPage } from './stats.page';
import { Routes, RouterModule } from '@angular/router';
import { PlayerActiveDetailComponent } from './player-active-detail/player-active-detail.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: StatsPage,
    children: [
      { path: 'player-active-detail', component: PlayerActiveDetailComponent },
      { path: 'table', component: TestComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsPageRoutingModule {}
