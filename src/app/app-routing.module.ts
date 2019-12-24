import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '@guards/admin.guard';
import { AuthGuard } from '@guards/auth.guard';
import { PaidGuard } from '@guards/paid.guard';
import { InnerGuard } from '@guards/inner.guard';
import { TennisComponent } from './sports-categories/tennis/tennis.component';
import { NbaComponent } from './sports-categories/nba/nba.component';
import { NflComponent } from './sports-categories/nfl/nfl.component';
import { CfbComponent } from './sports-categories/cfb/cfb.component';
import { PgaComponent } from './sports-categories/pga/pga.component';
import { NowComponent } from './sports-categories/now/now.component';

// import { Table1Component } from './sports-categories/tennis/table1/table1.component';
// import { Table2Component } from './sports-categories/tennis/table2/table2.component';
// import { Table3Component } from './sports-categories/tennis/table3/table3.component';
// import { Table4Component } from './sports-categories/tennis/table4/table4.component';
// import { Table5Component } from './sports-categories/nba/table5/table5.component';
// import { Table6Component } from './sports-categories/nba/table6/table6.component';
// import { Table7Component } from './sports-categories/nba/table7/table7.component';
// import { Table8Component } from './sports-categories/now/table8/table8.component';
// import { Table9Component } from './sports-categories/now/table9/table9.component';
// import { PgaThisWeekComponent } from './sports-categories/pga/pga-this-week/pga-this-week.component';
// import { PgaStatsComponent } from './sports-categories/pga/pga-stats/pga-stats.component';
// import { NflPreComponent } from './sports-categories/nfl/nfl-pre/nfl-pre.component';
// import { ScorePredictionsComponent } from './sports-categories/cfb/score-predictions/score-predictions.component';
// import { PowerRankingsComponent } from './sports-categories/cfb/power-rankings/power-rankings.component';
// import { NflWeekComponent } from './sports-categories/nfl/nfl-week/nfl-week.component';
// import { NflScoreComponent } from './sports-categories/nfl/nfl-score/nfl-score.component';


const appRoutes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'how-to', loadChildren: './how-to/how-to.module#HowToPageModule' },
  { path: 'free-trial', loadChildren: './purchase/purchase.module#PurchasePageModule' },
  { path: 'freetrial', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'free', redirectTo: 'free-trial',  pathMatch: 'full' },
  { path: 'freetrail', redirectTo: 'free-trial', pathMatch: 'full' },
  { path: 'pricing', loadChildren: './pricing/pricing.module#PricingPageModule' },
  { path: 'prices', redirectTo: 'pricing', pathMatch: 'full' },
  { path: 'price',  redirectTo: 'pricing', pathMatch: 'full' },
  { path: 'credibility', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'purchase', loadChildren: './purchase/purchase.module#PurchasePageModule' },
  { path: 'buy', redirectTo: 'purchase', pathMatch: 'full' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule'},
  { path: 'welcome', loadChildren: './auth/welcome/welcome.module#WelcomePageModule'},
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule', canActivate: [InnerGuard] },
  { path: 'sign-in', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule', canActivate: [InnerGuard]  },
  { path: 'forgot',  loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordPageModule', canActivate: [InnerGuard] },
  { path: 'reset-password',  redirectTo: 'forgot',  pathMatch: 'full',  canActivate: [InnerGuard] },
  { path: 'verify', loadChildren: './auth/verify-email/verify-email.module#VerifyEmailPageModule' },
  { path: 'settings', loadChildren: './auth/settings/settings.module#SettingsPageModule', canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: './auth/profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  { path: 'user', loadChildren: './auth/user-tickets/user-tickets.module#UserTicketsPageModule', canActivate: [AdminGuard], data: { role: 'USER' } },
  { path: 'admin', loadChildren: './auth/admin-dashboard/admin-dashboard.module#AdminDashboardPageModule', canActivate: [AdminGuard], data: { role: 'ADMIN' } },
  { path: 'categories', loadChildren: './sports-categories/sports-categories.module#SportsCategoriesPageModule' },
  { path: 'nba', component: NbaComponent, canActivate: [PaidGuard] },
  { path: 'nfl', component: NflComponent, canActivate: [PaidGuard] },
  { path: 'cfb', component: CfbComponent, canActivate: [PaidGuard] },
  { path: 'pga', component: PgaComponent, canActivate: [PaidGuard] },
  { path: 'tennis', component: TennisComponent, canActivate: [PaidGuard] },
  { path: 'now',  component: NowComponent, canActivate: [PaidGuard] },
//   {
//     path: 'mens-ratings',
//     component: Table1Component, canActivate: [PaidGuard]
// },
// {
//     path: 'womens-ratings',
//     component: Table2Component, canActivate: [PaidGuard]
// },
// {
//     path: 'mens-tournament',
//     component: Table3Component, canActivate: [PaidGuard]
// },
// {
//     path: 'womens-tournament',
//     component: Table4Component, canActivate: [PaidGuard]
// },
// {
//     path: 'nba-dk',
//     component: Table5Component, canActivate: [PaidGuard]
// },
// {
//     path: 'nba-power-rank',
//     component: Table6Component, canActivate: [PaidGuard]
// },
// {
//     path: 'nba-play-pred',
//     component: Table7Component, canActivate: [PaidGuard]
// },
// {
//     path: 'todays-value',
//     component: Table8Component, canActivate: [PaidGuard]
// },
// {
//     path: 'dk-accounting',
//     component: Table9Component, canActivate: [PaidGuard]
// },
// {
//     path: 'pga-this-week',
//     component: PgaThisWeekComponent, canActivate: [PaidGuard]
// },
// {
//     path: 'pga-stats',
//     component: PgaStatsComponent, canActivate: [PaidGuard]
// },
// {
//     path: 'nfl-pre',
//     component: NflPreComponent, canActivate: [PaidGuard]
// },
// {
//     path: 'nfl-week',
//     component: NflWeekComponent, canActivate: [PaidGuard]
// },
// {
//     path: 'nfl-score',
//     component: NflScoreComponent, canActivate: [PaidGuard]
// },
// {
//     path: 'power-rankings',
//     component: PowerRankingsComponent, canActivate: [PaidGuard]
// },
// {
//     path: 'score-predictions',
//     component: ScorePredictionsComponent, canActivate: [PaidGuard]
// },
{ path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', redirectTo: '/home'},
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
