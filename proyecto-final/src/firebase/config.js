// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDiN958XSRpLFtPybaZT7RILyvaUFbhElU",
    authDomain: "react-js-project-final.firebaseapp.com",
    projectId: "react-js-project-final",
    storageBucket: "react-js-project-final.firebasestorage.app",
    messagingSenderId: "378435692325",
    appId: "1:378435692325:web:eae0014400c9f336e55ccc"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

