import React from 'react';

import { db } from '../firebase';
import firebase from '@firebase/firestore-types';

export default function useCollection(path: string, orderBy?: string): any[] {
  const [docs, setDocs] = React.useState<any | null>(null);

  React.useEffect(() => {
    let collection = db.collection(path);

    if (orderBy) {
      collection = collection.orderBy(orderBy) as firebase.CollectionReference;
    }

    return collection.onSnapshot((snapshot: firebase.QuerySnapshot) => {
      const docsWithId: any[] = [];

      snapshot.forEach(doc => {
        docsWithId.push({ ...doc.data(), id: doc.id });
      });

      setDocs(docsWithId);
    });
  }, []);

  return docs;
}
