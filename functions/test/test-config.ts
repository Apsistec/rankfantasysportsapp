import * as TestFunctions from 'firebase-functions-test';

const firebaseConfig = {
    apiKey: 'AIzaSyBrzzfG6bJKmDhI-38ykPwlwuyaYHM_BYM',
    authDomain: 'browser-landing.firebaseapp.com',
    databaseURL: 'https://browser-landing.firebaseio.com',
    projectId: 'browser-landing',
    storageBucket: 'browser-landing.appspot.com',
    messagingSenderId: '436994807324',
    appId: '1:436994807324:web:3688c0cd49139837'
}

const envConfig = { stripe: { secret: 'sk_test_Lpko14TtGexZLZJa3RoyTIJN00TL9aNXme' }};

const fun = TestFunctions(firebaseConfig, 'service-account.json')

fun.mockConfig(envConfig);

export { fun };