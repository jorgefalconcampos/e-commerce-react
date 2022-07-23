// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq2xdbIn4t3Wr4yXlD0VILxxLo4Szs4Tw",
  authDomain: "e-commerce-react-7e418.firebaseapp.com",
  projectId: "e-commerce-react-7e418",
  storageBucket: "e-commerce-react-7e418.appspot.com",
  messagingSenderId: "519688197731",
  appId: "1:519688197731:web:bc21abe0a20922993dca56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function initFirebase() {
    return app;
}