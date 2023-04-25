// Creating a sales funnel chart using chart.js and react-chartjs-2
// This chart is a React Functional Component which takes in data, loading, error from a firestore api
// Step is to Create the Component using TypeScript and set it up with charts.
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
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
  Filler
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
      <div className="grid place-items-center">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
          <div className="col-span-2 flex flex-col items-start justify-start">
            <h1 className="font-poppins text-2xl font-semibold">
              Sales Funnel
            </h1>
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="btn-xs btn rounded-full bg-leadistroGray text-leadistroWhite">
                Last Quarter
              </div>
              <div className="btn-xs btn rounded-full bg-leadistroGray text-leadistroWhite">
                What Has Influenced
              </div>
              <div className="btn-xs btn rounded-full bg-leadistroGray text-leadistroWhite">
                Forecast for next Quarter
              </div>
              <div className="btn-xs btn rounded-full bg-leadistroGray text-leadistroWhite">
                What can be improved
              </div>
            </div>
            <div className="col-span-1 row-span-2 flex h-full  flex-col items-center justify-center">
              {/* Icon 1 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-9 w-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>
              {/* Icon 2 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-9 w-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              {/* Icon 3 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-9 w-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
              {/* Icon 4 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-9 w-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// {/* <Bar data={data} options={{ responsive: true }} /> */}

export default SalesFunnelChart;

// (
//   <div className={'grid place-items-center '}>
//     <div className="grid h-auto w-auto grid-cols-3  gap-4 p-4">
//       <div className="col-span-2 flex flex-col items-start justify-start">
//         <h1 className="font-poppins text-2xl font-semibold">Sales Funnel</h1>
//         <div className="flex flex-row items-center justify-between gap-2">
//           <div className="btn-xs btn rounded-full bg-leadistroGray text-leadistroWhite">
//             Last Quarter
//           </div>
//           <div className="btn-xs btn rounded-full bg-leadistroGray text-leadistroWhite">
//             What Has Influenced
//           </div>
//           <div className="btn-xs btn rounded-full bg-leadistroGray text-leadistroWhite">
//             Forecast for next Quarter
//           </div>
//           <div className="btn-xs btn rounded-full bg-leadistroGray text-leadistroWhite">
//             What Can Be Improved
//           </div>
//         </div>
//       </div>
// <div className="col-span-1 row-span-4 flex h-full  flex-col items-center justify-center">
//   {/* Icon 1 */}
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="h-9 w-9"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
//     />
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
//     />
//   </svg>
//   {/* Icon 2 */}
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="h-9 w-9"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
//     />
//   </svg>
//   {/* Icon 3 */}
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="h-9 w-9"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
//     />
//   </svg>
//   {/* Icon 4 */}
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="h-9 w-9"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
//     />
//   </svg>
// </div>
//       <div className="col-span-1 row-span-5 flex h-full flex-col items-center justify-between">
//         <div className="badge">38%</div>
//         <div className="badge">5000 growth in closed sales</div>
//         <div className="badge">
//           New Marketing Material have helped boost deals
//         </div>
//       </div>
//       <div className="col-span-3 row-span-3 flex h-full w-full flex-col items-center justify-center">
//         <div className="flex grow flex-row items-start justify-between text-center">
//           <div className="badge">148984 Total Market</div>
//           <div className="badge">84792 Prospects</div>
//           <div className="badge">4048 leads</div>
//           <div className="badge">738 Sales</div>
//         </div>
//         <div className="border-red-500">
//           <Bar
//             data={data}
//             options={{
//               responsive: true,
//               scales: { x: { display: false }, y: { display: false } },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// );
