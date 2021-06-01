
// import 'hammerjs';
// import './polyfills';
// import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// // This is for easy camera with capacitor
// // import { defineCustomElements } from '@ionic/pwa-elements/loader';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then(ref => {
//     // Ensure Angular destroys itself on hot reloads.
//     if (window['ngRef']) {
//       window['ngRef'].destroy();
//     }
//     window['ngRef'] = ref;

//     // Otherise, log the boot error
//   })
//   .catch(err => console.error(err));
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
