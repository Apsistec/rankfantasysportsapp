import { AnalyticsComponent } from './analytics/analytics.component';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { PrimaryInterceptorService } from './_services/primary-interceptor.service';
import { RouteReuseStrategy } from '@angular/router';
import { SafePipe } from './_pipes/safe.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StartModalComponent } from './home/start-modal/start-modal.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SharedModule } from '@shared/shared.module';
// import { PaidGuard } from '@guards/paid.guard';
// import { AuthGuard } from '@guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    StartModalComponent,
    // AuthGuard,
    // PaidGuard,
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
    SharedModule,
    JwSocialButtonsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/app/ngsw-worker.js', {
      enabled: environment.production,
    }),
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
