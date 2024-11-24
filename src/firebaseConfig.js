import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.FIREBASE_API_KEY,
  authDomain: `${Constants.expoConfig.extra.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: Constants.expoConfig.extra.FIREBASE_PROJECT_ID,
  storageBucket: `${Constants.expoConfig.extra.FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: Constants.expoConfig.extra.FIREBASE_SENDER_ID,
  appId: Constants.expoConfig.extra.FIREBASE_APP_ID,
  measurementId: Constants.expoConfig.extra.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
