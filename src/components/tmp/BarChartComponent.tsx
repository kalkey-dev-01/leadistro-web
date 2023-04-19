/* eslint-disable import/no-extraneous-dependencies */
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import type {
  DocumentData,
  FirestoreError,
  Timestamp,
} from 'firebase/firestore';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
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
  const labels: string[] = [];
  data?.forEach((element) => {
    labels.push(
      `
      ${element.searchQuery}
      ${element.time.toDate().toLocaleDateString()}
      ${element.time.toDate().toLocaleTimeString()}
      `
    );
  });

  const dataSet = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Possible Leads',
        data: data?.map((element) => element.possibleLeads),
        borderWidth: 1.5,
        borderRadius: 30,
        borderColor: 'rgba(19, 18, 18, 0.3)',
        backgroundColor: 'rgb(19, 18, 18)',
      },
    ],
  };
  if (dataLoading) return <div>Loading...</div>;
  if (dataError) return <div>Error: {dataError.message}</div>;
  return (
    <>
      <div style={{ width: 900, height: 900 }}>
        <Bar
          options={{
            responsive: true,
            scales: {
              y: {
                min: 0,
                max: 1000,
              },
              x: {
                display: false,
              },
            },
            plugins: {},
          }}
          data={dataSet}
        />
      </div>
    </>
  );
};

export default SearchesChart;
