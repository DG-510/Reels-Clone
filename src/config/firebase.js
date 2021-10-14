import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDqcnRRWDo9o9pKpfGE1rKUer0ePFX-jdQ",
  authDomain: "react-login-36d68.firebaseapp.com",
  projectId: "react-login-36d68",
  storageBucket: "react-login-36d68.appspot.com",
  messagingSenderId: "420932876784",
  appId: "1:420932876784:web:a42b1e518ed4c8be684535"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
export let firebaseAuth = firebaseApp.auth();
export let firebaseStorage = firebaseApp.storage();
export let firebaseDB = firebaseApp.firestore();
export let timeStamp = firebase.firestore.FieldValue.serverTimestamp;