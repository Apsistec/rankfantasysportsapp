import { environment } from '../environments/environment';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

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
import { HomePageModule } from './home/home.module';
import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyDialogComponent } from './privacy-dialog/privacy-dialog.component';
import { TermsDialogComponent } from './terms-dialog/terms-dialog.component';
import { TermsComponent } from './terms/terms.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { AgGridModule } from 'ag-grid-angular';
import { PaypalComponent } from './paypal/paypal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/services/interceptor.service';
import { Table1Component } from './tables/table1/table1.component';
import { Table2Component } from './tables/table2/table2.component';
import { Table3Component } from './tables/table3/table3.component';
import { Table4Component } from './tables/table4/table4.component';
import { Table5Component } from './tables/table5/table5.component';
import { Table6Component } from './tables/table6/table6.component';
import { Table7Component } from './tables/table7/table7.component';
import { Table8Component } from './tables/table8/table8.component';
import { Table9Component } from './tables/table9/table9.component';
import { ChatComponent } from './chat/chat.component';
import { PgaThisWeekComponent } from './pga/pga-this-week/pga-this-week.component';
import { PgaStatsComponent} from './pga/pga-stats/pga-stats.component';
import { NflPreComponent } from './nfl/nfl-pre/nfl-pre.component';
// import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
// import { SubscriptionComponent } from './subscription/subscription.component';
// import { UserSourcesComponent } from './user-sources/user-sources.component';

@NgModule({
  declarations: [
    // UserSourcesComponent,
    // SubscriptionPlanComponent,
    // SubscriptionComponent,
    PgaStatsComponent,
    PgaThisWeekComponent,
    NflPreComponent,
    ChatComponent,
    TermsComponent,
    TermsDialogComponent,
    PrivacyComponent,
    PrivacyDialogComponent,
    AppComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    LoginComponent,
    LaunchpageComponent,
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
    // ChatboxPageModule,
    AgGridModule.withComponents([]),
    HomePageModule,
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
    // ChatService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  exports: [
    ChatComponent,
    PrivacyDialogComponent,
    PrivacyComponent,
    TermsDialogComponent,
    TermsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
