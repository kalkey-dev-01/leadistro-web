import { Comfortaa, Poppins } from '@next/font/google';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/firebase/config';
import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
        className={`${poppins.className}  flex flex-col items-center justify-center`}
      >
        <h1 className={`${comfortaa.className} text-4xl font-extrabold`}>
          leadistro Dashboard {user?.email}
        </h1>
      </div>
    </DashboardMain>
  );
};

export default DashBoard;
