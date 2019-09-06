import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthPage } from './auth.page';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { PaypalComponent } from './paypal/paypal.component';
import { CameraComponent } from './profile/camera/camera.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthPage,
    CameraComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    PaypalComponent,
    LaunchpageComponent,

  ]
})
export class AuthPageModule {}
