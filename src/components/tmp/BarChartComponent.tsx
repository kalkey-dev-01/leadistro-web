/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { Disclosure } from '@headlessui/react';
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

interface ChartDataType {
  possibleLeads: number;
  searchQuery: string;
  time: Timestamp;
}

interface Props {
  data: DocumentData[] | undefined;
  dataLoading: boolean;
  dataError: FirestoreError | undefined;
}

function ListOfSearches({ searches }: { searches: string[] }) {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-b-[30px] bg-leadistroDark/10 px-4 py-2 text-left text-sm font-medium text-leadistroWhite/90 hover:bg-leadistroDark/20 focus:outline-none focus-visible:ring focus-visible:ring-leadistroDark/50">
              <span>Show All Searches</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${
                  open ? 'rotate-180' : ''
                } h-6 w-6 text-leadistroWhite`}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                  clipRule="evenodd"
                />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel
              className="
                max-h-48 overflow-y-scroll
                rounded-b-[30px]
                bg-leadistroDarkComp
                px-4
                pt-4
                pb-2
                text-sm text-leadistroWhite
              "
            >
              <p>List of searches:</p>
              <ul className="max-h-max">
                {searches.map((search, index) => (
                  <li className="w-full" key={index}>
                    {search}
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

const SearchesChart: React.FC<Props> = ({ data, dataError, dataLoading }) => {
  const TypedData = data as ChartDataType[];
  const labels: string[] = [];
  TypedData?.forEach((element) => {
    labels.push(
      `
      Searched Term: ${element.searchQuery}
      Date: ${element.time.toDate().toLocaleDateString()}
      Time: ${element.time.toDate().toLocaleTimeString()}
      `
    );
  });
  const SearchTerms: string[] = [];
  TypedData.forEach((element) => SearchTerms.push(element.searchQuery));
  const dataSet = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Leads Generated from Search',
        data: TypedData?.map((element) => element.possibleLeads),
        borderWidth: 1.5,
        borderRadius: 30,
        borderColor: 'rgba(251 251 251)',
        backgroundColor: 'rgb(251 251 251)',
      },
    ],
  };
  if (dataLoading) return <div>Loading...</div>;
  if (dataError) return <div>Error: {dataError.message}</div>;
  return (
    <div className="card absolute top-3 right-3 max-h-min max-w-sm rounded-[30px] bg-leadistroDarkComp/90 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] backdrop-blur-md">
      <div className="card-body">
        <Bar
          options={{
            layout: { autoPadding: false },
            responsive: true,
            scales: {
              y: {
                offsetAfterAutoskip: false,
                display: false,
              },
              x: {
                offsetAfterAutoskip: false,
                display: false,
              },
            },
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
          data={dataSet}
        />
      </div>
      {/* // Create A Disclosure Component From Headless UI If Opened It Will show all the searches by the user */}
      <ListOfSearches searches={SearchTerms} />
    </div>
  );
};

export default SearchesChart;
// {/* <h1>{TypedData?.length}</h1>
