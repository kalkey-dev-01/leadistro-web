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
        {meta}
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="navbar flex-col items-start bg-leadistroWhite lg:hidden">
            <div className="w-full flex-none border-b-2 border-b-leadistroDark ">
              <label
                htmlFor="my-drawer-3"
                className="btn-ghost btn-circle btn text-leadistroDark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.1}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.100 6.100h16.5M3.100 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </label>
              <h1 className="-mb-0.5 font-comfortaa text-lg font-extrabold">
                Dashboard
              </h1>
            </div>
          </div>
          <>{children}</>
        </div>
        {/* Drawer */}
        <div className="drawer-side ease-in-out">
          <label htmlFor="my-drawer-3" className="drawer-overlay">
            leadistro
          </label>
          <ul className=" w-64 items-start space-y-4 bg-leadistroDark py-10 font-poppins   text-leadistroWhite md:space-y-2">
            <li
              onClick={() => router.push('/dashboard')}
              role="button"
              className="no-animation flex flex-col items-center justify-center self-center"
            >
              <Image
                src={logo}
                alt={'logo'}
                width={80}
                height={80}
                className="mb-8 rounded-xl"
              />
              <h1 className="mb-4 font-comfortaa text-3xl font-semibold md:text-3xl">
                leadistro
              </h1>
            </li>
            <li>
              <div
                onClick={() => router.push('/dashboard/leads')}
                role="button"
                className="btn-ghost btn flex flex-row-reverse items-center justify-end gap-5 text-lg normal-case"
              >
                <p> Research Leads.</p>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0417 27.7083C22.485 27.7083 27.7083 22.485 27.7083 16.0417C27.7083 9.59835 22.485 4.3100 16.0417 4.3100C9.59835 4.3100 4.3100 9.59835 4.3100 16.0417C4.3100 22.485 9.59835 27.7083 16.0417 27.7083Z"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.625 30.625L24.2812 24.2812"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div
                onClick={() => router.push('/dashboard/import')}
                role="button"
                className="btn-ghost btn flex flex-row-reverse items-center justify-end gap-5 text-lg normal-case"
              >
                <p>Import Contacts</p>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.334 30.625V27.7083C23.334 26.1612 22.7194 24.67100 21.6254 23.5835C20.5315 22.4896 19.0477 21.8100 17.5007 21.8100H7.29232C5.74522 21.8100 4.26149 22.4896 3.161003 23.5835C2.07357 24.67100 1.45898 26.1612 1.45898 27.7083V30.625"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.3958 16.0417C15.61100 16.0417 18.2292 13.43 18.2292 10.2083C18.2292 6.98667 15.61100 4.3100 12.3958 4.3100C9.17417 4.3100 6.5625 6.98667 6.5625 10.2083C6.5625 13.43 9.17417 16.0417 12.3958 16.0417Z"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.166 11.668V20.418"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M33.541 16.043H24.791"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div
                onClick={() => router.push('/dashboard/templates')}
                role="button"
                className="btn-ghost btn flex flex-row-reverse items-center justify-end gap-5 text-lg normal-case"
              >
                <p>Email Templates</p>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5833 4.3100H4.3100V14.5833H14.5833V4.3100Z"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.6243 4.3100H20.416V14.5833H30.6243V4.3100Z"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.6243 20.418H20.416V30.6263H30.6243V20.418Z"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.5833 20.418H4.3100V30.6263H14.5833V20.418Z"
                    stroke="#FBFBFB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div
                onClick={() => router.push('/dashboard/campaigns')}
                role="button"
                className="btn-ghost btn flex flex-row-reverse  items-center justify-end gap-5 text-lg normal-case"
              >
                <p>Start Campaigns</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.100 6.100v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.100m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.100"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div
                // onClick={() => router.push('/dashboard/leads')}
                role="button"
                className="btn-ghost btn flex flex-row-reverse  items-center justify-end gap-5 text-lg normal-case"
              >
                <p>distroGPT Alpha</p>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0506 17.5C20.4815 17.5 20.9082 17.5849 21.3063 17.7498C21.7044 17.9147 22.0661 18.1564 22.3708 18.4611C22.61005 18.7657 22.9172 19.12100 23.0821 19.5256C23.247 19.9237 23.3319 20.3503 23.3319 20.7812V22.0996C23.3321 22.8879 23.1618 23.6669 22.8329 24.3833C22.5039 25.0997 22.0239 25.7364 21.4258 26.25C19.1435 28.21 15.81004 29.1667 11.6608 29.1667C7.44625 29.1667 4.1825 28.21 1.90458 26.25C1.30734 25.7368 0.827973 25.1007 0.499262 24.3851C0.17055 23.6695 0.000247971 22.8914 0 22.104V20.7798C0.000386662 19.9098 0.346259 19.01006 0.961571 18.4605C1.57688 17.8455 2.41126 17.5 3.28125 17.5H20.0506ZM20.0506 19.68100H3.27979C2.98971 19.68100 2.71151 19.8027 2.50639 20.0079C2.30128 20.213 2.18604 20.4912 2.18604 20.7812V22.104C2.18604 23.0592 2.60458 23.9677 3.32937 24.5919C5.16396 26.1698 7.92896 26.9792 11.6608 26.9792C15.3942 26.9792 18.1621 26.1669 20.0025 24.58100C20.3609 24.2793 20.6485 23.8973 20.8456 23.4676C21.0427 23.038 21.1446 22.5708 21.1444 22.0981V20.7783C21.1444 20.4883 21.0291 20.2101 20.824 20.0049C20.6189 19.7998 20.3407 19.6846 20.0506 19.6846V19.68100ZM11.515 0.008100006L11.6608 0C11.9251 1.11459e-05 12.1805 0.0957288 12.3797 0.269452C12.5789 0.4431100 12.7084 0.683151 12.7444 0.945L12.10046 1.093100L12.10031 2.18604H17.8573C18.72100 2.18604 19.5621 2.53174 20.17100 3.1471C20.7928 3.76245 21.1385 4.59705 21.1385 5.46729V12.0371C21.1385 12.9073 20.7928 13.7419 20.17100 14.3573C19.5621 14.9726 18.72100 15.3183 17.8573 15.3183H5.46146C4.59122 15.3183 3.100662 14.9726 3.14126 14.3573C2.52591 13.7419 2.18021 12.9073 2.18021 12.0371V5.468100C2.18021 5.03773 2.26513 4.61093 2.43012 4.21273C2.59511 3.81454 2.83693 3.452100 3.14178 3.14804C3.44663 2.84333 3.80852 2.60166 4.20679 2.43685C4.60506 2.27204 5.03189 2.18731 5.46292 2.18100L10.5671 2.18604V1.093100C10.5671 0.829226 10.6631 0.573687 10.8371 0.374463C11.0111 0.1100239 11.2514 0.0458308 11.5135 0.0102083L11.6608 0L11.5121 0.0102083L11.515 0.008100006ZM17.8587 4.3100H5.46292C5.17284 4.3100 4.89464 4.49023 4.68952 4.69535C4.4844 4.90047 4.36917 5.17867 4.36917 5.468100V12.0371C4.36917 12.6408 4.85917 13.1308 5.46292 13.1308H17.8587C18.1488 13.1308 18.427 13.0156 18.6321 12.8105C18.8373 12.6054 18.9525 12.3272 18.9525 12.0371V5.468100C18.9525 5.17867 18.8373 4.90047 18.6321 4.69535C18.427 4.49023 18.1488 4.3100 17.8587 4.3100ZM8.37958 6.5625C8.62491 6.55268 8.8697 6.59252 9.09925 6.67963C9.3288 6.766100 9.53839 6.89933 9.71544 7.06944C9.8925 7.23955 10.0334 7.44366 10.1296 7.66955C10.2258 7.89544 10.21004 8.13843 10.21004 8.38396C10.21004 8.62948 10.2258 8.87248 10.1296 9.09836C10.0334 9.32425 9.8925 9.52837 9.71544 9.69848C9.53839 9.86858 9.3288 10.0012 9.09925 10.0883C8.8697 10.11004 8.62491 10.2152 8.37958 10.2054C7.90911 10.1866 7.46418 9.98645 7.13797 9.64692C6.811100 9.30739 6.62957 8.8548 6.62957 8.38396C6.62957 7.91311 6.811100 7.46053 7.13797 7.121C7.46418 6.78147 7.90911 6.58133 8.37958 6.5625ZM14.9304 6.5625C15.11007 6.55268 15.4205 6.59252 15.6501 6.67963C15.8796 6.766100 16.0892 6.89933 16.2663 7.06944C16.4433 7.23955 16.5842 7.44366 16.6804 7.66955C16.7766 7.89544 16.8262 8.13843 16.8262 8.38396C16.8262 8.62948 16.7766 8.87248 16.6804 9.09836C16.5842 9.32425 16.4433 9.52837 16.2663 9.69848C16.0892 9.86858 15.8796 10.0012 15.6501 10.0883C15.4205 10.11004 15.11007 10.2152 14.9304 10.2054C14.4599 10.1866 14.015 9.98645 13.6888 9.64692C13.3626 9.30739 13.1804 8.8548 13.1804 8.38396C13.1804 7.91311 13.3626 7.46053 13.6888 7.121C14.015 6.78147 14.4599 6.58133 14.9304 6.5625Z"
                    fill="#FBFBFB"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div
                onClick={async () => {
                  const success = await SignOut();
                  if (success) {
                    alert('You are sign out');
                    router.push('/');
                  }
                }}
                role="button"
                className="btn-ghost btn flex flex-row-reverse items-center justify-end gap-5 font-comfortaa text-lg normal-case"
              >
                <p>Sign Out</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 25 25"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.100 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div
                onClick={() => router.push('/dashboard/profile')}
                role="button"
                className="btn-ghost btn flex flex-row-reverse items-center  justify-end gap-5 font-comfortaa text-lg normal-case"
              >
                <p>{user?.displayName ?? user?.email}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.100 12c0-5.385-4.365-9.100-9.100-9.100S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.100a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.100 9a3.100 3.100 0 11-7.5 0 3.100 3.100 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
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
// {/* <path d="M20.0506 17.5C20.4815 17.5 20.9082 17.5849 21.3063 17.7498C21.7044 17.9147 22.0661 18.1564 22.3708 18.4611C22.61005 18.7657 22.9172 19.12100 23.0821 19.5256C23.247 19.9237 23.3319 20.3503 23.3319 20.7812V22.0996C23.3321 22.8879 23.1618 23.6669 22.8329 24.3833C22.5039 25.0997 22.0239 25.7364 21.4258 26.25C19.1435 28.21 15.81004 29.1667 11.6608 29.1667C7.44625 29.1667 4.1825 28.21 1.90458 26.25C1.30734 25.7368 0.827973 25.1007 0.499262 24.3851C0.17055 23.6695 0.000247971 22.8914 0 22.104V20.7798C0.000386662 19.9098 0.346259 19.01006 0.961571 18.4605C1.57688 17.8455 2.41126 17.5 3.28125 17.5H20.0506ZM20.0506 19.68100H3.27979C2.98971 19.68100 2.71151 19.8027 2.50639 20.0079C2.30128 20.213 2.18604 20.4912 2.18604 20.7812V22.104C2.18604 23.0592 2.60458 23.9677 3.32937 24.5919C5.16396 26.1698 7.92896 26.9792 11.6608 26.9792C15.3942 26.9792 18.1621 26.1669 20.0025 24.58100C20.3609 24.2793 20.6485 23.8973 20.8456 23.4676C21.0427 23.038 21.1446 22.5708 21.1444 22.0981V20.7783C21.1444 20.4883 21.0291 20.2101 20.824 20.0049C20.6189 19.7998 20.3407 19.6846 20.0506 19.6846V19.68100ZM11.515 0.008100006L11.6608 0C11.9251 1.11459e-05 12.1805 0.0957288 12.3797 0.269452C12.5789 0.4431100 12.7084 0.683151 12.7444 0.945L12.10046 1.093100L12.10031 2.18604H17.8573C18.72100 2.18604 19.5621 2.53174 20.17100 3.1471C20.7928 3.76245 21.1385 4.59705 21.1385 5.46729V12.0371C21.1385 12.9073 20.7928 13.7419 20.17100 14.3573C19.5621 14.9726 18.72100 15.3183 17.8573 15.3183H5.46146C4.59122 15.3183 3.100662 14.9726 3.14126 14.3573C2.52591 13.7419 2.18021 12.9073 2.18021 12.0371V5.468100C2.18021 5.03773 2.26513 4.61093 2.43012 4.21273C2.59511 3.81454 2.83693 3.452100 3.14178 3.14804C3.44663 2.84333 3.80852 2.60166 4.20679 2.43685C4.60506 2.27204 5.03189 2.18731 5.46292 2.18100L10.5671 2.18604V1.093100C10.5671 0.829226 10.6631 0.573687 10.8371 0.374463C11.0111 0.1100239 11.2514 0.0458308 11.5135 0.0102083L11.6608 0L11.5121 0.0102083L11.515 0.008100006ZM17.8587 4.3100H5.46292C5.17284 4.3100 4.89464 4.49023 4.68952 4.69535C4.4844 4.90047 4.36917 5.17867 4.36917 5.468100V12.0371C4.36917 12.6408 4.85917 13.1308 5.46292 13.1308H17.8587C18.1488 13.1308 18.427 13.0156 18.6321 12.8105C18.8373 12.6054 18.9525 12.3272 18.9525 12.0371V5.468100C18.9525 5.17867 18.8373 4.90047 18.6321 4.69535C18.427 4.49023 18.1488 4.3100 17.8587 4.3100ZM8.37958 6.5625C8.62491 6.55268 8.8697 6.59252 9.09925 6.67963C9.3288 6.766100 9.53839 6.89933 9.71544 7.06944C9.8925 7.23955 10.0334 7.44366 10.1296 7.66955C10.2258 7.89544 10.21004 8.13843 10.21004 8.38396C10.21004 8.62948 10.2258 8.87248 10.1296 9.09836C10.0334 9.32425 9.8925 9.52837 9.71544 9.69848C9.53839 9.86858 9.3288 10.0012 9.09925 10.0883C8.8697 10.11004 8.62491 10.2152 8.37958 10.2054C7.90911 10.1866 7.46418 9.98645 7.13797 9.64692C6.811100 9.30739 6.62957 8.8548 6.62957 8.38396C6.62957 7.91311 6.811100 7.46053 7.13797 7.121C7.46418 6.78147 7.90911 6.58133 8.37958 6.5625ZM14.9304 6.5625C15.11007 6.55268 15.4205 6.59252 15.6501 6.67963C15.8796 6.766100 16.0892 6.89933 16.2663 7.06944C16.4433 7.23955 16.5842 7.44366 16.6804 7.66955C16.7766 7.89544 16.8262 8.13843 16.8262 8.38396C16.8262 8.62948 16.7766 8.87248 16.6804 9.09836C16.5842 9.32425 16.4433 9.52837 16.2663 9.69848C16.0892 9.86858 15.8796 10.0012 15.6501 10.0883C15.4205 10.11004 15.11007 10.2152 14.9304 10.2054C14.4599 10.1866 14.015 9.98645 13.6888 9.64692C13.3626 9.30739 13.1804 8.8548 13.1804 8.38396C13.1804 7.91311 13.3626 7.46053 13.6888 7.121C14.015 6.78147 14.4599 6.58133 14.9304 6.5625Z" fill="#FBFBFB"/> */}
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
