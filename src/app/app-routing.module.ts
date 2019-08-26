import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { Table1Component } from './paid/tables/table1/table1.component';
import { Table2Component } from './paid/tables/table2/table2.component';
import { Table3Component } from './paid/tables/table3/table3.component';
import { Table4Component } from './paid/tables/table4/table4.component';
import { Table5Component } from './paid/tables/table5/table5.component';
import { Table6Component } from './paid/tables/table6/table6.component';
import { Table7Component } from './paid/tables/table7/table7.component';
import { Table8Component } from './paid/tables/table8/table8.component';
import { Table9Component } from './paid/tables/table9/table9.component';
import { PgaThisWeekComponent } from './paid/pga/pga-this-week/pga-this-week.component';
import { PgaStatsComponent } from './paid/pga/pga-stats/pga-stats.component';
import { NflPreComponent } from './paid/nfl/nfl-pre/nfl-pre.component';
import { PaidGuard } from './core/guard/paid.guard';
import { AuthGuard } from './core/guard/auth.guard';
import { InnerGuard } from './core/guard/inner.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', component: RegisterComponent, canActivate: [InnerGuard]  },
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [InnerGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [InnerGuard] },
  { path: 'login', component: LoginComponent, canActivate: [InnerGuard]  },
  { path: 'launchpage', component: LaunchpageComponent, canActivate: [AuthGuard] },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule', canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  { path: 'testimonials', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'pricing', loadChildren: './pricing/pricing.module#PricingPageModule' },
  { path: 'tweets', loadChildren: './tweets/tweets.module#TweetsPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'tennis', loadChildren: './paid/tennis/tennis.module#TennisPageModule' },
  { path: 'nfl', loadChildren: './paid/nfl/nfl.module#NflPageModule' },
  { path: 'fifa', loadChildren: './paid/fifa/fifa.module#FifaPageModule' },
  { path: 'nba', loadChildren: './paid/nba/nba.module#NbaPageModule' },
  { path: 'pga', loadChildren: './paid/pga/pga.module#PgaPageModule' },
  { path: 'now', loadChildren: './paid/now/now.module#NowPageModule' },
  // { path: 'user', loadChildren: './user-ticket/user-ticket.module#UserTicketPageModule'}, canActivate: [AuthGuard], data: { roles: ['paid']}
  {
    path: 'table1',
    component: Table1Component, canActivate: [PaidGuard]
  },
  {
    path: 'table2',
    component: Table2Component, canActivate: [PaidGuard]
  },
  {
    path: 'table3',
    component: Table3Component, canActivate: [PaidGuard]
  },
  {
    path: 'table4',
    component: Table4Component, canActivate: [PaidGuard]
  },
  {
    path: 'table5',
    component: Table5Component, canActivate: [PaidGuard]
  },
  {
    path: 'table6',
    component: Table6Component, canActivate: [PaidGuard]
  },
  {
    path: 'table7',
    component: Table7Component, canActivate: [PaidGuard]
  },
  {
    path: 'table8',
    component: Table8Component, canActivate: [PaidGuard]
  },
  {
    path: 'table9',
    component: Table9Component, canActivate: [PaidGuard]
  },
  {
    path: 'pga-this-week',
    component: PgaThisWeekComponent, canActivate: [PaidGuard]
  },
  {
    path: 'pga-stats',
    component: PgaStatsComponent, canActivate: [PaidGuard]
  },
  {
    path: 'nfl-pre',
    component: NflPreComponent, canActivate: [PaidGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
