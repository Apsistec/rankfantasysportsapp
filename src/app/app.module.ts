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
import { AngularFireFunctionsModule  } from '@angular/fire/functions';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicStorageModule } from '@ionic/storage';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';
import { Table4Component } from './table4/table4.component';
import { Table5Component } from './table5/table5.component';
import { Table6Component } from './table6/table6.component';
import { Table7Component } from './table7/table7.component';
import { Table8Component } from './table8/table8.component';
import { Table9Component } from './table9/table9.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
// import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
// import { PaymentFormComponent } from './payment-form/payment-form.component';
// import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';
import { TestimonialsPageModule } from './testimonials/testimonials.module';
import { GoldComponent } from './subscription-page/gold/gold.component';
import { SilverComponent } from './subscription-page/silver/silver.component';
import { BronzeComponent } from './subscription-page/bronze/bronze.component';
// import { UserChargesComponent } from './user-charges/user-charges.component';
// import { UserSourcesComponent } from './user-sources/user-sources.component';

@NgModule({
  declarations: [
    // SubscriptionPlanComponent,
    // UserSubscriptionsComponent,
    // PaymentFormComponent,
    // UserChargesComponent,
    // UserSourcesComponent
    GoldComponent,
    SilverComponent,
    BronzeComponent,
    SubscriptionPageComponent,
    Table1Component,
    Table2Component,
    Table3Component,
    Table4Component,
    Table5Component,
    Table6Component,
    Table7Component,
    Table8Component,
    Table9Component,
    AppComponent,
    LaunchPageComponent,
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicStorageModule.forRoot(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    NgxTwitterTimelineModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TestimonialsPageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [ NgxTwitterTimelineModule, SignInComponent, SignUpComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
