import * as firebase from 'firebase';
const firebaseKeys = {
    apiKey: "AIzaSyA2fo9d2jcXLvcNu6467ypGCeYoVosbd80",
    authDomain: "moviedb-app-frknoz.firebaseapp.com",
    projectId: "moviedb-app-frknoz",
    storageBucket: "moviedb-app-frknoz.appspot.com",
    messagingSenderId: "1016680910870",
    appId: "1:1016680910870:web:7165bf0ccdcf086175e537"
  };
  

  firebase.initializeApp(firebaseKeys);
  export default firebase