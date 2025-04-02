// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/storage"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAtkYYLJPipwMY9t5hF3wuHDG4tCC9hF7A",
//   authDomain: "instagram-reels-app-70e65.firebaseapp.com",
//   projectId: "instagram-reels-app-70e65",
//   storageBucket: "instagram-reels-app-70e65.appspot.com",
//   messagingSenderId: "416737627012",
//   appId: "1:416737627012:web:5d54c7449d4a08ed8a2bd1"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth() ;

const firestore = firebase.firestore() ;
export const database = {
    users : firestore.collection('users'), 
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage() ;