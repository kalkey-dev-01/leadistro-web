/* eslint-disable no-alert */
/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from 'next/router';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';

import { auth } from '@/firebase/config';

type Props = {
  meta: React.ReactNode;
  children: React.ReactNode;
};

const DashboardMain: React.FC<Props> = ({ meta, children }) => {
  const router = useRouter();
  const [SignOut] = useSignOut(auth);
  return (
    <>
      <div className="min-h-full min-w-full bg-leadistroWhite">
        {meta}
        <div className="drawer drawer-mobile md:drawer">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <label
            htmlFor="my-drawer-2"
            className="btn-ghost drawer-button absolute left-3 top-3  block text-black md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7 text-leadistroDark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
          <div className="drawer-content flex flex-col items-center justify-start  md:flex-row">
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu w-80 bg-base-100 p-4 text-base-content">
              <li>
                <a>Enrich Leads</a>
              </li>
              <li>
                <a>Design Mail Or Use Templates</a>
              </li>
              <li>
                <a
                  onClick={async () => {
                    const success = await SignOut();
                    if (success) {
                      alert('You are sign out');
                      router.push('/');
                    }
                  }}
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;

//     < !--Page content here-- >

//   </div >
// <div className="drawer-side">
//   <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//   <ul className="menu p-4 w-80 bg-base-100 text-base-content">
//     <!-- Sidebar content here -->
//     <li><a>Sidebar Item 1</a></li>
//     <li><a>Sidebar Item 2</a></li>
//   </ul>

// </div>
//   </div >
