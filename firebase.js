// import { initializeApp } from "firebase/app";        changed due to package error while compiling
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";       changed due to package error while compiling
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "eggnest-onthetree.firebaseapp.com",
    projectId: "eggnest-onthetree",
    storageBucket: "eggnest-onthetree.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, GoogleProvider, analytics, storage };
export default db;