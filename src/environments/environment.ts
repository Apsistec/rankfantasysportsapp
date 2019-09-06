// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDNWc_cp6Rgk9J79Kf4lrVMDSr9LEHXU-s',
    authDomain: 'rankfantasysports-test.firebaseapp.com',
    databaseURL: 'https://rankfantasysports-test.firebaseio.com',
    projectId: 'rankfantasysports-test',
    storageBucket: 'rankfantasysports-test.appspot.com',
    messagingSenderId: '815928091369',
    appId: '1:815928091369:web:714233e00705a8d9'
  },
  stripe: { stripePublishable: 'pk_test_mFFXjOh5rHb7VLruDV39tGE200iVUj9Ook' },

  dialogflow: { sportsBot: '8b3d99f449ca45cf91fa0a9f88da30bc' },
};

//
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
