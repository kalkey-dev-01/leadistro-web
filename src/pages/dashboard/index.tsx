/* eslint-disable import/no-extraneous-dependencies */
import type { FirebaseApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

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
        className={`grid min-h-full min-w-full grid-cols-1 items-center justify-center bg-leadistroWhite pl-3 font-poppins md:grid-cols-2`}
      >
        <ResponsiveContainer width="100%" height="75%">
          <LineChart
            width={480}
            height={360}
            data={searchesData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="possibleLeads"
              stroke="#8884d8"
              activeDot={{ r: 4 }}
            />
            <Line type="monotone" dataKey="searchQuery" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <h1 className={`font-comfortaa text-4xl font-extrabold`}>
          leadistro Dashboard {user?.displayName}
        </h1>
        {/* / <SavedLeadsList /> needs to be wrapped in a scrollable container height needs to be half screen and width should be automatic */}
        <div className=" max-h-[30vh] max-w-full overflow-y-scroll ">
          <SavedLeadsList />
        </div>
        <h1 className={`font-comfortaa text-4xl font-extrabold`}>
          leadistro Dashboard {user?.displayName}
        </h1>
      </div>
    </DashboardMain>
  );
};

export default DashBoard;
