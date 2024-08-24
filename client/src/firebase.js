// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-78951.firebaseapp.com",
  projectId: "mern-estate-78951",
  storageBucket: "mern-estate-78951.appspot.com",
  messagingSenderId: "301023266725",
  appId: "1:301023266725:web:0a5d7cf5618916bcd04a4c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
