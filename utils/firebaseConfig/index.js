import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBe0inI7EFqVhnWvNk4DP5YWjy9brMkOjA",
    authDomain: "tailwind-project-b6c42.firebaseapp.com",
    projectId: "tailwind-project-b6c42",
    storageBucket: "tailwind-project-b6c42.appspot.com",
    messagingSenderId: "955132106415",
    appId: "1:955132106415:web:c84eccaaa0e0b01271a65a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}