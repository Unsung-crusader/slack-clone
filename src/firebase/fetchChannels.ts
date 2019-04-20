import { db } from './index';

type doc = {
  type: string;
  id: string;
};

export default function fetchChannels(cb: (doc: doc[]) => void) {
  db.collection('channels').onSnapshot(snapshot => {
    const docsWithId: doc[] = [];

    snapshot.forEach(doc => {
      const { topic } = doc.data();

      docsWithId.push({ type: topic, id: doc.id });
    });

    return cb(docsWithId);
  });
}
