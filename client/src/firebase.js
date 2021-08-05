import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STOREAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
  measurementId: process.env.REACT_APP_MEARUEMENT_ID,
};

const firebaseService = firebase.initializeApp(firebaseConfig);
export const dbService = firebase.firestore();
export const storageService = firebase.storage();

export default firebaseService;
