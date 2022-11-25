// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl4c66yU8bq8JlhCeiu4t9Kf-s-u3fHIE",
  authDomain: "first-sale-react-app.firebaseapp.com",
  projectId: "first-sale-react-app",
  storageBucket: "first-sale-react-app.appspot.com",
  messagingSenderId: "973959375238",
  appId: "1:973959375238:web:76cfbaeda0edf31073a407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;