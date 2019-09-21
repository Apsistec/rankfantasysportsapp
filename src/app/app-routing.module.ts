import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guard/admin.guard';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tweets', loadChildren: './tweets/tweets.module#TweetsPageModule' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'credibility', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'pricing', loadChildren: './pricing/pricing.module#PricingPageModule' },
  { path: 'prices', loadChildren: './pricing/pricing.module#PricingPageModule' },
  { path: 'price', loadChildren: './pricing/pricing.module#PricingPageModule' },
  { path: 'purchase', loadChildren: './purchase/purchase.module#PurchasePageModule' },
  { path: 'buy', loadChildren: './purchase/purchase.module#PurchasePageModule' },
  { path: 'free-trial', loadChildren: './purchase/purchase.module#PurchasePageModule' },
  { path: 'freetrial', loadChildren: './purchase/purchase.module#PurchasePageModule' },
  { path: 'free', loadChildren: './purchase/purchase.module#PurchasePageModule' },
  { path: 'freetrail', loadChildren: './purchase/purchase.module#PurchasePageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'how-to', loadChildren: './how-to/how-to.module#HowToPageModule' },
  {
    path: 'admin',
    loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardPageModule',
    canActivate: [AdminGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'user',
    loadChildren: './user-tickets/user-tickets.module#UserTicketsPageModule',
    canActivate: [AdminGuard],
    data: {
      role: 'USER'
    }
  },
  { path: '**', redirectTo: '/home' },
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
export class AppRoutingModule { }
