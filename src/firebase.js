import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxVwXaSrZSq1KPGu9dDW-m688XWZJYbas",
  authDomain: "disney-4d97d.firebaseapp.com",
  projectId: "disney-4d97d",
  storageBucket: "disney-4d97d.appspot.com",
  messagingSenderId: "1051494498231",
  appId: "1:1051494498231:web:cc8b3f799d192326c7f232",
  measurementId: "G-ZEGLH12ZTF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
