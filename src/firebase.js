import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuratio

const firebaseConfig = {
  apiKey: "AIzaSyDI0S0UAPPL-xnCLBKe4NN-DZHPq7gMqWY",
  authDomain: "instagram-aca57.firebaseapp.com",
  databaseURL: "https://instagram-aca57-default-rtdb.firebaseio.com",
  projectId: "instagram-aca57",
  storageBucket: "instagram-aca57.appspot.com",
  messagingSenderId: "977574095264",
  appId: "1:977574095264:web:7f233dcefc54b528df5cc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };