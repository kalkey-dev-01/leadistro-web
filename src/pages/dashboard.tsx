import { Comfortaa, Poppins } from '@next/font/google';
import React from 'react';

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
        className={`${poppins.className} flex flex-col items-center justify-center`}
      >
        <h1 className={`${comfortaa.className} text-4xl font-extrabold`}>
          leadistro Dashboard
        </h1>
      </div>
    </DashboardMain>
  );
};

export default DashBoard;
