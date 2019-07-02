import * as TestFunctions from 'firebase-functions-test';

const firebaseConfig = {
  apiKey: "AIzaSyD8YvDjSQ8SlsCmcSQrBbiHCsiQAub0NKU",
  authDomain: "rfs-chat-bot.firebaseapp.com",
  databaseURL: "https://rfs-chat-bot.firebaseio.com",
  projectId: "rfs-chat-bot",
  storageBucket: "rfs-chat-bot.appspot.com",
  messagingSenderId: "868417954379",
  appId: "1:868417954379:web:c9c189ff555ec34b"
};

const envConfig = { stripe: { secret: 'sk_test_Lpko14TtGexZLZJa3RoyTIJN00TL9aNXme' }};

const fun = TestFunctions(firebaseConfig, 'service-account.json')

fun.mockConfig(envConfig);

export { fun };
