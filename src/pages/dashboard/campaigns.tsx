import React from 'react';

import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

const Campaigns = () => {
  return (
    <DashboardMain
      meta={
        <Meta
          title="Campaigns"
          description="Email Campaigns Automation by leadistro"
        />
      }
    >
      <div className="min-h-full min-w-full text-2xl">Campaigns</div>
    </DashboardMain>
  );
};

export default Campaigns;
