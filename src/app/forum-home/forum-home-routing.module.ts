import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumHomeComponent } from './forum-home.component';
import { AuthService } from '../core/services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: ForumHomeComponent,
    resolve: {
      isAuthenticated: AuthService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumHomeRoutingModule {}
