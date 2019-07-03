import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { InnerGuard } from './core/guard/inner.guard';
import { Table1Component } from './tables/table1/table1.component';
import { Table2Component } from './tables/table2/table2.component';
import { Table3Component } from './tables/table3/table3.component';
import { Table4Component } from './tables/table4/table4.component';
import { Table5Component } from './tables/table5/table5.component';
import { Table6Component } from './tables/table6/table6.component';
import { Table7Component } from './tables/table7/table7.component';
import { Table8Component } from './tables/table8/table8.component';
import { Table9Component } from './tables/table9/table9.component';
import { SigninGuard } from './core/guard/signin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'testimonials', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [SigninGuard]},
  { path: 'launch-page', component: LaunchPageComponent },
  { path: 'tweets', loadChildren: './tweets/tweets.module#TweetsPageModule' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [InnerGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [InnerGuard] },
  { path: 'table1', component: Table1Component, canActivate: [AuthGuard] },
  { path: 'table2', component: Table2Component, canActivate: [AuthGuard] },
  { path: 'table3', component: Table3Component, canActivate: [AuthGuard] },
  { path: 'table4', component: Table4Component, canActivate: [AuthGuard] },
  { path: 'table5', component: Table5Component, canActivate: [AuthGuard] },
  { path: 'table6', component: Table6Component, canActivate: [AuthGuard] },
  { path: 'table7', component: Table7Component, canActivate: [AuthGuard] },
  { path: 'table8', component: Table8Component, canActivate: [AuthGuard] },
  { path: 'table9', component: Table9Component, canActivate: [AuthGuard] },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'signin-frame', loadChildren: './signin-frame/signin-frame.module#SigninFramePageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
