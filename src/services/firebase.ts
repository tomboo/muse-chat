// /src/services/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuration pulled from .env.local
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize only once (safe for hot reloads)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Confirm Firebase initialized
console.log("[FirebaseApp] Initialized:", app.name, app.options.projectId);

// Export Firestore instance
export const db = getFirestore(app);
export default app;
