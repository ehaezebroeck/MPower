import Firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5Exz5tezNuMK2CWAbI4-LW1qgg4bOQtY",
    authDomain: "mpower-b4539.firebaseapp.com",
    databaseURL: "https://mpower-b4539.firebaseio.com",
    projectId: "mpower-b4539",
    storageBucket: "mpower-b4539.appspot.com",
    messagingSenderId: "1016086718009",
    appId: "1:1016086718009:web:f0d9f6cc3e8c59567acfe8",
    measurementId: "G-6NSGK8WXQ4"
};
// Initialize Firebase
export const app = Firebase.initializeApp(firebaseConfig);