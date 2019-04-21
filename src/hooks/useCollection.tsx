import React from 'react';

import { db } from '../firebase';
import { QuerySnapshot, CollectionReference } from '@firebase/firestore-types';

export default function useCollection(path: string, orderBy?: string): any[] {
  const [docs, setDocs] = React.useState<any | null>(null);

  React.useEffect(() => {
    let collection = db.collection(path);

    if (orderBy) {
      collection = collection.orderBy(orderBy) as CollectionReference;
    }

    return collection.onSnapshot((snapshot: QuerySnapshot) => {
      const docsWithId: any[] = [];

      snapshot.forEach(doc => {
        docsWithId.push({ ...doc.data(), id: doc.id });
      });

      setDocs(docsWithId);
    });
  }, []);

  return docs;
}
