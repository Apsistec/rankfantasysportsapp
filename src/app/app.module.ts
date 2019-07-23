import { LaunchPageComponent } from './components/launch-page/launch-page.component';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicStorageModule } from '@ionic/storage';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SubscriptionPageComponent } from './components/subscription-page/subscription-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MembershipsComponent } from './components/memberships/memberships.component';
import { SupportModalComponent } from './components/support-modal/support-modal.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthService } from './core/auth.service';
import { CheckForUpdateService } from './core/check-for-update.service';
import { InnerGuard } from './core/guard/inner.guard';
import { SigninGuard } from './core/guard/signin.guard';
import { ImageModalPageModule } from './pages/image-modal/image-modal.module';
// import { TestimonialsPageModule } from './pages/testimonials/testimonials.module';

@NgModule({
  declarations: [
    SubscriptionPageComponent,
    AppComponent,
    LaunchPageComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SignInComponent,
    MembershipsComponent,
    SupportModalComponent,
    MembershipsComponent
  ],
  entryComponents: [SupportModalComponent],
  imports: [
    // TestimonialsPageModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    ImageModalPageModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    AuthGuard,
    AuthService,
    CheckForUpdateService,
    InnerGuard,
    SigninGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
