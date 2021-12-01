// Import the functions you need from the SDKs you need
//import * as firebase from "firebase/app"
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf1aJODFraFml2NEiAdP6dBdA8OdFKo8A",
  authDomain: "firegram-4a695.firebaseapp.com",
  projectId: "firegram-4a695",
  storageBucket: "firegram-4a695.appspot.com",
  messagingSenderId: "6967429848",
  appId: "1:6967429848:web:8f225f9a54a946ffb2e5ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const projectStorage = getStorage(app);
const projectStorage = firebase.storage();
// const projectFirestore = getFirestore(app);
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };