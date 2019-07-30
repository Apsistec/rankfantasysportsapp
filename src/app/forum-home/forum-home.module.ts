import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ForumHomeComponent } from './forum-home.component';
import { ForumHomeAuthResolver } from './forum-home-auth-resolver.service';
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
    ForumHomeAuthResolver
  ]
})
export class ForumHomeModule {}
