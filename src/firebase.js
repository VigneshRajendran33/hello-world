  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration


const firebaseConfig = {
    apiKey: "AIzaSyCjMUWPhCo_dSzusdP54CZRgox4Zf-QO1E",
    authDomain: "hello-world-61d45.firebaseapp.com",
    projectId: "hello-world-61d45",
    storageBucket: "hello-world-61d45.appspot.com",
    messagingSenderId: "34522126905",
    appId: "1:34522126905:web:bf89cfb3ae111790508be8",
    measurementId: "G-KVC9Y3ZSQL"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;