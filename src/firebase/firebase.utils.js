import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAuiXUlWw8z8tMTW5ZfcqQb15obzWYifMQ",
  authDomain: "ecommerce-46302.firebaseapp.com",
  databaseURL: "https://ecommerce-46302.firebaseio.com",
  projectId: "ecommerce-46302",
  storageBucket: "",
  messagingSenderId: "197211111575",
  appId: "1:197211111575:web:f642e3e8e0d2b2b4e429d2"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
