import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "docs-clone-e102b.firebaseapp.com",
  projectId: "docs-clone-e102b",
  storageBucket: "docs-clone-e102b.appspot.com",
  messagingSenderId: "561230808265",
  appId: process.env.APP_ID,
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
