import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginGuard } from './core/guard/login.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { InnerGuard } from './core/guard/inner.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [InnerGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [InnerGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'launchpage', component: LaunchpageComponent },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'testimonials', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'tweets', loadChildren: './tweets/tweets.module#TweetsPageModule' },
  { path: 'list', loadChildren: './list-tables/list.module#ListPageModule' },
  // { path: 'social', loadChildren: './rfsocial/rfsocial.module#RfsocialPageModule' },
  { path: 'xstats', loadChildren: './xstats/xstats.module#XstatsPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
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
