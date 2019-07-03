import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { LaunchPageComponent } from './launch-page/launch-page.component';
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
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicStorageModule } from '@ionic/storage';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubscriptionPageComponent } from './signup/subscription-page/subscription-page.component';
import { HttpClientModule } from "@angular/common/http";
import { ListPageModule } from "./tables/list/list.module";
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/guard/auth.guard';
import { InnerGuard } from './core/guard/inner.guard';
import { SigninGuard } from './core/guard/signin.guard';
import { MembershipsComponent } from './memberships/memberships.component';
import { SharedModule } from './shared/shared.module';
import { SigninFramePageModule } from './signup/signin-frame/signin-frame.module';
// import { ChatModule } from './chat/chat.module';




@NgModule({
  declarations: [
    SupportModa
    MembershipsComponent,
    SubscriptionPageComponent,
    AppComponent,
    LaunchPageComponent,
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent
  ],
  entryComponents: [],
  imports: [
    // ChatModule,
    SigninFramePageModule,
    SharedModule,
    ListPageModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicStorageModule.forRoot(),
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    NgxTwitterTimelineModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthService,
    AuthGuard,
    InnerGuard,
    SigninGuard,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  exports: [
    NgxTwitterTimelineModule,
    SignInComponent,
    SignUpComponent,
    MembershipsComponent,
   ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
