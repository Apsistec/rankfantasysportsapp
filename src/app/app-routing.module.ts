import {
  AngularFireAuthGuard,
  canActivate,
  hasCustomClaim,
  redirectLoggedInTo,
  redirectUnauthorizedTo
  } from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { PaidMemberGuard } from '@guards/paid-member.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['items']);
const belongsToTables = next => hasCustomClaim(`account-${next.params.id}`);
const belongsToCategories = next => hasCustomClaim(`account-${next.params.id}`);

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'tables',
    loadChildren: () => import('./tables/table.module').then(m => m.TableModule)
  },

  {
    path: 'lineup-builder',
    loadChildren: () =>
      import('./lineup-builder/lineup-builder.module').then(
        m => m.LineupBuilderPageModule
      )
  },

  {
    path: 'how-to',
    loadChildren: () =>
      import('./how-to/how-to.module').then(m => m.HowToPageModule)
  },

  {
    path: 'membership',
    loadChildren: () =>
    import('./membership/membership.module').then(m => m.MembershipPageModule)
  },
  { path: 'buy', redirectTo: 'purchase', pathMatch: 'full' },
  {
    path: 'faq',
    loadChildren: () =>
      import('./faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./profile/settings/user-tickets/user-tickets.module').then(
        m => m.UserTicketsPageModule
      ),
    // canActivate: [AngularFireAuthGuard],
    data: { role: 'USER' }
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./profile/admin-dashboard/admin-dashboard.module').then(
        m => m.AdminDashboardPageModule
      ),
    data: { role: 'ADMIN' }
    // ...canActivate(adminOnly)
  },
  {
    path: 'tweets',
    loadChildren: () =>
      import('./tweets/tweets.module').then(
        m => m.TweetsPageModule
      )
  },

  {
    path: 'testimonials',
    loadChildren: () =>
      import('./testimonials/testimonials.module').then(
        m => m.TestimonialsPageModule
      )
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfilePageModule),
  },

  {
    path: 'stats',
    loadChildren: () =>
      import('./stats/stats.module').then(m => m.StatsPageModule)
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      // initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules
      // relativeLinkResolution: 'corrected',
      // onSameUrlNavigation: 'reload',
      // enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
