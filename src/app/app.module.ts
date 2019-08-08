import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';
import { Router } from '@angular/router';

// import { enableDebugTools } from '@angular/platform-browser';
// import { ApplicationRef } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// export function loggerCallback(logLevel, message, piiEnabled) {
//   console.log('client logging' + message);
// }
// export const protectedResourceMap: [string, string[]][] = [
//   ['https://graph.microsoft.com/v1.0/me', ['user.read']],
//   // ... other scopes
// ];
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  entryComponents: [
  ],
  imports: [
    HomeModule,
    CommonModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicStorageModule.forRoot(),
    SharedModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .then(moduleRef => {
//     const applicationRef = moduleRef.injector.get(ApplicationRef);
//     const appComponent = applicationRef.components[0];
//     enableDebugTools(appComponent);
//   })
