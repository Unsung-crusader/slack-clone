import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  authDomain: 'slack-clone-17343.firebaseapp.com',
  databaseURL: 'https://slack-clone-17343.firebaseio.com',
  projectId: 'slack-clone-17343',
  storageBucket: 'slack-clone-17343.appspot.com',
  apiKey: process.env.FIREBASE_API_KEY,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleAuthProvider, firebase };
