// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaQcSo63aUxxMCaWWhHqXyT1pxNb6PMSk",
  authDomain: "fabricadogroove-358b9.firebaseapp.com",
  projectId: "fabricadogroove-358b9",
  storageBucket: "fabricadogroove-358b9.appspot.com",
  messagingSenderId: "280483375648",
  appId: "1:280483375648:web:68116fa9e99530d6242a45",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
