import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnaW_K0-e_1Bu9wGeIfd6mMWQvO-rpMs0",
  authDomain: "clone-8e6bb.firebaseapp.com",
  databaseURL: "https://clone-8e6bb.firebaseio.com",
  projectId: "clone-8e6bb",
  storageBucket: "clone-8e6bb.appspot.com",
  messagingSenderId: "758800741520",
  appId: "1:758800741520:web:82412e3d01e377e8bd9415",
  measurementId: "G-GJWSNNF3FS",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
