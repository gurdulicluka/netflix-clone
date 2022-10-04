import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiI4Y_mYj2rs_ucIQRAbdF6Kk2tlZR7gE",
  authDomain: "netflix-clone-20d87.firebaseapp.com",
  projectId: "netflix-clone-20d87",
  storageBucket: "netflix-clone-20d87.appspot.com",
  messagingSenderId: "646965254673",
  appId: "1:646965254673:web:7accdc1a227460711fefb0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
