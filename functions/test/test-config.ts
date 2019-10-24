import * as TestFunctions from 'firebase-functions-test';

const firebaseConfig = {
  apiKey: "AIzaSyDfE-9K6dymzroMHXkGTDx5V34ikVA_iEk",
  authDomain: "rfsports-a7d61.firebaseapp.com",
  databaseURL: "https://rfsports-a7d61.firebaseio.com",
  projectId: "rfsports-a7d61",
  storageBucket: "rfsports-a7d61.appspot.com",
  messagingSenderId: "828616629322",
  appId: "1:828616629322:web:5318c5f1a813c2043b5ab3",
  measurementId: "G-7TYMH49CL1"
};

const envConfig = { stripe: { secret: 'sk_test_Lpko14TtGexZLZJa3RoyTIJN00TL9aNXme' }};

const fun = TestFunctions(firebaseConfig, 'serviceAccountKey.json')

fun.mockConfig(envConfig);

export { fun };
