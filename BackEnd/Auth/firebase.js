// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrWBpph6OmV07DmU_l3mGMJ0hI6Fbtj9w",
    authDomain: "kingtec-586dc.firebaseapp.com",
    projectId: "kingtec-586dc",
    storageBucket: "kingtec-586dc.appspot.com",
    messagingSenderId: "791732245249",
    appId: "1:791732245249:web:dba5186625b3941b76c100"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)