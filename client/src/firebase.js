import firebase from 'firebase';
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBOn6xygPPUTUIPARrzdbDJQOxbgetnuTQ",
  authDomain: "travel-here-36a2e.firebaseapp.com",
  projectId: "travel-here-36a2e",
  storageBucket: "travel-here-36a2e.appspot.com",
  messagingSenderId: "346694494088",
  appId: "1:346694494088:web:b7ea9a7ddab833dc0f3c3d",
  measurementId: "G-0GD4RTL0QZ"
};

const firebaseService = firebase.initializeApp(firebaseConfig);
export const dbService = firebase.firestore();


export default firebaseService;