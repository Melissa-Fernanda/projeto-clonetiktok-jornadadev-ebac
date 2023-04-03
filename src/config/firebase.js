// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQG9hjY8F0yP_4N1fGZGf-lJ9aqcEenHQ",
  authDomain: "clone-tiktok---jornada-ebac.firebaseapp.com",
  projectId: "clone-tiktok---jornada-ebac",
  storageBucket: "clone-tiktok---jornada-ebac.appspot.com",
  messagingSenderId: "319517334249",
  appId: "1:319517334249:web:17ed18ed183e9d874aae78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;