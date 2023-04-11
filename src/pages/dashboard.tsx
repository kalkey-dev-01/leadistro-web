import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/firebase/config';
import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

const DashBoard = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Error {error.message}</h1>;
  }
  return (
    <DashboardMain
      meta={
        <Meta
          title="Dashboard"
          description="leadistro is a minimal enrichment and an Email Designer to send cold mails."
        />
      }
    >
      <div
        className={`grid min-h-screen min-w-full grid-cols-1 items-center justify-center bg-white font-poppins md:grid-cols-3`}
      >
        <h1 className={`font-comfortaa text-4xl font-extrabold`}>
          leadistro Dashboard {user?.displayName ?? user?.email}
        </h1>
        <h1 className={`font-comfortaa text-4xl font-extrabold`}>
          leadistro Dashboard {user?.displayName ?? user?.email}
        </h1>
        <h1 className={`font-comfortaa text-4xl font-extrabold`}>
          leadistro Dashboard {user?.displayName ?? user?.email}
        </h1>
        <h1 className={`font-comfortaa text-4xl font-extrabold`}>
          leadistro Dashboard {user?.displayName ?? user?.email}
        </h1>
      </div>
    </DashboardMain>
  );
};

export default DashBoard;
