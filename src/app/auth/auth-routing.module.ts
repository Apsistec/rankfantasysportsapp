import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPage } from './auth.page';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { InnerGuard } from '../core/guard/inner.guard';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { AuthGuard } from '../core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children:
      [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'verify-email', component: VerifyEmailComponent },
        { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [InnerGuard] },
        { path: 'launchpage', component: LaunchpageComponent, canActivate: [AuthGuard] },
        { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
        { path: 'free-trial-login', loadChildren: './free-trial-login/free-trial-login.module#FreeTrialLoginPageModule' },
        { path: 'settings', loadChildren: './profile/settings/settings.module#SettingsPageModule' },
    ]
  },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
