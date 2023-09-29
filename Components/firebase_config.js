// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyDr34b5Oa2pVYi9FN7t6uuFK16lUxyG4qg",
  authDomain: "test-71b21.firebaseapp.com",
  projectId: "test-71b21",
  storageBucket: "test-71b21.appspot.com",
  messagingSenderId: "35063459126",
  appId: "1:35063459126:web:ce9584342405385dcd9797",
  measurementId: "G-869XYTF5QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app)

export default db;