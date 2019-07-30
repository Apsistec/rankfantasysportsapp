// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyB-WA8n-dFs6GANhNJYIZZ05m_RgWkm_GQ',
    authDomain: 'browser-landing.firebaseapp.com',
    databaseURL: 'https://browser-landing.firebaseio.com',
    projectId: 'browser-landing',
    storageBucket: 'browser-landing.appspot.com',
    messagingSenderId: '436994807324',
    appId: '1:436994807324:web:3688c0cd49139837'
  },
  api_url: 'https://conduit.productionready.io/api',
  apiKey: 'AIzaSyCefTvtXQDO25RK9D6NLbx6DgG-AIVEj9Q',
  stripe: {
    publicKey:
      'pk_live_zv7QgGqhVvrQW6bAUAn7yju400T3RMqWDt'
  },
  dialogflow: {
    sportsBot: '8b3d99f449ca45cf91fa0a9f88da30bc'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
