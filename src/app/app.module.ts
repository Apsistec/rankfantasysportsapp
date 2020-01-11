import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { ErrorHandler, NgModule } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './_services/interceptor.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { MyErrorHandler } from './_services/error-handler.service';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './_shared/shared.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SportsCategoriesPageModule } from './sports-categories/sports-categories.module';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TableDisplayComponent } from 'app/table-display/table-display.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { AngularSlickgridModule } from 'angular-slickgrid';

// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
// import { MsalModule, MsalInterceptor } from '@azure/msal-angular';

@NgModule({
  declarations: [
    AppComponent,
    TableDisplayComponent,
    DialogBoxComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirePerformanceModule,
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFireAuthModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    AngularSlickgridModule.forRoot(),
    AngularFireFunctionsModule,
    AngularFireAuthGuardModule,
    CommonModule,
    SportsCategoriesPageModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: MyErrorHandler },
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  entryComponents: [DialogBoxComponent],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
