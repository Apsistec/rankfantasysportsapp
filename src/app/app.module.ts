import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { LaunchPageComponent } from './launch-page/launch-page.component';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TestimonialsPageModule } from './home/testimonials/testimonials.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { ListPageModule } from './list/list.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule  } from '@angular/fire/functions';
import { TweetsPageModule } from './home/tweets/tweets.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicStorageModule } from '@ionic/storage';
import { AuthService } from './core/auth.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpPageModule } from './sign-up/sign-up.module';

@NgModule({
  declarations: [
    AppComponent,
    LaunchPageComponent,
    CheckoutComponent,
    ForgotPasswordComponent,
    SignInComponent,
    VerifyEmailComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    SignUpPageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicStorageModule.forRoot(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    HomePageModule,
    TestimonialsPageModule,
    TweetsPageModule,
    NgxTwitterTimelineModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ListPageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService
  ],
  exports: [ NgxTwitterTimelineModule, SignInComponent, CheckoutComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
