import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ForumHomeComponent } from './forum-home.component';
import { SharedModule } from '../shared';
import { ForumHomeRoutingModule } from './forum-home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ForumHomeRoutingModule
  ],
  declarations: [
    ForumHomeComponent
  ],
  providers: [
  ]
})
export class ForumHomeModule {}
