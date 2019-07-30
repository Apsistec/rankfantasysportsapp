import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumHomeComponent } from './forum-home.component';
import { ForumHomeAuthResolver } from './forum-home-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ForumHomeComponent,
    resolve: {
      isAuthenticated: ForumHomeAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumHomeRoutingModule {}
