// import {
//   AngularFireAuthGuard,
//   canActivate,
//   hasCustomClaim,
//   redirectLoggedInTo,
//   redirectUnauthorizedTo
// } from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


// import { MemberGuard } from '../../../Member.guard';
// import { PaidMemberGuard } from '../../../paid-member.guard';

// const adminOnly = () => hasCustomClaim('admin');
// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
// const redirectLoggedInToProfile = () => redirectLoggedInTo(['items']);
// const belongsToTables = next => hasCustomClaim(`account-${next.params.id}`);
// const belongsToCategories = next => hasCustomClaim(`account-${next.params.id}`);

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tables',
    loadChildren: () => import('./tables/table.module').then(m => m.TableModule)
  },
    // {
    // path: 'slides',
    // loadChildren: () => import('./purchase/slides/slides.module').then(m => m.SlidesModule)
    // },
  {
    path: 'how-to',
    loadChildren: () =>
      import('./sales-funnel/how-to/how-to.module').then(m => m.HowToPageModule)
  },
  {
    path: 'free-trial',
    loadChildren: () =>
      import('./purchase/purchase.module').then(
        m => m.PurchasePageModule
      )
  },

  { path: 'freetrial', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'free', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'freetrail', redirectTo: 'free-trial', pathMatch: 'full' },

  {
    path: 'pricing',
    loadChildren: () =>
      import('./sales-funnel/pricing/pricing.module').then(
        m => m.PricingPageModule
      )
  },
  { path: 'prices', redirectTo: 'pricing', pathMatch: 'full' },
  { path: 'price', redirectTo: 'pricing', pathMatch: 'full' },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./purchase/purchase.module').then(
        m => m.PurchasePageModule
      )
  },
  { path: 'buy', redirectTo: 'purchase', pathMatch: 'full' },
  {
    path: 'faq',
    loadChildren: () =>
      import('./sales-funnel/faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./sales-funnel/welcome/welcome.module').then(
        m => m.WelcomePageModule
      ),
    // canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then(m => m.LoginPageModule)
    // ...canActivate(redirectLoggedInToProfile)
  },
  { path: 'sign-in', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'forgot',
    loadChildren: () =>
      import('./auth/forgot-password/forgot-password.module').then(
        m => m.ForgotPasswordPageModule
      )
  },
  { path: 'reset-password', redirectTo: 'forgot', pathMatch: 'full' },
  {
    path: 'verify',
    loadChildren: () =>
      import('./auth/verify-email/verify-email.module').then(
        m => m.VerifyEmailPageModule
      )
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfilePageModule),
    // canActivate: [AngularFireAuthGuard]
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
      import('./sales-funnel/tweets/tweets.module').then(
        m => m.TweetsPageModule
      )
  },
  {
    path: 'flip',
    loadChildren: () =>
      import('./flip/flip.module').then(
        m => m.FlipPageModule
      )
  },
  {
    path: 'testimonials',
    loadChildren: () =>
      import('./sales-funnel/testimonials/testimonials.module').then(
        m => m.TestimonialsPageModule
      )
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfilePageModule)
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
