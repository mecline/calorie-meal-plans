import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWkI4ghJV1PtqF9_Pm5ulQI_WD5QJLK8Y",
  authDomain: "calorie-meal-planner.firebaseapp.com",
  projectId: "calorie-meal-planner",
  storageBucket: "calorie-meal-planner.appspot.com",
  messagingSenderId: "654009459802",
  appId: "1:654009459802:web:d4bff7992e5c56fb9e2a0a",
  measurementId: "G-HNVT9YBRBM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
