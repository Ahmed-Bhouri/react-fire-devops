// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFXvj3zYlZcHfKUhC6MJbhwmN16W0K-9g",
    authDomain: "react-fire-devops.firebaseapp.com",
    projectId: "react-fire-devops",
    storageBucket: "react-fire-devops.appspot.com",
    messagingSenderId: "137909440248",
    appId: "1:137909440248:web:2840f055a5994332b1b50d",
    measurementId: "G-TWKVZ4EJB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);