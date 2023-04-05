import React from 'react';

type Props = {
  meta: React.ReactNode;
  children: React.ReactNode;
};

const DashboardMain: React.FC<Props> = ({ meta, children }) => {
  return (
    <>
      <div className="min-h-full min-w-full bg-leadistroWhite">
        {meta}
        {children}
      </div>
    </>
  );
};

export default DashboardMain;
