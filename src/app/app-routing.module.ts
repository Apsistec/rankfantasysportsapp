import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './core/guard/auth.guard';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { InnerGuard } from './core/guard/inner.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'testimonials', loadChildren: './home/testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'launch-page', component: LaunchPageComponent },
  { path: 'tweets', loadChildren: './home/tweets/tweets.module#TweetsPageModule' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [InnerGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [InnerGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
