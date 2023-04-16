import type { FirebaseApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

import firebaseApp from '@/firebase/config';

const SavedLeadsList: React.FC<{}> = () => {
  const db = getFirestore(firebaseApp as FirebaseApp);
  const leadsCollection = collection(db, 'user/leads');

  const [data, loading, error] = useCollection(leadsCollection, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  console.log(data);

  return (
    <>
      <div>SavedLeadsList</div>
    </>
  );
};

export default SavedLeadsList;
