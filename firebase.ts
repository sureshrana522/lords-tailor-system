
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ------------------------------------------------------------------
// ✅ CONFIRMED CONFIGURATION (FROM SCREENSHOT) ✅
// ------------------------------------------------------------------

const myFirebaseConfig = {
  apiKey: "AIzaSyB62Cm6am_4sXoyIkTDwq-Ewerpqr79C3o",
  authDomain: "lords-tailor-5d768.firebaseapp.com",
  projectId: "lords-tailor-5d768",
  storageBucket: "lords-tailor-5d768.firebasestorage.app",
  messagingSenderId: "388897303244",
  appId: "1:388897303244:web:42bf72e4571b23306e3069",
  measurementId: "G-ZCX98QW7J5"
};

// ------------------------------------------------------------------

// Try to get config from Local Storage (Dynamic Setup via UI)
// This allows you to override it on other phones if needed, but defaults to the hardcoded one.
const getStoredConfig = () => {
  try {
    const stored = localStorage.getItem('LB_FIREBASE_CONFIG');
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.error("Invalid config in storage");
  }
  return null;
};

const userConfig = getStoredConfig();

// Logic: Use stored config first, otherwise use the Hardcoded Config
const finalConfig = (userConfig && userConfig.apiKey) 
    ? userConfig 
    : myFirebaseConfig;

let app;
let auth;
let db;

if (finalConfig && finalConfig.apiKey !== "YOUR_API_KEY_HERE") {
    try {
        app = initializeApp(finalConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        console.log("🔥 Firebase Connected Successfully!");
    } catch (e) {
        console.error("Firebase Initialization Error:", e);
    }
} else {
    console.warn("⚠️ Firebase Config Missing. Running in Offline Mode.");
}

export { auth, db };
export default app;
