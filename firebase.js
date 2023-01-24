import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "eggnest-onthetree.firebaseapp.com",
    projectId: "eggnest-onthetree",
    storageBucket: "eggnest-onthetree.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);

let analytics;
if (firebaseApp.name && typeof window !== 'undefined') {
    analytics = getAnalytics(firebaseApp);
}
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GithubAuthProvider();

const storage = getStorage();

export { analytics, storage, auth, provider };
export default db;