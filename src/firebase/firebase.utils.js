import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAsYPSrKHXSxxm0lV4DKiHDBXEGvDNQpI4",
    authDomain: "honka-mujaan-tseh-db.firebaseapp.com",
    projectId: "honka-mujaan-tseh-db",
    storageBucket: "honka-mujaan-tseh-db.appspot.com",
    messagingSenderId: "1027211799243",
    appId: "1:1027211799243:web:3eab1cd22504f74c0e494e",
    measurementId: "G-91KPVKRBCC"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;