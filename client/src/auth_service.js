import firebase from 'firebase';
import firebaseService from 'firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseService.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
