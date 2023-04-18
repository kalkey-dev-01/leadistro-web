import type { FirebaseApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import firebaseApp, { auth } from '@/firebase/config';

interface Values {
  business_email: string;
  city: string;
  company_name: string;
  emailId: string;
  fullName: string;
  linkedInAddress: string;
  id: string;
}

const SavedLeadsList: React.FC<{}> = () => {
  const userEmail = auth.currentUser?.email as string;
  const db = getFirestore(firebaseApp as FirebaseApp);
  const pathStr = `users/${userEmail}/leads`;
  const [values, loading, error] = useCollectionData(collection(db, pathStr));
  const TypedValues = values as Values[];
  return (
    <>
      {loading && <p>Loading</p>}
      {error && <p>error</p>}
      <h1>
        {TypedValues &&
          TypedValues.map((value) => {
            return (
              <div
                key={value.id}
                className="card my-2 h-auto w-auto bg-neutral-800 p-4 text-leadistroWhite"
              >
                <h1 className="font-comfortaa text-lg font-semibold">
                  {value.fullName}
                </h1>
                <p className="font-poppins text-base font-medium">
                  {value.emailId}
                </p>
                <p className="font-poppins text-base font-bold">
                  {value.company_name}
                </p>
              </div>
            );
          })}
      </h1>
    </>
  );
};

export default SavedLeadsList;
