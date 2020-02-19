import { NgModule } from '@angular/core';
import { PlayerActiveDetailComponent } from './player-active-detail/player-active-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { StatsPage } from './stats.page';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: StatsPage,
    children: [
      { path: 'player-active-detail', component: PlayerActiveDetailComponent },
      { path: 'test', component: TestComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsPageRoutingModule {}
