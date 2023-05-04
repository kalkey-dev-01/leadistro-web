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
import { Bar } from 'react-chartjs-2';

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
  const BgCol: string[] = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    BgCol.push(`rgba(251, 251, 251,${i / 5})`);
  }

  const data = {
    labels: ['Website', 'Social Media', 'Email', 'Referral', 'Other'],
    datasets: [
      {
        label: 'Sales Funnel',
        data: [12, 19, 33, 5, 2],
        borderWidth: 1.5,
        borderRadius: 15,
        borderColor: 'rgba(251, 251, 251,1)',
        backgroundColor: BgCol,
      },
    ],
  };

  return (
    <>
      <div className="grid place-items-center rounded-[30px] border-2 border-leadistroWhite  ">
        <div className="grid grid-rows-[100px_75px_100px_minmax(300px_1fr)] md:grid-cols-[minmax(600px,1fr)_50px]">
          {/* 01 Heading Which is a flexbox column it has 2 sections which one of them is a heading the other things are buttons */}
          <div className="flex h-full w-full flex-col items-start justify-start gap-1 rounded-tl-[30px] rounded-br-[30px] border-r-2 border-b-2 border-b-leadistroWhite bg-leadistroDark p-4 text-white">
            <h1 className="font-poppins text-2xl font-semibold">
              Sales Funnel
            </h1>
            <div className="inline-block flex-row items-center justify-between gap-[2px] md:flex">
              <div className="btn-xs btn rounded-full bg-leadistroWhite text-leadistroDarkComp">
                Last Quarter
              </div>
              <div className="btn-xs btn rounded-full bg-leadistroWhite text-leadistroDarkComp">
                What Has Influenced
              </div>
              <div className="btn-xs btn rounded-full bg-leadistroWhite text-leadistroDarkComp">
                Forecast for next Quarter
              </div>
              <div className="btn-xs btn rounded-full bg-leadistroWhite text-leadistroDarkComp">
                What Can Be Improved
              </div>
            </div>
          </div>
          {/* 02 List Of All Icons */}
          <div className="row-span-5 flex h-full w-full flex-row items-center justify-between rounded-r-[30px]  border-leadistroWhite bg-leadistroDark p-2  py-5 text-leadistroWhite md:flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="btn-ghost btn-circle btn h-8 w-8"
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
              className="btn-ghost btn-circle btn h-8 w-8"
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
              className="btn-ghost btn-circle btn h-8 w-8"
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
              className="btn-ghost btn-circle btn h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
              />
            </svg>
          </div>
          <div className="row-span-4 grid h-full w-full grid-cols-[75_minmax(200px_1fr)] gap-1 rounded-bl-[30px] border-leadistroWhite  md:grid-cols-[100px_minmax(300px,1fr)]">
            {/* 03 Info on How the new things helped in sales */}
            <div className="flex h-full w-full flex-col items-center justify-evenly rounded-bl-[30px] bg-leadistroDarkComp px-1 text-center  text-leadistroDark">
              <div className="badge bg-leadistroGray/25 px-2 font-poppins text-xs font-semibold text-leadistroWhite">
                38%
              </div>
              <div className="px-2 font-poppins text-xs font-semibold text-leadistroWhite">
                5000 growth in closed sales
              </div>
              <div className="px-2 font-poppins text-xs font-semibold  text-leadistroWhite">
                New Marketing Material have helped boost deals
              </div>
            </div>
            {/* 04 A Column That has 2 sections one of them are badges and the next item is the graph itself */}
            <div className="flex h-full w-full flex-col items-center justify-center bg-leadistroDark p-2 text-leadistroWhite">
              <div className="flex w-full flex-row items-center justify-between text-center font-comfortaa">
                <div className="badge bg-leadistroWhite font-extrabold text-leadistroDarkComp">
                  148984 Total Market
                </div>
                <div className="badge bg-leadistroWhite font-extrabold text-leadistroDarkComp">
                  84792 Prospects
                </div>
                <div className="badge bg-leadistroWhite font-extrabold text-leadistroDarkComp">
                  4048 leads
                </div>
                <div className="badge bg-leadistroWhite font-extrabold text-leadistroDarkComp">
                  738 Sales
                </div>
              </div>
              <Bar
                data={data}
                options={{
                  responsive: true,
                  scales: { x: { display: false }, y: { display: false } },
                  plugins: {
                    legend: {
                      display: false,
                      position: 'bottom',
                      labels: {
                        textAlign: 'center',
                        color: 'white',
                        font: {
                          family: 'Comfortaa',
                        },
                      },
                    },
                    tooltip: {
                      backgroundColor: 'rgba(10,7,8,1)',
                      borderColor: 'rgba(251 ,251 ,251)',
                      borderWidth: 1,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesFunnelChart;
