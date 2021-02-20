import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCivnxeJJXcACkoCBRZShNtkOQDH8gyg0",
  authDomain: "ecommerce-8513b.firebaseapp.com",
  databaseURL: "https://ecommerce-8513b.firebaseio.com",
  projectId: "ecommerce-8513b",
  storageBucket: "ecommerce-8513b.appspot.com",
  messagingSenderId: "1077966669659",
  appId: "1:1077966669659:web:143def51d9ed66c0ca7c7e",
  measurementId: "G-KTZJ70G902"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };