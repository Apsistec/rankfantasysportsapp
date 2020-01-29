import { NgModule } from '@angular/core';
import { StatsPage } from './stats.page';
import { Routes, RouterModule } from '@angular/router';
import { PlayersActiveComponent } from './players-active/players-active.component';

const routes: Routes = [
  {
    path: '',
    component: StatsPage,
    children: [
      { path: 'active-players', component: PlayersActiveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsPageRoutingModule {}
