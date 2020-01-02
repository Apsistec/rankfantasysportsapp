import { AdminGuard } from '@guards/admin.guard';
import { AuthGuard } from '@guards/auth.guard';
import { InnerRoutesGuard } from '@guards/inner-routes.guard';
import { NgModule } from '@angular/core';
import { PaidMemberGuard } from '@guards/paid-member.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PreventBuyGuard } from '@guards/prevent-buy.guard';
import { SportsCategoriesDetailComponent } from './sports-categories/sports-categories-detail/sports-categories-detail.component';
import { SportsTablesComponent } from './sports-categories/sports-tables/sports-tables.component';

const appRoutes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'how-to', loadChildren: () => import('./how-to/how-to.module').then(m => m.HowToPageModule) },
  {
    path: 'free-trial',
    loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchasePageModule)
  },
  { path: 'freetrial', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'free', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'freetrail', redirectTo: 'free-trial', pathMatch: 'full' },
  {
    path: 'pricing',
    loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingPageModule)
  },
  { path: 'prices', redirectTo: 'pricing', pathMatch: 'full' },
  { path: 'price', redirectTo: 'pricing', pathMatch: 'full' },
  {
    path: 'credibility',
    loadChildren: () => import('./testimonials/testimonials.module').then(m => m.TestimonialsPageModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchasePageModule),
    canActivate: [PreventBuyGuard]
  },
  { path: 'buy', redirectTo: 'purchase', pathMatch: 'full' },
  { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqPageModule) },
  {
    path: 'welcome',
    loadChildren: () => import('./auth/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule),
    canActivate: [InnerRoutesGuard]
  },
  { path: 'sign-in', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule),
    canActivate: [InnerRoutesGuard]
  },
  {
    path: 'forgot',
    loadChildren: () => import(
      './auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule),
    canActivate: [InnerRoutesGuard]
  },
  { path: 'reset-password', redirectTo: 'forgot', pathMatch: 'full' },
  {
    path: 'verify',
    loadChildren: () => import(
      './auth/verify-email/verify-email.module').then(m => m.VerifyEmailPageModule)
  },
  // { path: 'settings', loadChildren: () => import( './auth/settings/settings.module#SettingsPageModule', canActivate: [AuthGuard] },
  {
    path: 'profile',
    loadChildren: () => import('./auth/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import(
      './auth/user-tickets/user-tickets.module').then(m => m.UserTicketsPageModule),
    canActivate: [AdminGuard],
    data: { role: 'USER' }
  },
  {
    path: 'admin',
    loadChildren: () => import(
      './auth/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule),
    canActivate: [AdminGuard],
    data: { role: 'ADMIN' }
  },
  { path: 'tweets', loadChildren: () => import('./tweets/tweets.module').then(m => m.TweetsPageModule) },
  {
    path: 'categories',
    loadChildren: () => import(
      './sports-categories/sports-categories.module').then(m => m.SportsCategoriesPageModule),
    canActivate: [AuthGuard]
  },
  { path: 'categories/:id', component: SportsCategoriesDetailComponent },
  {
    path: 'tables/:id',
    component: SportsTablesComponent,
    canActivate: [PaidMemberGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      // enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
