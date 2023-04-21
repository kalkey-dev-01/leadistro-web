import React from 'react';

import SalesFunnelChart from '@/components/tmp/Campaign';
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
      <div className="flex min-h-full min-w-full flex-col items-center justify-center bg-black text-white">
        <SalesFunnelChart data={null} error={null} loading={false} />
      </div>
    </DashboardMain>
  );
};

export default leads;
