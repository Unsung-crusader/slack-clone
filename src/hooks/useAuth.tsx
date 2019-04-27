import * as React from 'react';

import { auth, googleAuthProvider, firebase, db } from '../firebase';

type LoggedInUser = {
  id: string;
  name: string | null;
  photo: string | null;
  email: string | null;
  logout: () => void;
};

type NotLoggedInUser = {
  error?: string;
  signInWithGoogle: () => void;
};

// THE TYPES IS NOT PROPERLY DEFINED. TRYING TO FIGURE THIS OUT

export default function useAuth(): LoggedInUser & NotLoggedInUser {
  const [user, setUser] = React.useState<(NotLoggedInUser & LoggedInUser) | {}>({});

  async function signInWithGoogle() {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (err) {
      const notLoggedInUser = {
        signInWithGoogle,
        error: err.message,
      } as NotLoggedInUser;

      setUser(notLoggedInUser);
    }
  }

  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        const { photoURL, email, displayName, uid } = firebaseUser;

        const user = { photo: photoURL, email, name: displayName, id: uid };
        const loggedInUser: LoggedInUser = {
          ...user,
          logout: auth.signOut.bind(auth),
        };

        setUser(loggedInUser);

        db.collection('users')
          .doc(user.id)
          .set(user, { merge: true });
      } else {
        const notLoggedInUser = { signInWithGoogle } as NotLoggedInUser;

        setUser(notLoggedInUser);
      }
    });
  }, []);

  return user as NotLoggedInUser & LoggedInUser;
}
