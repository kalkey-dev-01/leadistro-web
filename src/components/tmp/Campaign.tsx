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

// Importing Inner Width from sizecontext
// import { SizeContext } from '@/utils/size-observer';

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
  // const { innerWidth } = React.useContext(SizeContext);
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
  // console.warn(innerWidth, 'Inner Width');

  return (
    <>
      <div className="grid h-auto max-h-72 w-auto max-w-screen-sm grid-cols-3 items-start justify-start gap-2">
        <div className="col-span-2 flex flex-col items-center justify-center">
          <h1 className="font-poppins text-2xl font-semibold">Sales Funnel</h1>
          <div className="flex grow flex-row">
            <div>Last Quarter</div>
            <div>What Has Influenced</div>
            <div>Forecast for next Quarter</div>
            <div>What Can Be Improved</div>
          </div>
        </div>
        <h1 className="font-poppins text-2xl font-semibold">Sales Funnel</h1>
        <div className="row-span-2 flex flex-col items-center justify-center">
          <div>38%</div>
          <div>5000 growth in closed sales</div>
          <div>New Marketing Material have helped boost deals</div>
        </div>
        <div className="row-span-2 flex flex-col items-center justify-center">
          <div className="flex grow flex-row">
            <div>148984</div>
            <div>84792</div>
            <div>4048</div>
            <div>738</div>
          </div>
          <div className="flex grow flex-row">
            <div>Total Market</div>
            <div>Prospects</div>
            <div>leads</div>
            <div>Sales</div>
          </div>
          <div className="min-h-full min-w-full bg-lime-400">Chart</div>
        </div>
        <h1 className="font-poppins text-2xl font-semibold">Sales Funnel</h1>
        <h1 className="font-poppins text-2xl font-semibold">Sales Funnel</h1>
      </div>
    </>
  );
};

// {/* <Bar data={data} options={{ responsive: true }} /> */}

export default SalesFunnelChart;
