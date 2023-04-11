/* eslint-disable no-alert */
/* eslint-disable tailwindcss/no-custom-classname */
import { Comfortaa, Poppins } from '@next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

import { auth } from '@/firebase/config';
import logo from '@/public/assets/images/leadistroWhite.png';

type Props = {
  meta: React.ReactNode;
  children: React.ReactNode;
};
const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});
const DashboardMain: React.FC<Props> = ({ meta, children }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [SignOut] = useSignOut(auth);
  return (
    <>
      <div
        className={`${comfortaa.variable} ${poppins.variable} drawer-mobile drawer `}
      >
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="navbar flex-col items-start bg-transparent">
            {meta}
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 rounded-md bg-primary stroke-current text-leadistroWhite"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          <>{children}</>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay">
            leadistro
          </label>
          <ul className="menu w-[70vw] items-center space-y-8 bg-leadistroDark py-10 text-center font-poppins text-leadistroWhite md:w-[22.50vw]">
            <li className="flex flex-col items-center justify-center gap-2  ">
              <Image
                src={logo}
                alt={'logo'}
                width={75}
                height={75}
                className="rounded-2xl"
              />
              <h1 className="font-comfortaa text-lg font-bold md:text-3xl">
                leadistro
              </h1>
              <h2 className="font-light">Welcome Back</h2>
              <h3 className="font-normal">
                {user?.displayName ?? user?.email}
              </h3>
            </li>
            <li>
              <button className="btn-wide btn text-lg">Research Leads.</button>
            </li>
            <li>
              <button className="btn-wide btn text-lg">
                Create an email campaign
              </button>
            </li>
            <li>
              <button className="btn-wide btn text-lg">
                Design Your Email or Search Templates
              </button>
            </li>
            <li>
              <button className="btn-wide btn text-lg">Settings</button>
            </li>
            <li>
              <button
                onClick={async () => {
                  const success = await SignOut();
                  if (success) {
                    alert('You are sign out');
                    router.push('/');
                  }
                }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
// {/* <li>
//                 <a
//                   onClick={async () => {
//                     const success = await SignOut();
//                     if (success) {
//                       alert('You are sign out');
//                       router.push('/');
//                     }
//                   }}
//                 >
//                   Sign Out
//                 </a>
//               </li> */}
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
