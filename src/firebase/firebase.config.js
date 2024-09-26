// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFXpYvEHgssObHvw82qnujBbQtLqWxjUU",
    authDomain: "react-dragon-news-auth-86910.firebaseapp.com",
    projectId: "react-dragon-news-auth-86910",
    storageBucket: "react-dragon-news-auth-86910.appspot.com",
    messagingSenderId: "208628306167",
    appId: "1:208628306167:web:6ed6a3d971cd471b0e03f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;