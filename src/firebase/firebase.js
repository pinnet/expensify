import * as firebase from 'firebase';
import expenses from './../tests/fixtures/firebase.expenses';
var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
firebase.initializeApp(config);
const db = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider,firebase,db as default };