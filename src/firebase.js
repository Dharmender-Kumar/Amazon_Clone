// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnm876vts5VDGn8FYBW038ZxkMWmzEs-Q",
  authDomain: "clone-8ed5d.firebaseapp.com",
  projectId: "clone-8ed5d",
  storageBucket: "clone-8ed5d.appspot.com",
  messagingSenderId: "988341228124",
  appId: "1:988341228124:web:cf30327d807259fd940c99",
  measurementId: "G-RES395GJTD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
// const analytics = getAnalytics(app);
