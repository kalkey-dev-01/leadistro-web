import type { FirebaseApp } from 'firebase/app';
import { doc, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';

import firebaseApp, { auth } from '@/firebase/config';
import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

interface UserProfileInterface {
  userEmail: string;
  lastLoginOn: string;
  uid: string;
  additionalInfo: AdditionalInfo;
}

interface AdditionalInfo {
  isEmailVerified: boolean;
  name: string;
  picture: string;
}

const UserProfile = () => {
  const userEmail = auth.currentUser?.email as string;
  const db = getFirestore(firebaseApp as FirebaseApp);
  const [values, loading, error] = useDocument(doc(db, 'users', userEmail), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const TypedValues = values?.data() as UserProfileInterface;
  if (loading) {
    return <div className="text-center text-2xl">loading</div>;
  }
  if (error) {
    return <div className="text-center text-2xl">error</div>;
  }
  return (
    <DashboardMain
      meta={
        <Meta
          title="UserProfile"
          description="Email UserProfile Automation by leadistro"
        />
      }
    >
      <div className="min-h-full min-w-full text-2xl text-white">
        Welcome {TypedValues && TypedValues.additionalInfo.name}
      </div>
    </DashboardMain>
  );
};

export default UserProfile;
