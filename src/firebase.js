// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3IqiEKFAspDC2yiYqQFWiDD6po-OYxWw",
  authDomain: "salon-55eb8.firebaseapp.com",
  projectId: "salon-55eb8",
  storageBucket: "salon-55eb8.appspot.com",
  messagingSenderId: "378523140950",
  appId: "1:378523140950:web:e1ef471d93350989610cf7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default firestore;
