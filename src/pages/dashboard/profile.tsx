import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/firebase/config';
import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

const UserProfile = () => {
  const [user] = useAuthState(auth);
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
        Welcome {user?.displayName}
      </div>
    </DashboardMain>
  );
};

export default UserProfile;
