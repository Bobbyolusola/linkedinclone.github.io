
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "linkedin-3bf0b.firebaseapp.com",
    projectId: "linkedin-3bf0b",
    storageBucket: "linkedin-3bf0b.appspot.com",
    messagingSenderId: "530504144355",
    appId: "1:530504144355:web:6ea2009f54b0f4fb0afcd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);