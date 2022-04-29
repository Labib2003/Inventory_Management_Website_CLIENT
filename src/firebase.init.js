// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkNFhregE-k9L9TFwmwWgUK5YjT870WiQ",
  authDomain: "crick-freak-assignment.firebaseapp.com",
  projectId: "crick-freak-assignment",
  storageBucket: "crick-freak-assignment.appspot.com",
  messagingSenderId: "770508001412",
  appId: "1:770508001412:web:04b0a4ce4c799dc57432d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;