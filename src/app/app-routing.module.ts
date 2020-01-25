<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import {
  AngularFireAuthGuard,
  canActivate,
  hasCustomClaim,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
>>>>>>> Stashed changes
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TableDetailComponent } from './tables/table-detail/table-detail.component';
import { MtrdsComponent } from './tables/tennis/mtrds/mtrds.component';
import { WtrdsComponent } from './tables/tennis/wtrds/wtrds.component';
import { MttsaComponent } from './tables/tennis/mttsa/mttsa.component';
import { WttsaComponent } from './tables/tennis/wttsa/wttsa.component';
import { PlayersActiveComponent } from './stats/players-active/players-active.component';

// import { MemberGuard } from '../../../Member.guard';
// import { PaidMemberGuard } from '../../../paid-member.guard';

// const adminOnly = () => hasCustomClaim('admin');
// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
// const redirectLoggedInToProfile = () => redirectLoggedInTo(['items']);
// const belongsToTables = next => hasCustomClaim(`account-${next.params.id}`);
// const belongsToCategories = next => hasCustomClaim(`account-${next.params.id}`);

const appRoutes: Routes = [
<<<<<<< Updated upstream
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'how-to', loadChildren: './how-to/how-to.module#HowToPageModule' },
  { path: 'free-trial', loadChildren: './purchase/purchase.module#PurchasePageModule', canActivate: [PreventBuyGuard] },
=======
import {
  AngularFireAuthGuard,
  canActivate,
  hasCustomClaim,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


// import { MemberGuard } from '../../../Member.guard';
// import { PaidMemberGuard } from '../../../paid-member.guard';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToProfile = () => redirectLoggedInTo(['items']);
const belongsToTables = next => hasCustomClaim(`account-${next.params.id}`);
const belongsToCategories = next => hasCustomClaim(`account-${next.params.id}`);

const appRoutes: Routes = [
=======
>>>>>>> Stashed changes
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/table.module').then(
        m => m.TableModule
      )
  },
  {
    path: 'how-to',
    loadChildren: () =>
      import('./sales-funnel/how-to/how-to.module').then(m => m.HowToPageModule)
  },
  {
    path: 'free-trial',
    loadChildren: () =>
      import('./sales-funnel/purchase/purchase.module').then(m => m.PurchasePageModule)
  },
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  { path: 'freetrial', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'free', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'freetrail', redirectTo: 'free-trial', pathMatch: 'full' },
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  { path: 'pricing', loadChildren: './pricing/pricing.module#PricingPageModule' },
=======
  {
    path: 'pricing',
    loadChildren: () =>
      import('./sales-funnel/pricing/pricing.module').then(m => m.PricingPageModule)
  },
>>>>>>> Stashed changes
  { path: 'prices', redirectTo: 'pricing', pathMatch: 'full' },
  { path: 'price', redirectTo: 'pricing', pathMatch: 'full' },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./sales-funnel/purchase/purchase.module').then(m => m.PurchasePageModule)
  },
  { path: 'buy', redirectTo: 'purchase', pathMatch: 'full' },
  {
    path: 'faq',
    loadChildren: () => import('./sales-funnel/faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./sales-funnel/welcome/welcome.module').then(m => m.WelcomePageModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then(m => m.LoginPageModule)
    // ...canActivate(redirectLoggedInToProfile)
  },
  { path: 'sign-in', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then(m => m.RegisterPageModule),
    // ...canActivate(redirectLoggedInToProfile)
  },
  { path: 'nba-players-active', component: PlayersActiveComponent},
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
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./profile/user-tickets/user-tickets.module').then(
        m => m.UserTicketsPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { role: 'USER' }
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./profile/admin-dashboard/admin-dashboard.module').then(
        m => m.AdminDashboardPageModule
      ),
    data: { role: 'ADMIN' },
    // ...canActivate(adminOnly)
  },
  {
    path: 'tweets',
    loadChildren: () =>
      import('./sales-funnel/tweets/tweets.module').then(m => m.TweetsPageModule)
  },
  {
    path: 'testimonials',
    loadChildren: () =>
      import('./sales-funnel/testimonials/testimonials.module').then(m => m.TestimonialsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'mtrds', component: MtrdsComponent
  },
  {
    path: 'wtrds', component: WtrdsComponent
  },
  {
    path: 'mttsa', component: MttsaComponent
  },
  {
    path: 'wttsa', component: WttsaComponent
  },



<<<<<<< Updated upstream
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
=======
  {
    path: 'pricing',
    loadChildren: () =>
      import('./sales-funnel/pricing/pricing.module').then(m => m.PricingPageModule)
  },
  { path: 'prices', redirectTo: 'pricing', pathMatch: 'full' },
  { path: 'price', redirectTo: 'pricing', pathMatch: 'full' },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./sales-funnel/purchase/purchase.module').then(m => m.PurchasePageModule)
  },
  { path: 'buy', redirectTo: 'purchase', pathMatch: 'full' },
  {
    path: 'faq',
    loadChildren: () => import('./sales-funnel/faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./sales-funnel/welcome/welcome.module').then(m => m.WelcomePageModule),
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
      import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./profile/user-tickets/user-tickets.module').then(
        m => m.UserTicketsPageModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { role: 'USER' }
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./profile/admin-dashboard/admin-dashboard.module').then(
        m => m.AdminDashboardPageModule
      ),
    data: { role: 'ADMIN' },
    ...canActivate(adminOnly)
  },
  {
    path: 'tweets',
    loadChildren: () =>
      import('./sales-funnel/tweets/tweets.module').then(m => m.TweetsPageModule)
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
>>>>>>> Stashed changes
=======
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      // initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
      // relativeLinkResolution: 'corrected',
      // onSameUrlNavigation: 'reload',
      // enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
