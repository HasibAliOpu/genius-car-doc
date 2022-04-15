// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCydAFqKJr_QPFngLL8bF0g2m7G_9YBP_8",
  authDomain: "genius-car-docs.firebaseapp.com",
  projectId: "genius-car-docs",
  storageBucket: "genius-car-docs.appspot.com",
  messagingSenderId: "328928806001",
  appId: "1:328928806001:web:757d520be910639fe147d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
