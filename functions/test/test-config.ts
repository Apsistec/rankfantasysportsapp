import * as TestFunctions from 'firebase-functions-test';

const firebaseConfig = {
  apiKey: "AIzaSyDNWc_cp6Rgk9J79Kf4lrVMDSr9LEHXU-s",
  authDomain: "rankfantasysports-test.firebaseapp.com",
  databaseURL: "https://rankfantasysports-test.firebaseio.com",
  projectId: "rankfantasysports-test",
  storageBucket: "rankfantasysports-test.appspot.com",
  messagingSenderId: "815928091369",
  appId: "1:815928091369:web:714233e00705a8d9"
};

const envConfig = { stripe: { secret: 'sk_test_Lpko14TtGexZLZJa3RoyTIJN00TL9aNXme' }};

const fun = TestFunctions(firebaseConfig, 'service-account.json')

fun.mockConfig(envConfig);

export { fun };
