import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageModule } from './home/home.module';
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { PrimaryInterceptorService } from './_services/primary-interceptor.service';
import { RouteReuseStrategy } from '@angular/router';
import { SafePipe } from './_pipes/safe.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StartModalComponent } from 'app/home/start-modal/start-modal.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    StartModalComponent,
    AnalyticsComponent,
  ],
  entryComponents: [
    StartModalComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireAuthGuardModule,
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    MaterialModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    JwSocialButtonsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/app/ngsw-worker.js', {
      enabled: environment.production,
    }),
    HomePageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PrimaryInterceptorService,
      multi: true,
    },
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
