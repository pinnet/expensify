import * as firebase from 'firebase';
import expenses from './../tests/fixtures/firebase.expenses';
var config = {
    apiKey: "AIzaSyBIViAxds4Fv_9lqqEwWdB34y_3avblaFs",
    authDomain: "expensify-71a42.firebaseapp.com",
    databaseURL: "https://expensify-71a42.firebaseio.com",
    projectId: "expensify-71a42",
    storageBucket: "expensify-71a42.appspot.com",
    messagingSenderId: "91843540819"
  };
firebase.initializeApp(config);
const db = firebase.database();

export { firebase,db as default };