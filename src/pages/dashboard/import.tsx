import React from 'react';

import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

const Import = () => {
  return (
    <DashboardMain
      meta={
        <Meta
          title="Import contacts"
          description="Manage Your Campaign Contacts"
        />
      }
    >
      <div className="min-h-full min-w-full text-2xl">
        Import Contacts, arrange leads.
      </div>
    </DashboardMain>
  );
};

export default Import;
