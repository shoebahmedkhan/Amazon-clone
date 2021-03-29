import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgwN6HQi0fSygdLENHF8EVyYtlkPr702c",
    authDomain: "e-clone-21b4c.firebaseapp.com",
    projectId: "e-clone-21b4c",
    storageBucket: "e-clone-21b4c.appspot.com",
    messagingSenderId: "691046362256",
    appId: "1:691046362256:web:a90e66e9b5612535ed7c15",
    measurementId: "G-L0FCKE87C2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
