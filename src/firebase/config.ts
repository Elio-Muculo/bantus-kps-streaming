import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBflTLf_h4s-hCoQILQXDBPOQSTp7ujUdo",
  authDomain: "career-84926.firebaseapp.com",
  projectId: "career-84926",
  storageBucket: "career-84926.appspot.com",
  messagingSenderId: "1097653285991",
  appId: "1:1097653285991:web:6bba26b2ceb41f2d6950c2",
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const storage = getStorage();

export { app, storage };
