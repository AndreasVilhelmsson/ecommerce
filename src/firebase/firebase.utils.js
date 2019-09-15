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

// if user doesnt exist create user in database firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
