/* eslint-disable import/no-extraneous-dependencies */
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import type {
  DocumentData,
  FirestoreError,
  Timestamp,
} from 'firebase/firestore';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface Props {
  data: DocumentData[] | undefined;
  dataLoading: boolean;
  dataError: FirestoreError | undefined;
}

export interface ChartDataType {
  possibleLeads: number;
  searchQuery: string;
  time: Timestamp;
}

const SearchesChart: React.FC<Props> = ({ data, dataError, dataLoading }) => {
  // Filling The Labels with the timestamps and The Name of The Search i.e searchQuery
  // The data is in the form of [{time: Timestamp, searchQuery: string, possibleLeads: number}
  const labels: string[] = [];
  data?.forEach((element) => {
    labels.push(
      `
      ${element.searchQuery}
      ${element.time.toDate().toLocaleString()} 
      `
    );
  });
  // Filling the datasets with the data
  const dataSet = {
    labels,
    // Filling it with ChartDataType
    datasets: [
      {
        fill: true,
        label: 'Possible Leads',
        data: data?.map((element) => element.possibleLeads),
        borderColor: 'rgb(19, 18, 18)',
        backgroundColor: 'rgba(19, 18, 18, 0.2)',
      },
      {
        fill: false,
        label: 'Searches',
        data: data?.map((element) => element.searchQuery),
        borderColor: 'rgb(12, 144, 1)',
        backgroundColor: 'rgba(19, 18, 18, 0.2)',
      },
    ],
  };
  if (dataLoading) return <div>Loading...</div>;
  if (dataError) return <div>Error: {dataError.message}</div>;
  return (
    <>
      <div className=" min-h-[40vh] max-w-screen-sm border-2 border-leadistroDark">
        <Line
          options={{
            responsive: true,
          }}
          data={dataSet}
        />
      </div>
    </>
  );
};

export default SearchesChart;
