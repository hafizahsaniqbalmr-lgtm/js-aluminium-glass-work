import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCBXYj0RMcQ-9VB0WVfo2qHihEB61fi6dE",
  authDomain: "js-aluminum-and-glass-work.firebaseapp.com",
  projectId: "js-aluminum-and-glass-work",
  storageBucket: "js-aluminum-and-glass-work.firebasestorage.app",
  messagingSenderId: "1042062856254",
  appId: "1:1042062856254:web:3c8cdf4478fe1447ff416f"
};

export const ADMIN_EMAILS = [
  "hafizahsaniqbalmr@gmail.com",
  "basit7946@gmail.com"
];

export const isAdminEmail = (email) =>
  ADMIN_EMAILS.includes((email || "").toLowerCase().trim());

export const firebaseReady = true;
const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
