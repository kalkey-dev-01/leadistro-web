// Creating a sales funnel chart using chart.js and react-chartjs-2
// This chart is a React Functional Component which takes in data, loading, error from a firestore api
// Step is to Create the Component using TypeScript and set it up with charts.
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

const SalesFunnelChart: React.FC<{
  data: any;
  loading: boolean;
  error: any;
}> = ({ error, loading }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // Using A Fake Data for The sales funnel chart
  const data = {
    labels: ['Website', 'Social Media', 'Email', 'Referral', 'Other'],
    datasets: [
      {
        label: 'Sales Funnel',
        data: [12, 19, 33, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="min-h-full min-w-full bg-leadistroDarkComp/75">
      <h1 className="border-2 border-white bg-transparent font-comfortaa text-2xl font-bold text-leadistroWhite">
        Sales Funnel
      </h1>
      <div className="flex w-full items-center justify-between">
        {/* Creating a chart using chart.js and react-chartjs-2 */}
        <Bar data={data} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default SalesFunnelChart;
