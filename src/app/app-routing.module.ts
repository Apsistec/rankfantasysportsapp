import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LaunchPageComponent } from './components/launch-page/launch-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { InnerGuard } from './core/guard/inner.guard';
import { SigninGuard } from './core/guard/signin.guard';

const appRoutes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
{ path: 'testimonials', loadChildren: './pages/testimonials/testimonials.module#TestimonialsPageModule' },
{ path: 'tweeter', loadChildren: './pages/tweeter/tweeter.module#TweeterPageModule' },
{ path: 'launch-page', component: LaunchPageComponent },
{ path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
{ path: 'sign-in', component: SignInComponent, canActivate: [InnerGuard] },
{ path: 'sign-up', component: SignUpComponent, canActivate: [InnerGuard] },
{ path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [InnerGuard] },
{ path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [InnerGuard] },
{ path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [SigninGuard] },
{ path: 'list', loadChildren: './pages/list/list.module#ListPageModule' }, // canActivate: [SigninGuard]},
  {
    path: 'images', loadChildren: './pages/images/images.module#ImagesPageModule' }
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
