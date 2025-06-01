
import firebase from "firebase/compat/app";

//auth
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-JpX8tqqQmYgJjX8p5xB1uZRxe25-92E",
  authDomain: "clone2025-138e6.firebaseapp.com",
  projectId: "clone2025-138e6",
  storageBucket: "clone2025-138e6.firebasestorage.app",
  messagingSenderId: "915161703357",
  appId: "1:915161703357:web:94d84049be01eac31b28d4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
