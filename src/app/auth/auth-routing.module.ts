import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from './no-auth-guard.service';
import { InnerGuard } from '../core/guard/inner.guard';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    component: SignUpComponent,
    canActivate: [NoAuthGuard]
  },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [InnerGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [InnerGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
