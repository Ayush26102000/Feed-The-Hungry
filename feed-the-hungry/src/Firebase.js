
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAaddToOAa-qiuhjY_0DkdUSh2ZHqXYZ1M",
  authDomain: "feed-the-hungry-2437a.firebaseapp.com",
  projectId: "feed-the-hungry-2437a",
  storageBucket: "feed-the-hungry-2437a.appspot.com",
  messagingSenderId: "821656218299",
  appId: "1:821656218299:web:8bc666ff1f06af94b2179e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);