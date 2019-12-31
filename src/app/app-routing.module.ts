import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '@guards/admin.guard';
import { AuthGuard } from '@guards/auth.guard';
import { PaidGuard } from '@guards/paid.guard';
import { PreventBuyGuard } from '@guards/prevent-buy.guard';
import { SportsCategoriesDetailComponent } from './sports-categories/sports-categories-detail/sports-categories-detail.component';
import { SportsTablesComponent } from './sports-categories/sports-tables/sports-tables.component';
// import { InnerGuard } from '@guards/inner.guard';

const appRoutes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'how-to', loadChildren: './how-to/how-to.module#HowToPageModule' },
  {
    path: 'free-trial',
    loadChildren: './purchase/purchase.module#PurchasePageModule'
  },
  { path: 'freetrial', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'free', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'freetrail', redirectTo: 'free-trial', pathMatch: 'full' },
  {
    path: 'pricing',
    loadChildren: './pricing/pricing.module#PricingPageModule'
  },
  { path: 'prices', redirectTo: 'pricing', pathMatch: 'full' },
  { path: 'price', redirectTo: 'pricing', pathMatch: 'full' },
  {
    path: 'credibility',
    loadChildren: './testimonials/testimonials.module#TestimonialsPageModule'
  },
  {
    path: 'purchase',
    loadChildren: './purchase/purchase.module#PurchasePageModule'
  },
  { path: 'buy', redirectTo: 'purchase', pathMatch: 'full' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  {
    path: 'welcome',
    loadChildren: './auth/welcome/welcome.module#WelcomePageModule'
  },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'sign-in', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: './auth/register/register.module#RegisterPageModule'
  },
  {
    path: 'forgot',
    loadChildren:
      './auth/forgot-password/forgot-password.module#ForgotPasswordPageModule'
  },
  { path: 'reset-password', redirectTo: 'forgot', pathMatch: 'full' },
  {
    path: 'verify',
    loadChildren:
      './auth/verify-email/verify-email.module#VerifyEmailPageModule'
  },
  {
    path: 'settings',
    loadChildren: './auth/settings/settings.module#SettingsPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: './auth/profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren:
      './auth/user-tickets/user-tickets.module#UserTicketsPageModule',
    canActivate: [AdminGuard],
    data: { role: 'USER' }
  },
  {
    path: 'admin',
    loadChildren:
      './auth/admin-dashboard/admin-dashboard.module#AdminDashboardPageModule',
    canActivate: [AdminGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'tweets',
    loadChildren:
      './tweets/tweets.module#TweetsPageModule'
  },
  {
    path: 'categories',
    loadChildren:
      './sports-categories/sports-categories.module#SportsCategoriesPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'categories/:id',
    component: SportsCategoriesDetailComponent
  },
  {
    path: 'tables/:id',
    component: SportsTablesComponent
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
