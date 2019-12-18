import {
  IonicModule,
  IonicRouteStrategy,
} from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NgModule, ErrorHandler } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, FUNCTIONS_ORIGIN  } from '@angular/fire/functions';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './_helpers/interceptor.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { SharedDirectivesModule } from './_directives/shared-directives.module';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { SharedPageModule } from './shared/shared.module';
import { } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

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

// import { TennisPageModule } from './sports-categories/tennis/tennis.module';
// import { NbaPageModule } from './sports-categories/nba/nba.module';
// import { NowPageModule } from './sports-categories/now/now.module';
// import { PgaPageModule } from './sports-categories/pga/pga.module';
// import { NflPageModule } from './sports-categories/nfl/nfl.module';
// import { CfbPageModule } from './sports-categories/cfb/cfb.module';
// import { SportsCategoriesPageModule } from './sports-categories/sports-categories.module';

@NgModule({
  declarations: [
    AppComponent,
    // ScorePredictionsComponent,
    // PowerRankingsComponent,
    // DkleadersComponent,
    // NflWeekComponent,
    // NflScoreComponent,
    // NflPreComponent,
    // PgaStatsComponent,
    // PgaThisWeekComponent,
    // Table1Component,
    // Table2Component,
    // Table3Component,
    // Table4Component,
    // Table5Component,
    // Table6Component,
    // Table7Component,
    // Table8Component,
    // Table9Component
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirePerformanceModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireMessagingModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    CommonModule,
    IonicModule.forRoot(),
    SharedDirectivesModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    // NowPageModule,
    // NflPageModule,
    // CfbPageModule,
    // PgaPageModule,
    // NbaPageModule,
    // TennisPageModule,
    // SportsCategoriesPageModule,
    SharedPageModule,
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
