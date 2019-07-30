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
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { LogLevel } from 'msal';
import { AuthModule } from './auth/auth.module';
import { MsGraphComponent } from './ms-graph/ms-graph.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { LaunchPageComponent } from './main-pages/launch-page/launch-page.component';
import { ArticleResolver } from './article/article-resolver.service';
import { EditableArticleResolver } from './editor/editable-article-resolver.service';
import { ProfileResolver } from './profile/profile-resolver.service';

export function loggerCallback(logLevel, message, piiEnabled) {
  console.log('client logging' + message);
}
export const protectedResourceMap: [string, string[]][] = [
  ['https://graph.microsoft.com/v1.0/me', ['user.read']],
  // ... other scopes
];
@NgModule({
  declarations: [
    AppComponent,
    MsGraphComponent,
    ProductComponent,
    ProductDetailComponent,
    LaunchPageComponent
  ],
  entryComponents: [],
  imports: [
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    MsalModule.forRoot({
      clientID: '356141ef-6b53-40e6-9ea4-fd5224e977f5'
    }),
    SharedModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    AuthModule,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ArticleResolver,
    EditableArticleResolver,
    ProfileResolver
  ],
  exports: [
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
