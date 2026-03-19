// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = { 
  apiKey: "AIzaSyCXKm1hPvq38S_13C95meJAvmMXcZ8M1fQ", 
  authDomain: "giftwave-pro.firebaseapp.com", 
  projectId: "giftwave-pro", 
  storageBucket: "giftwave-pro.firebasestorage.app", 
  messagingSenderId: "964612051931", 
  appId: "1:964612051931:web:c318a4f6ba21c51d3a8dfe", 
  measurementId: "G-Z8YJ83DXW2" 
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
