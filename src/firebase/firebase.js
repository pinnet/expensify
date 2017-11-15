import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBIViAxds4Fv_9lqqEwWdB34y_3avblaFs",
    authDomain: "expensify-71a42.firebaseapp.com",
    databaseURL: "https://expensify-71a42.firebaseio.com",
    projectId: "expensify-71a42",
    storageBucket: "expensify-71a42.appspot.com",
    messagingSenderId: "91843540819"
  };
firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'danny'
}).catch((e) => {
    console.log(e);
});