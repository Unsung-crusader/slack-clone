import * as React from 'react';

import { auth, googleAuthProvider, firebase, db } from '../firebase';

interface User {
  error?: string;
  email?: string;
  name?: string;
  uid?: string;
  photo?: string;
  logout?: () => void;
  signInWithGoogle?: () => void;
}

export default function useAuth() {
  const [user, setUser] = React.useState<any>({});

  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        const { photoURL, email, displayName, uid } = firebaseUser;

        const user = { photo: photoURL, email, name: displayName, id: uid };
        setUser({ ...user, logout: auth.signOut.bind(auth) });

        db.collection('users')
          .doc(user.id)
          .set(user, { merge: true });
      } else {
        setUser({ signInWithGoogle });
      }
    });
  }, []);

  async function signInWithGoogle() {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (err) {
      'The identity provider configuration is disabled.';
      setUser({ signInWithGoogle, error: err.message });
    }
  }

  return user;
}
