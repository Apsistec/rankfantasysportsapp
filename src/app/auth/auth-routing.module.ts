import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerGuard } from '../core/guard/inner.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [InnerGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [InnerGuard] },
  { path: 'auth', loadChildren: './auth.module#AuthPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
