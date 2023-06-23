// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID,
apiKey : "AIzaSyBng67vbmNXgkPup3K1G9etDaE7nud_Ta4",
authDomain: "fire-base-auth-ad852.firebaseapp.com",
projectId: "fire-base-auth-ad852",
storageBucket: "fire-base-auth-ad852.appspot.com",
messagingSenderId: "309955327522",
appId: "1:309955327522:web:e15078d9cc0cb587e77c7b",
measurementId: "G-54S33VXT29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth }