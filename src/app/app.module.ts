import { environment } from '../environments/environment';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicStorageModule } from '@ionic/storage';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageModule } from './home/home.module';
  import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { TermsComponent } from './terms/terms.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { FaqPageModule } from './faq/faq.module';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ProfileOptionsComponent } from './profile-options/profile-options.component';
import { ProfilePageModule } from './profile/profile.module';
import { RegisterComponent } from './register/register.component';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { PaypalComponent } from './paypal/paypal.component';
import { PostsComponent } from './posts/posts.component';
import { OAuthSettings } from '../oath';

import { MsalModule } from '@azure/msal-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/services/interceptor.service';


// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { Router } from '@angular/router';


// import { enableDebugTools } from '@angular/platform-browser';
// import { ApplicationRef } from '@angular/core';

// export function loggerCallback(logLevel, message, piiEnabled) {
//   console.log('client logging' + message);
// }
// export const protectedResourceMap: [string, string[]][] = [
//   ['https://graph.microsoft.com/v1.0/me', ['user.read']],
//   // ... other scopes
// ];
@NgModule({
  declarations: [
    TermsComponent,
    TermsDialogComponent,
    PrivacyComponent,
    PrivacyDialogComponent,
    AppComponent,
    PageNotFoundComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    LoginComponent,
    ProfileOptionsComponent,
    LaunchpageComponent,
    PaypalComponent,
    PostsComponent


  ],
  entryComponents: [
    PrivacyDialogComponent,
    TermsDialogComponent
  ],
  imports: [
    ProfilePageModule,
    FaqPageModule,
    HomePageModule,
    CommonModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicStorageModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MsalModule.forRoot({
      clientID: OAuthSettings.appId
    }),
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
    // HttpService,
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  // constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
  //   const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

  //   console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  // }
  // Other diagnostic
  // platformBrowserDynamic().bootstrapModule(AppModule)
  //   .then(moduleRef => {
  //     const applicationRef = moduleRef.injector.get(ApplicationRef);
  //     const appComponent = applicationRef.components[0];
  //     enableDebugTools(appComponent);
  //   })
}
