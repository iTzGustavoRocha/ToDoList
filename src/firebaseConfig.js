// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZuxjPXbXMxYXwCI0IayBiaVxutWXWC_o",
  authDomain: "todolist-9e8da.firebaseapp.com",
  projectId: "todolist-9e8da",
  storageBucket: "todolist-9e8da.firebasestorage.app",
  messagingSenderId: "305601486272",
  appId: "1:305601486272:web:b432ec4138eb15fec83c25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export { db };



