// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-2deca.firebaseapp.com",
  projectId: "real-estate-2deca",
  storageBucket: "real-estate-2deca.appspot.com",
  messagingSenderId: "439645227344",
  appId: "1:439645227344:web:432efba514b3669d72c455"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);