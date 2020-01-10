/*tslint:disable:no-import-side-effect*/

import 'hammerjs';
import { enableProdMode, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableDebugTools } from '@angular/platform-browser';


// This is for easy camera with capacitor
// import { defineCustomElements } from '@ionic/pwa-elements/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
.bootstrapModule(AppModule)
.then(ref => {
  const applicationRef = ref.injector.get(ApplicationRef);
  const appComponent = applicationRef.components[0];
  enableDebugTools(appComponent);
}).catch(err => console.log(err));

// platformBrowserDynamic()
//   .bootstrapModule(AppModule, { preserveWhitespaces: true }) // preserveWhitespaces is now default to False since Angular 6
//   .catch(err => console.log(err));

// // Call the element loader after the platform has been bootstrapped
// defineCustomElements(window);
