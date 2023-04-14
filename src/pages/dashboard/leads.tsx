import React from 'react';

import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

const leads = () => {
  return (
    <DashboardMain
      meta={
        <Meta
          title="Research Leads"
          description="Start Your Research using domain enrichment."
        />
      }
    >
      <div className="min-w-full bg-black text-white">Researh leads</div>
    </DashboardMain>
  );
};

export default leads;
