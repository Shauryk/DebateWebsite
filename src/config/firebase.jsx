import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyAcrjPYvfPdSxkmSWINZyltcTn9hRQLTu8",
  authDomain: "debatego-d6879.firebaseapp.com",
  projectId: "debatego-d6879",
  storageBucket: "debatego-d6879.firebasestorage.app",
  messagingSenderId: "899225015887",
  appId: "1:899225015887:web:833cb3457b719b07ff7c3a",
  measurementId: "G-GYKXDLF11W"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, signOut, db, setDoc, doc, getDoc };
