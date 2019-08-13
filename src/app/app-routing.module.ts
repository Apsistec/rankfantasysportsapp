import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './core/guard/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { InnerGuard } from './core/guard/inner.guard';
import { ChatComponent } from './chat/chat.component';
import { Table1Component } from './tables/table1/table1.component';
import { Table2Component } from './tables/table2/table2.component';
import { Table3Component } from './tables/table3/table3.component';
import { Table4Component } from './tables/table4/table4.component';
import { Table5Component } from './tables/table5/table5.component';
import { Table6Component } from './tables/table6/table6.component';
import { Table7Component } from './tables/table7/table7.component';
import { Table8Component } from './tables/table8/table8.component';
import { Table9Component } from './tables/table9/table9.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'chats/:id', component: ChatComponent },
  { path: 'chatbox', loadChildren: './chatbox/chatbox.module#ChatboxPageModule'},
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [InnerGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [InnerGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'launchpage', component: LaunchpageComponent },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'testimonials', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'tweets', loadChildren: './tweets/tweets.module#TweetsPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'xstats', loadChildren: './xstats/xstats.module#XstatsPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },

  {
    path: 'table1',
    component: Table1Component, canActivate: [AuthGuard]
  },
  {
    path: 'table2',
    component: Table2Component, canActivate: [AuthGuard]
  },
  {
    path: 'table3',
    component: Table3Component, canActivate: [AuthGuard]
  },
  {
    path: 'table4',
    component: Table4Component, canActivate: [AuthGuard]
  },
  {
    path: 'table5',
    component: Table5Component, canActivate: [AuthGuard]
  },
  {
    path: 'table6',
    component: Table6Component, canActivate: [AuthGuard]
  },
  {
    path: 'table7',
    component: Table7Component, canActivate: [AuthGuard]
  },
  {
    path: 'table8',
    component: Table8Component, canActivate: [AuthGuard]
  },
  {
    path: 'table9',
    component: Table9Component, canActivate: [AuthGuard]
  },
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
