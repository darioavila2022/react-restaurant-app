import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDTCVyFmcF3FS_7FKdV6NeHK6N7ppRDCJ8",
    authDomain: "restaurant-project-4fddd.firebaseapp.com",
    projectId: "restaurant-project-4fddd",
    storageBucket: "restaurant-project-4fddd.appspot.com",
    messagingSenderId: "916053476462",
    appId: "1:916053476462:web:e100a4dbe303e45b71d27f"
};

const firebaseApp = initializeApp( firebaseConfig );

export const db = getFirestore( firebaseApp );