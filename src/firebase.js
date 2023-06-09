// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjXdL2dhCh_C5kj2QQCKhaRCc8exNYyRs",
  authDomain: "thirdwebtest02.firebaseapp.com",
  projectId: "thirdwebtest02",
  storageBucket: "thirdwebtest02.appspot.com",
  messagingSenderId: "561476057470",
  appId: "1:561476057470:web:4e6ff02b00a53de41c1b2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);