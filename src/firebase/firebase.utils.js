import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKPwbY6VPd4hqm7z1XkbI7CuPBErqBusg",
    authDomain: "everyone-answers-36f45.firebaseapp.com",
    projectId: "everyone-answers-36f45",
    storageBucket: "everyone-answers-36f45.appspot.com",
    messagingSenderId: "1075423187040",
    appId: "1:1075423187040:web:463c5958804607a12e3305",
    measurementId: "G-NZ674E3ZC5"
};

firebase.initializeApp(config);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

