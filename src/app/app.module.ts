import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { StartModalComponent } from 'app/home/start-modal/start-modal.component';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { PrimaryInterceptorService } from './_services/primary-interceptor.service';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomePageModule } from './home/home.module';
import { SafePipe } from './_pipes/safe.pipe';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { GuideComponent } from './guide/guide.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    StartModalComponent,
    GuideComponent,
    AnalyticsComponent,
  ],
  entryComponents: [StartModalComponent],
  imports: [
    HttpClientModule,       
    HttpClientJsonpModule,
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    AngularFireAuthGuardModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    JwSocialButtonsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/app/ngsw-worker.js', {
      enabled: environment.production,
    }),
    HttpClientModule,
    HomePageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
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
