import React from 'react';
import { DocumentData, DocumentSnapshot } from '@firebase/firestore-types';

import { db } from '../firebase';

const cachedDoc = new Map();

export default function useDocWithCache(path: string): DocumentData {
  const [doc, setDoc] = React.useState<DocumentData | null>(cachedDoc.get(path));

  React.useEffect(() => {
    if (doc) return;

    async function fetchDoc() {
      const snapshot = (await db.doc(path).get()) as DocumentSnapshot;
      const doc = snapshot.data() as DocumentData;

      setDoc(doc);
      cachedDoc.set(path, doc);
    }

    fetchDoc();
  }, [path]);

  return doc as DocumentData;
}
