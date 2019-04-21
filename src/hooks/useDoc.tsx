import React from 'react';
import { DocumentData, DocumentSnapshot } from '@firebase/firestore-types';

import { db } from '../firebase';

export default function useDoc(path: string) {
  const [doc, setDoc] = React.useState<DocumentData | null>(null);

  React.useEffect(() => {
    return db.doc(path).onSnapshot((snapshot: DocumentSnapshot) => {
      const doc = snapshot.data() as DocumentData;
      setDoc(doc);
    });
  }, []);

  return doc;
}
