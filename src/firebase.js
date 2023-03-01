import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByO3cGWkH-_xQX6iaCjM1V0EFsHeS7Elo",
  authDomain: "video-streaming-a2228.firebaseapp.com",
  projectId: "video-streaming-a2228",
  storageBucket: "video-streaming-a2228.appspot.com",
  messagingSenderId: "488872233748",
  appId: "1:488872233748:web:2dc118e7391cdb484f5001",
  measurementId: "G-6201S8CSGX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, app, googleAuthProvider };
