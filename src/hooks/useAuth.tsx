import * as React from 'react';

import { auth, googleAuthProvider, firebase } from '../firebase';

interface User {
  error?: string;
  email?: string;
  name?: string;
  uid?: string;
  photo?: string;
  signInWithGoogle?: () => void;
}

export default function useAuth() {
  const [user, setUser] = React.useState<any>({});

  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged((user: any) => {
      const { photoURL, email, displayName, uid } = user;
      if (user) {
        setUser({ photo: photoURL, email, name: displayName, id: uid });
      } else {
        setUser({ signInWithGoogle });
      }
    });
  }, []);

  async function signInWithGoogle() {
    try {
      const result = await auth.signInWithPopup(googleAuthProvider);
      console.log(result);
    } catch (err) {
      'The identity provider configuration is disabled.';
      setUser({ signInWithGoogle, error: err.message });
    }
  }

  return user;
}
