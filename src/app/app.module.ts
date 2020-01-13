
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { ErrorHandler, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './_services/interceptor.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MyErrorHandler } from './_services/error-handler.service';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularSlickgridModule } from 'angular-slickgrid';
import { IonicStorageModule } from '@ionic/storage';
import { HomePageModule } from './home/home.module';

// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
// import { MsalModule, MsalInterceptor } from '@azure/msal-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFirePerformanceModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    AngularFireAuthGuardModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    HomePageModule,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: ErrorHandler, useClass: MyErrorHandler },
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
