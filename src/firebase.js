import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyApQzsPyaxeWD1JEPxVoKiUgFUKhBSk8jo',
  authDomain: 'slack-clone-17343.firebaseapp.com',
  databaseURL: 'https://slack-clone-17343.firebaseio.com',
  projectId: 'slack-clone-17343',
  storageBucket: 'slack-clone-17343.appspot.com',
  messagingSenderId: '211913142656',
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleAuthProvider, firebase };
