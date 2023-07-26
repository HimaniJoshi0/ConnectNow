import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMzxu7h7jnY0hWhXbaCAFQUOcH7SQhW0M",
  authDomain: "connectnow-f7332.firebaseapp.com",
  databaseURL: "https://connectnow-f7332-default-rtdb.firebaseio.com",
  projectId: "connectnow-f7332",
  storageBucket: "connectnow-f7332.appspot.com",
  messagingSenderId: "167187523197",
  appId: "1:167187523197:web:0304788cbc190548cbf314",
  measurementId: "G-17ZQHWGW28"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db= getFirestore()