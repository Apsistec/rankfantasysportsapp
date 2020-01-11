import {
  AngularFireAuthGuard,
  canActivate,
  hasCustomClaim,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
// import { MemberGuard } from '../../../Member.guard';
// import { PaidMemberGuard } from '../../../paid-member.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SportsCategoriesDetailComponent } from './sports-categories/sports-categories-detail/sports-categories-detail.component';
import { SportsTablesComponent } from './sports-categories/sports-tables/sports-tables.component';
import { TableDisplayComponent } from './table-display/table-display.component';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['items']);
const belongsToTables = next => hasCustomClaim(`account-${next.params.id}`);
const belongsToCategories = next => hasCustomClaim(`account-${next.params.id}`);

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'corrected',
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
