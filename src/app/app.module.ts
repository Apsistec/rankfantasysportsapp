<<<<<<< Updated upstream
<<<<<<< Updated upstream
import {
  IonicModule,
  IonicRouteStrategy,
} from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
=======
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
>>>>>>> Stashed changes
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, FUNCTIONS_ORIGIN  } from '@angular/fire/functions';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '@helpers/interceptor.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
// import { SharedDirectivesModule } from '@directives/shared-directives.module';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { SharedModule } from '@shared/shared.module';
// import { } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
// import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
=======
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { PrimaryInterceptorService } from './_services/primary-interceptor.service';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
>>>>>>> Stashed changes

import { SportsCategoriesPageModule } from './sports-categories/sports-categories.module';

// import { ScorePredictionsComponent } from './sports-categories/cfb/score-predictions/score-predictions.component';
// import { PowerRankingsComponent } from './sports-categories/cfb/power-rankings/power-rankings.component';
// import { Table5Component } from './sports-categories/nba/table5/table5.component';
// import { Table6Component } from './sports-categories/nba/table6/table6.component';
// import { Table7Component } from './sports-categories/nba/table7/table7.component';
// import { DkleadersComponent } from './sports-categories/nba/dkleaders/dkleaders.component';
// import { NflPreComponent } from './sports-categories/nfl/nfl-pre/nfl-pre.component';
// import { NflScoreComponent } from './sports-categories/nfl/nfl-score/nfl-score.component';
// import { NflWeekComponent } from './sports-categories/nfl/nfl-week/nfl-week.component';
// import { Table8Component } from './sports-categories/now/table8/table8.component';
// import { Table9Component } from './sports-categories/now/table9/table9.component';
// import { PgaStatsComponent } from './sports-categories/pga/pga-stats/pga-stats.component';
// import { PgaThisWeekComponent } from './sports-categories/pga/pga-this-week/pga-this-week.component';
// import { Table1Component } from './sports-categories/tennis/table1/table1.component';
// import { Table2Component } from './sports-categories/tennis/table2/table2.component';
// import { Table3Component } from './sports-categories/tennis/table3/table3.component';
// import { Table4Component } from './sports-categories/tennis/table4/table4.component';
// import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

// import { SportsCategoriesPageModule } from './sports-categories/sports-categories.module';

export const protectedResourceMap: [string, string[]][] = [ ['http://localhost:8100', ['api://8b3cfe6b-4ec4-41af-be3d-4f41fd41da02/access_as_user']] , ['https://graph.microsoft.com/v1.0/me', ['user.read']] ];

const isIE = window.navigator.userAgent.indexOf( 'MSIE ' ) > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
=======
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { environment } from "../environments/environment";
import { ErrorHandler, NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { RouteReuseStrategy } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthGuardModule } from "@angular/fire/auth-guard";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireFunctionsModule } from "@angular/fire/functions";
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { AngularFirePerformanceModule } from "@angular/fire/performance";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { IonicStorageModule } from "@ionic/storage";
import { HomePageModule } from "./home/home.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { TableModule } from './tables/table.module';
import { StatsPageModule } from "./stats/stats.module";
>>>>>>> Stashed changes

@NgModule({
  declarations: [AppComponent],
  imports: [
<<<<<<< Updated upstream
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
=======
    BrowserModule,
    StatsPageModule,
>>>>>>> Stashed changes
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFirePerformanceModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    AngularFireAuthGuardModule,
    AngularFireAuthModule,
<<<<<<< Updated upstream
    AppRoutingModule,
<<<<<<< Updated upstream
    IonicModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    // MsalModule.forRoot({
    //   clientID: 'edd1e522-2da3-4340-a899-cd6db7f61f59',
    //   authority: 'https://login.microsoftonline.com/rfsports.onmicrosoft.com/',
    //   redirectUri: 'http://localhost:8100/',
    //   validateAuthority : true,
    //   cacheLocation : 'localStorage',
    //   storeAuthStateInCookie: false, // dynamically set to true when IE11
    //   postLogoutRedirectUri: 'http://localhost:8100/',
    //   navigateToLoginRequestUrl : true,
    //   popUp: true,
    //   consentScopes: ['user.read', 'api://8b3cfe6b-4ec4-41af-be3d-4f41fd41da02/access_as_user'],
    //   unprotectedResources: ['https://angularjs.org/'],
    //   protectedResourceMap : protectedResourceMap,
      // logger :loggerCallback,
      // correlationId: '1234',
      // level: LogLevel.Verbose,
      // piiLoggingEnabled: true,
    // SharedDirectivesModule,
    // }),
=======
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
>>>>>>> Stashed changes
=======
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    HttpClientModule,
    HomePageModule,
    AppRoutingModule,
    // TableModule,
    BrowserAnimationsModule
>>>>>>> Stashed changes
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    Firebase,
    // {provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  exports: [
=======
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: PrimaryInterceptorService, multi: true },
>>>>>>> Stashed changes
=======
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
>>>>>>> Stashed changes
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
