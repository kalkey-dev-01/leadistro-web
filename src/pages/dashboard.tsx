import React from 'react';

import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

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
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold">leadistro Dashboard</h1>
      </div>
    </DashboardMain>
  );
};

export default DashBoard;
