import { environment } from '../environments/environment';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { File } from '@ionic-native/file/ngx';
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
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { AgGridModule } from 'ag-grid-angular';
import { PaypalComponent } from './paypal/paypal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/services/interceptor.service';
import { FirstTableComponent } from './tables/first-table/first-table.component';
import { TestableComponent } from './testable/testable.component';
import { Table1Component } from './tables/table1/table1.component';
import { Table2Component } from './tables/table2/table2.component';
import { Table3Component } from './tables/table3/table3.component';
import { Table4Component } from './tables/table4/table4.component';
import { Table5Component } from './tables/table5/table5.component';
import { Table6Component } from './tables/table6/table6.component';
import { Table7Component } from './tables/table7/table7.component';
import { Table8Component } from './tables/table8/table8.component';
import { Table9Component } from './tables/table9/table9.component';
// import { ChatboxPageModule } from './chatbox/chatbox.module';
import { ChatComponent } from './chat/chat.component';
// import { ChatService} from './core/services/chat.service';
// import { library } from '@fortawesome/fontawesome-svg-core';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import {
//   faBaseballBall,
//   faAward,
//   faGolfBall,
//   faMagic,
//   faBasketballBall,
//   faAddressCard,
//   faCreditCard,
//   faPhone,
//   faFootballBall,
//   faDollarSign,
//   faMoneyBill,
//   faMoneyBillAlt,
//   faMoneyBillWave,
//   faMoneyBillWaveAlt,
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   faGoogle,
//   faGoogleWallet,
//   faStripe,
//   faApplePay,
//   faApple,
//   faMicrosoft,
//   faFirefox,
//   faChrome,
//   faCcAmex,
//   faCcAmazonPay,
//   faBlogger,
//   faFacebook,
//   faCcApplePay,
//   faCcMastercard,
//   faCcPaypal,
//   faCcStripe,
//   faCcVisa,
//   faFacebookF,
//   faSafari,
//   faOpera,
//   faYoutube,
//   faWindows,
//   faAndroid,
//   faAmazonPay,
//   faPaypal
// } from '@fortawesome/free-brands-svg-icons';



// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { Router } from '@angular/router';
// import { enableDebugTools } from '@angular/platform-browser';
// import { ApplicationRef } from '@angular/core';

// export function loggerCallback(logLevel, message, piiEnabled) {
//   console.log('client logging' + message);
// }
// export const protectedResourceMap: [string, string[]][] = [
//   ['https://graph.microsoft.com/v1.0/me', ['user.read']],
//   ... other scopes
// ];
@NgModule({
  declarations: [
    ChatComponent,
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
    LaunchpageComponent,
    TestableComponent,
    FirstTableComponent,
    Table1Component,
    Table2Component,
    Table3Component,
    Table4Component,
    Table5Component,
    Table6Component,
    Table7Component,
    Table8Component,
    Table9Component,
    PaypalComponent,
  ],
  entryComponents: [
    PrivacyDialogComponent,
    TermsDialogComponent
  ],
  imports: [
    // FontAwesomeModule,
    // DataTablesModule,
    AgGridModule.withComponents([]),
    HomePageModule,
    // ChatboxPageModule,
    CommonModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicStorageModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
  ],
  providers: [
    File,
    StatusBar,
    SplashScreen,
    // ChatService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  exports: [ChatComponent],
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
  // constructor() {
  //   // Add an icon to the library for convenient access in other components
  //   library.add(
  //     faBaseballBall,
  //     faAward,
  //     faGolfBall,
  //     faBasketballBall,
  //     faAddressCard,
  //     faCreditCard,
  //     faMagic,
  //     faPhone,
  //     faFootballBall,
  //     faDollarSign,
  //     faMoneyBill,
  //     faMoneyBillAlt,
  //     faMoneyBillWave,
  //     faMoneyBillWaveAlt,
  //     faGoogle,
  //     faGoogleWallet,
  //     faStripe,
  //     faApplePay,
  //     faApple,
  //     faMicrosoft,
  //     faFirefox,
  //     faChrome,
  //     faCcAmex,
  //     faCcAmazonPay,
  //     faBlogger,
  //     faFacebook,
  //     faCcApplePay,
  //     faCcMastercard,
  //     faCcPaypal,
  //     faCcStripe,
  //     faCcVisa,
  //     faFacebookF,
  //     faSafari,
  //     faOpera,
  //     faYoutube,
  //     faWindows,
  //     faAndroid,
  //     faAmazonPay,
  //     faPaypal
  //   );
  // }
}
