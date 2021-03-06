import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LineupBuilderPage } from './lineup-builder.page';

const routes: Routes = [
  {
    path: '',
    component: LineupBuilderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineupBuilderPageRoutingModule {}
