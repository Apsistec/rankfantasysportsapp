import * as TestFunctions from 'firebase-functions-test';

const firebaseConfig = {
  apiKey: "AIzaSyB1ajpHCAZYUiA38URYKjq2xzB-7QLjLPk",
  authDomain: "rfs-test.firebaseapp.com",
  databaseURL: "https://rfs-test.firebaseio.com",
  projectId: "rfs-test",
  storageBucket: "rfs-test.appspot.com",
  messagingSenderId: "202668388763",
  appId: "1:202668388763:web:037e4cafd4caf21596b13e"
};

const envConfig = { stripe: { secret: 'sk_test_Lpko14TtGexZLZJa3RoyTIJN00TL9aNXme' }};

const fun = TestFunctions(firebaseConfig, 'serviceAccountKey.json')

fun.mockConfig(envConfig);

export { fun };
