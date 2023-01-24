import { initializeApp } from "firebase/app";        // changed due to package error while compiling
// import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";       // changed due to package error while compiling
// const { initializeApp } = require("firebase/app");
// const { getAnalytics } = require("firebase/analytics");
import { getAuth, GithubAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: "eggnest-onthetree.firebaseapp.com",
//     projectId: "eggnest-onthetree",
//     storageBucket: "eggnest-onthetree.appspot.com",
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyA2sITDNbD03n2dG23ZOloYUDin4AdZWFo",
    authDomain: "eggnest-onthetree.firebaseapp.com",
    projectId: "eggnest-onthetree",
    storageBucket: "eggnest-onthetree.appspot.com",
    messagingSenderId: "486169802041",
    appId: "1:486169802041:web:141cd7735584f8c681e4e8",
    measurementId: "G-MFLRLHR8DJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

let analytics;
if (firebaseApp.name && typeof window !== 'undefined') {
    analytics = getAnalytics(firebaseApp);
}
// const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GithubAuthProvider();

const storage = getStorage();

export { analytics, storage, auth, provider };
// export default db;