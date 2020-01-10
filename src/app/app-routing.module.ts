import {
  AngularFireAuthGuard,
  canActivate,
  hasCustomClaim,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { MemberGuard } from '@guards/Member.guard';
import { PaidMemberGuard } from '@guards/paid-member.guard';
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
  {
    path: 'how-to',
    loadChildren: () =>
      import('./how-to/how-to.module').then(m => m.HowToPageModule)
  },
  {
    path: 'free-trial',
    loadChildren: () =>
      import('./purchase/purchase.module').then(m => m.PurchasePageModule)
  },
  { path: 'freetrial', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'free', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'freetrail', redirectTo: 'free-trial', pathMatch: 'full' },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pricing/pricing.module').then(m => m.PricingPageModule)
  },
  { path: 'prices', redirectTo: 'pricing', pathMatch: 'full' },
  { path: 'price', redirectTo: 'pricing', pathMatch: 'full' },
  {
    path: 'credibility',
    loadChildren: () =>
      import('./testimonials/testimonials.module').then(
        m => m.TestimonialsPageModule
      )
  },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./purchase/purchase.module').then(m => m.PurchasePageModule)
  },
  { path: 'buy', redirectTo: 'purchase', pathMatch: 'full' },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./auth/welcome/welcome.module').then(m => m.WelcomePageModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then(m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToProfile)
  },
  { path: 'sign-in', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then(m => m.RegisterPageModule),
    ...canActivate(redirectLoggedInToProfile)
  },
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
      import('./auth/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./auth/user-tickets/user-tickets.module').then(
        m => m.UserTicketsPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { role: 'USER' }
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./auth/admin-dashboard/admin-dashboard.module').then(
        m => m.AdminDashboardPageModule
      ),
    data: { role: 'ADMIN' },
    ...canActivate(adminOnly)
  },
  {
    path: 'tweets',
    loadChildren: () =>
      import('./tweets/tweets.module').then(m => m.TweetsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./sports-categories/sports-categories.module').then(
        m => m.SportsCategoriesPageModule
      )
  },
  {
    path: 'categories/:id',
    component: SportsCategoriesDetailComponent,
    ...canActivate(belongsToCategories)
  },
  {
    path: 'tables/:id',
    component: SportsTablesComponent,
    ...canActivate(belongsToTables)
  },
  {
    path: 'table-display',
    component: TableDisplayComponent
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
