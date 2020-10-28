import firebase from 'firebase';
import {FIREBASE_API_KEY, FIREBASE_DATABASE_URL, FIREBBASE_AUTH_DOMAIN} from './Config';


var firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: "react-demo-4b667",
  storageBucket: "react-demo-4b667.appspot.com",
  messagingSenderId: "145148716002",
  appId: "1:145148716002:web:3d2a9aeea31bec4fc80fbb"
};
// Initialize Firebase
export const fb_obj = firebase.initializeApp(firebaseConfig);