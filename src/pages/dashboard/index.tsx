/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import type { FirebaseApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SearchesChart from '@/components/tmp/BarChartComponent';
import SavedLeadsList from '@/components/tmp/Recent-Saved-Leads';
import firebaseApp, { auth } from '@/firebase/config';
import { Meta } from '@/layouts/Meta';
import DashboardMain from '@/templates/dashboardMain';

const DashBoard = () => {
  const db = getFirestore(firebaseApp as FirebaseApp);
  const [user, loading, error] = useAuthState(auth);
  const pathStr = `users/${user?.email}/searches`;
  const [searchesData, searchesloading, searchesError] = useCollectionData(
    collection(db, pathStr)
  );
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
        className={`grid min-h-full min-w-full grid-cols-1 items-start justify-start gap-1 bg-leadistroWhite font-poppins md:grid-cols-2 lg:grid-cols-3 `}
      >
        <div className="col-span-2 h-full w-full rounded-md bg-black/30">
          <SearchesChart
            data={searchesData}
            dataError={searchesError}
            dataLoading={searchesloading}
          />
        </div>
        <div className="row-span-3 h-full w-full overflow-y-scroll rounded-md bg-black/20 p-3">
          <SavedLeadsList />
        </div>
        <div className="col-span-2 h-full w-full rounded-md bg-black/40">
          <SearchesChart
            data={searchesData}
            dataError={searchesError}
            dataLoading={searchesloading}
          />
        </div>
      </div>
    </DashboardMain>
  );
};

export default DashBoard;

// {/* <ResponsiveContainer width="100%" height="75%">
//           <LineChart
//             width={480}
//             height={360}
//             data={searchesData}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="time" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="possibleLeads"
//               stroke="#8884d8"
//               activeDot={{ r: 4 }}
//             />
//             <Line type="monotone" dataKey="searchQuery" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer> */}
