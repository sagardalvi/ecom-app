import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC5WmuoC5m-Q1d9IieW7noM3XdPIYY6R88",
  authDomain: "ecom-app-db.firebaseapp.com",
  projectId: "ecom-app-db",
  storageBucket: "ecom-app-db.appspot.com",
  messagingSenderId: "548446852075",
  appId: "1:548446852075:web:20b4ef7a34e67bb549ffae"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
