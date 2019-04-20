import * as React from 'react';

import { db } from '../firebase';

type doc = {
  id: string;
  type: string;
};

export default function useChannel(name: string): doc[] | null {
  const [channel, setChannel] = React.useState<doc[] | null>(null);

  React.useEffect(() => {
    return db.collection(name).onSnapshot(snapshot => {
      const docsWithId: doc[] = [];

      snapshot.forEach(doc => {
        const { topic } = doc.data();

        docsWithId.push({ type: topic, id: doc.id });
      });

      setChannel(docsWithId);
    });
  }, []);

  return channel;
}
