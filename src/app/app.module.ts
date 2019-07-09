import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { LaunchPageComponent } from './account-management/launch-page/launch-page.component';
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
import { ForgotPasswordComponent } from './entrance/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './entrance/verify-email/verify-email.component';
import { SubscriptionPageComponent } from './account-management/subscription-page/subscription-page.component';
import { HttpClientModule } from "@angular/common/http";
import { ListPageModule } from "./products/tables/list/list.module";
import { SharedModule } from './shared/shared.module';
// import { SignInComponent } from './entrance/sign-in/sign-in.component';
import { FaqPageModule } from './account-management/faq/faq.module';
import { ProfilePageModule } from './account-management/profile/profile.module';
import { HomePageModule } from './front-end/home/home.module';
// import { ChatModule } from './chat/chat.module';




@NgModule({
  declarations: [
    // SignInComponent,
    SubscriptionPageComponent,
    AppComponent,
    LaunchPageComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  entryComponents: [],
  imports: [
    // ChatModule,
    FormsModule,
    SharedModule,
    HomePageModule,
    FaqPageModule,
    ProfilePageModule,
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
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [
    NgxTwitterTimelineModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
