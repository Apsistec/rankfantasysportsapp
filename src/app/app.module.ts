import {
  IonicModule,
  IonicRouteStrategy,
} from '@ionic/angular';
import { environment } from '../environments/environment';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicStorageModule } from '@ionic/storage';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { PaypalComponent } from './paypal/paypal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/helpers/interceptor.service';
import { Table1Component } from './paid/tables/table1/table1.component';
import { Table2Component } from './paid/tables/table2/table2.component';
import { Table3Component } from './paid/tables/table3/table3.component';
import { Table4Component } from './paid/tables/table4/table4.component';
import { Table5Component } from './paid/tables/table5/table5.component';
import { Table6Component } from './paid/tables/table6/table6.component';
import { Table7Component } from './paid/tables/table7/table7.component';
import { Table8Component } from './paid/tables/table8/table8.component';
import { Table9Component } from './paid/tables/table9/table9.component';
import { PgaThisWeekComponent } from './paid/pga/pga-this-week/pga-this-week.component';
import { PgaStatsComponent } from './paid/pga/pga-stats/pga-stats.component';
import { Firebase } from '@ionic-native/firebase/ngx';
import { NflPreComponent } from './paid/nfl/nfl-pre/nfl-pre.component';
import { AuthService } from './core/services/auth.service';

@NgModule({
  declarations: [
    PgaStatsComponent,
    PgaThisWeekComponent,
    NflPreComponent,
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
  entryComponents: [],
  imports: [
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
    AuthService,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  exports: [
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
