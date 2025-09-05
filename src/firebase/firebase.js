// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcWwo8R6vEX8KqgHWU4Fg-cBACmLeipxs",
  authDomain: "you-23634.firebaseapp.com",
  projectId: "you-23634",
  storageBucket: "you-23634.firebasestorage.app",
  messagingSenderId: "939994239645",
  appId: "1:939994239645:web:7d34514c53e71e4610fa74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
