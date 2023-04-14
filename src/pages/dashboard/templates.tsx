import React from 'react';

import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

const Templates = () => {
  return (
    <DashboardMain
      meta={
        <Meta
          title="Templates"
          description="Email Templates Automation by leadistro"
        />
      }
    >
      <div className="min-h-full min-w-full text-2xl">Templates</div>
    </DashboardMain>
  );
};

export default Templates;
