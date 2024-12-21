// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ2N-RZQYX81I7nYcaMFYIkPN8NwtykZU",
  authDomain: "ecomerce-arielruiz.firebaseapp.com",
  projectId: "ecomerce-arielruiz",
  storageBucket: "ecomerce-arielruiz.firebasestorage.app",
  messagingSenderId: "462464260946",
  appId: "1:462464260946:web:4918f60eed2f0a08ea388b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)