import React from 'react';

import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

const UserProfile = () => {
  return (
    <DashboardMain
      meta={
        <Meta
          title="UserProfile"
          description="Email UserProfile Automation by leadistro"
        />
      }
    >
      <div className="min-h-full min-w-full text-2xl">UserProfile</div>
    </DashboardMain>
  );
};

export default UserProfile;
