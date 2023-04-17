import type { FirebaseApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import firebaseApp, { auth } from '@/firebase/config';

const SavedLeadsList: React.FC<{}> = () => {
  const userEmail = auth.currentUser?.email as string;
  const db = getFirestore(firebaseApp as FirebaseApp);
  const pathStr = `users/${userEmail}/leads`;
  const [values, loading, error] = useCollectionData(collection(db, pathStr));
  console.log(values);

  return (
    <>
      {loading && <p>Loading</p>}
      {error && <p>error</p>}
      <h1>values</h1>
    </>
  );
};

export default SavedLeadsList;
