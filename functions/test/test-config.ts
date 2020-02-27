import * as TestFunctions from 'firebase-functions-test';

const firebaseConfig = {
  apiKey: "AIzaSyADaGJqcu9yjLtHIx2H10Tc3SxSeRAfpSI",
  authDomain: "rfs-winning.firebaseapp.com",
  databaseURL: "https://rfs-winning.firebaseio.com",
  projectId: "rfs-winning",
  storageBucket: "rfs-winning.appspot.com",
  messagingSenderId: "186825783910",
  appId: "1:186825783910:web:de9e8e42ad7bfe565f0ba7",
  measurementId: "G-0P8VW87DF2"
};

const envConfig = { stripe: { secret: 'sk_test_Lpko14TtGexZLZJa3RoyTIJN00TL9aNXme' }};

const fun = TestFunctions(firebaseConfig, 'serviceAccountKey.json')

fun.mockConfig(envConfig);

export { fun };
