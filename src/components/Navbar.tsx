/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
/* eslint-disable tailwindcss/no-custom-classname */
// eslint-disable-next-line import/no-extraneous-dependencies
// import { Dialog, Transition } from '@headlessui/react';
import { Dialog, Tab, Transition } from '@headlessui/react';
import Atropos from 'atropos/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { auth } from '@/firebase/config';
import signIn from '@/firebase/signIn';
import signUp from '@/firebase/signUp';
import Logo from '@/public/assets/images/CircLogoBlack.png';
import ModalImage from '@/public/assets/images/SignInModalDesign.png';
import { ScrollContext } from '@/utils/scroll-observer';
import { SizeContext } from '@/utils/size-observer';

function AuthModal(isOpen: boolean, closeModal: VoidFunction) {
  const { innerWidth } = useContext(SizeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [handleGoogleSignIn] = useSignInWithGoogle(auth);
  const handleSignIn = async (event: any) => {
    event.preventDefault();
    const { result, error } = await signIn(email, password);
    Cookies.set('user', JSON.stringify(result));
    if (error) {
      return alert(`Something Went Wrong ${error}`);
    }
    if (result) {
      return alert(`You Have been successfully signed in`);
    }
    return router.push('/dashboard');
  };
  const handleRegister = async (event: any) => {
    event.preventDefault();
    const { result, error } = await signUp(email, password);
    Cookies.set('user', JSON.stringify(result));
    if (error) {
      return alert(`Something Went Wrong ${error}`);
    }
    if (result) {
      return alert(`You have successfully registered your account.`);
    }
    return router.push('/dashboard');
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-leadistroDark/25 " />
        </Transition.Child>
        <div className="fixed inset-0 mt-10 overflow-y-auto">
          <div className="flex min-h-full  items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 translate-y-6  scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-6 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-screen-lg overflow-hidden rounded-2xl bg-leadistroDark/80 p-6 text-left align-middle shadow-xl backdrop-blur-[10px] transition-all">
                <div className=" flex min-h-[75vh] flex-1 flex-col-reverse items-center justify-center md:flex-row">
                  <div className="flex  flex-1 flex-col items-center gap-5 md:items-start">
                    <Tab.Group>
                      <Tab.Panels>
                        {/* Sign In Panel */}
                        <Tab.Panel>
                          <Dialog.Title
                            as="h2"
                            className="my-5 text-2xl font-medium text-leadistroWhite  md:mb-8 md:text-4xl"
                          >
                            Authenticate Yourself
                          </Dialog.Title>
                          <div className="form-control gap-2">
                            <div className="my-2 flex-1">
                              <label className="label">
                                <span className="label-text text-xs text-white">
                                  Your Email
                                </span>
                              </label>
                              <label className="input-group-md input-group">
                                <span className="text-base font-bold">
                                  Email
                                </span>
                                <input
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                    // console.log('Email ID', email);
                                  }}
                                  type="email"
                                  placeholder="example@mail.com"
                                  className="input-bordered input bg-leadistroDark text-leadistroWhite"
                                />
                              </label>
                            </div>
                            <div className="mb-2 flex-1">
                              <label className="label">
                                <span className="label-text text-xs text-white">
                                  Your Password
                                </span>
                              </label>
                              <label className="input-group-md input-group">
                                <span className="text-base font-bold">
                                  Password
                                </span>
                                <input
                                  onChange={(e) => {
                                    setPassword(e.target.value);
                                    // console.log('Password ID', password);
                                  }}
                                  type="password"
                                  placeholder="Password"
                                  className="input-bordered input bg-leadistroDark text-leadistroWhite"
                                />
                              </label>
                            </div>
                            <button
                              className="btn-md btn bg-leadistroWhite text-leadistroDark hover:border-2 hover:border-leadistroWhite hover:bg-transparent hover:text-leadistroWhite"
                              type="submit"
                              onClick={handleSignIn}
                            >
                              Sign In
                            </button>
                          </div>
                        </Tab.Panel>
                        {/* Sign Up / Register Panel */}
                        <Tab.Panel>
                          <Dialog.Title
                            as="h2"
                            className="my-5 text-2xl font-medium text-leadistroWhite  md:mb-8 md:text-4xl"
                          >
                            Register Your Account
                          </Dialog.Title>
                          <div className="form-control gap-2">
                            <div className="my-2 flex-1">
                              <label className="label">
                                <span className="label-text text-xs text-white">
                                  Your Email
                                </span>
                              </label>
                              <label className="input-group-md input-group">
                                <span className="text-base font-bold">
                                  Email
                                </span>
                                <input
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                    // console.log('Email ID', email);
                                  }}
                                  type="email"
                                  placeholder="example@mail.com"
                                  className="input-bordered input bg-leadistroDark text-leadistroWhite"
                                />
                              </label>
                            </div>
                            <div className="my-2 flex-1">
                              <label className="label">
                                <span className="label-text text-xs text-white">
                                  Your Password
                                </span>
                              </label>
                              <label className="input-group-md input-group">
                                <span className="text-base font-bold">
                                  Password
                                </span>
                                <input
                                  onChange={(e) => {
                                    setPassword(e.target.value);
                                    // console.log('Password ID', password);
                                  }}
                                  type="password"
                                  placeholder="Password"
                                  className="input-bordered input bg-leadistroDark text-leadistroWhite"
                                />
                              </label>
                            </div>
                            <button
                              className=" btn border-2 border-leadistroGray text-leadistroWhite hover:bg-leadistroGray"
                              type="submit"
                              onClick={handleRegister}
                            >
                              Sign Up
                            </button>
                          </div>
                        </Tab.Panel>
                      </Tab.Panels>
                      <Tab.List>
                        <Tab>
                          <div className="btn-md btn bg-leadistroGray text-xl font-semibold text-leadistroWhite">
                            {' '}
                            Sign In{' '}
                          </div>
                        </Tab>
                        <Tab>
                          <div className="btn-md btn mx-2 bg-leadistroGray text-xl font-semibold text-leadistroWhite">
                            {' '}
                            Register{' '}
                          </div>
                        </Tab>
                      </Tab.List>
                    </Tab.Group>
                    <div
                      onClick={() => {
                        handleGoogleSignIn().then((res) => {
                          Cookies.set('user', JSON.stringify(res));
                          router.push('/dashboard');
                        });
                      }}
                      className="btn flex w-full flex-row items-center justify-between bg-leadistroWhite px-4 md:w-[55%]"
                    >
                      <h3 className="text-xl font-semibold">
                        Sign In With Google
                      </h3>
                      <svg
                        width="60"
                        height="62"
                        viewBox="0 0 60 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                      >
                        <path
                          d="M59.4377 25.3719C59.3218 24.7222 58.9848 24.1343 58.4853 23.711C57.9859 23.2877 57.3557 23.0558 56.7049 23.0558H30.5493C29.8127 23.0558 29.1063 23.3526 28.5855 23.881C28.0647 24.4095 27.7721 25.1262 27.7721 25.8734V36.7722C27.7721 37.5195 28.0647 38.2362 28.5855 38.7646C29.1063 39.293 29.8127 39.5899 30.5493 39.5899H41.5525C40.7689 40.9319 39.6948 42.0756 38.4115 42.9345C36.064 44.4444 33.3279 45.2142 30.5493 45.1464C27.6682 45.113 24.8708 44.1594 22.5545 42.4208C20.2382 40.6823 18.5208 38.2474 17.6464 35.462V35.4564C16.6737 32.5637 16.6737 29.4255 17.6464 26.5328V26.5271C18.5216 23.7425 20.2393 21.3085 22.5555 19.5705C24.8717 17.8326 27.6687 16.8792 30.5493 16.8456C32.1498 16.8082 33.7418 17.0919 35.234 17.6804C36.7262 18.2688 38.0892 19.1505 39.2447 20.2747C39.7691 20.7845 40.4695 21.0656 41.1958 21.0577C41.9221 21.0498 42.6164 20.7536 43.13 20.2325L51.095 12.1514C51.3589 11.8839 51.567 11.5651 51.7068 11.2143C51.8467 10.8634 51.9154 10.4875 51.9089 10.1091C51.9024 9.73065 51.8209 9.35742 51.6691 9.01168C51.5173 8.66593 51.2985 8.35475 51.0256 8.09671C45.4823 2.82361 38.1475 -0.0761694 30.5493 0.00152174C24.8834 -0.0156069 19.3254 1.57371 14.5023 4.59023C9.67914 7.60676 5.78262 11.9305 3.25216 17.0738L3.24938 17.0795C1.10416 21.3951 -0.00900547 26.1626 5.48678e-05 30.996C0.00668345 35.8284 1.11899 40.5933 3.24938 44.9153L3.25216 44.9181C5.78262 50.0615 9.67914 54.3852 14.5023 57.4017C19.3254 60.4183 24.8834 62.0076 30.5493 61.9905C38.0073 62.1824 45.2555 59.4737 50.8089 54.4194L50.8117 54.4165C53.8219 51.4787 56.1933 47.9346 57.7735 44.0118C59.3537 40.0891 60.1079 35.8744 59.9876 31.6384C59.9887 29.5371 59.8046 27.4399 59.4377 25.3719ZM30.5493 5.63688C35.7452 5.58595 40.8183 7.23938 45.0129 10.3509L40.9776 14.4449C37.9163 12.2955 34.2719 11.1651 30.5493 11.2102C27.1504 11.2273 23.8175 12.163 20.8936 13.9212C17.9697 15.6793 15.5604 18.1963 13.9138 21.213L10.9478 18.88L9.32312 17.6007C11.558 13.9319 14.6828 10.9057 18.3989 8.81122C22.1149 6.7167 26.2983 5.62379 30.5493 5.63688ZM6.88751 39.1757C5.11248 33.8712 5.11248 28.1207 6.88751 22.8163L11.8365 26.7103C11.2037 29.5314 11.2037 32.4606 11.8365 35.2817L6.88751 39.1757ZM30.5493 56.3551C26.2978 56.3687 22.1139 55.276 18.3973 53.1814C14.6807 51.0869 11.5555 48.0605 9.32034 44.3912L10.3729 43.5628L13.9166 40.7733C15.562 43.7909 17.9705 46.3089 20.894 48.0681C23.8175 49.8272 27.1503 50.7639 30.5493 50.7817C33.731 50.8205 36.8769 50.0964 39.7307 48.6685L44.4269 52.3681C40.2953 55.0689 35.4632 56.4572 30.5493 56.3551ZM48.6733 48.5783L48.165 48.1754L44.3408 45.1633C46.3471 42.9645 47.6956 40.2321 48.2289 37.285C48.3031 36.8783 48.2881 36.46 48.1851 36.0598C48.082 35.6596 47.8933 35.2874 47.6325 34.9695C47.3716 34.6516 47.045 34.3959 46.6758 34.2204C46.3066 34.045 45.9038 33.9543 45.4961 33.9546H33.3265V28.6911H54.2915C54.386 29.6632 54.4332 30.6494 54.4332 31.6384C54.5952 37.805 52.5488 43.8251 48.6733 48.5783Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src={ModalImage}
                      fill={false}
                      height={innerWidth > 480 ? 3 * 120 : innerWidth * 0.75}
                      width={innerWidth > 480 ? 4 * 120 : innerWidth * 0.75}
                      className="object-cover object-center"
                      alt="Modal"
                    />
                  </div>
                </div>
                {/* Close Modal X */}
                <div className="">
                  <button
                    type="button"
                    className="absolute top-2 right-2 rounded-full bg-leadistroDark p-2 text-leadistroWhite md:top-5 md:left-5 md:rounded-none md:bg-transparent md:p-0"
                    onClick={closeModal}
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

const Navbar: FC<{}> = () => {
  // const { innerWidth } = useContext(SizeContext);
  const { scrollY } = useContext(ScrollContext);
  const [showNav, setShowNav] = useState(true);

  const [user] = useAuthState(auth);

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleScroll = () => {
    setShowNav(window.scrollY < scrollY);
  };
  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrollY]);
  return (
    <nav
      className={`fixed z-50  w-full border-b-[0.75px] border-b-leadistroWhite/25 px-4 backdrop-blur-[6px]  transition-all duration-300 ${
        showNav ? 'top-0' : '-top-16'
      }`}
    >
      <ul className="flex h-full flex-row items-center justify-between p-2 text-xl ">
        <li className="px-2 py-1.5">
          <Link
            href="/"
            className={`border-none font-comfortaa text-white hover:text-leadistroWhite`}
          >
            <div className=" glass flex flex-row items-center justify-center gap-2 rounded-3xl border-2 border-leadistroGray pr-4">
              <Image src={Logo} alt="Logo" width={35} height={35} />
              <Atropos className="atropos">
                <button data-atropos-offset={5}>
                  <h3 className="pt-1 font-bold">leadistro</h3>
                </button>
              </Atropos>
            </div>
          </Link>
        </li>
        <ul className="flex flex-1 flex-row items-center justify-end space-x-8">
          <li className="hidden md:inline-block">
            <Atropos className="atropos">
              <button data-atropos-offset={10}>
                <Link
                  href="/about/"
                  className="border-none text-white hover:text-leadistroWhite"
                >
                  About Us
                </Link>
              </button>
            </Atropos>
          </li>
          <li className="hidden md:inline-block">
            <Atropos className="atropos">
              <button data-atropos-offset={10}>
                <Link
                  href="#"
                  className="border-none text-white hover:text-leadistroWhite"
                >
                  Features
                </Link>
              </button>
            </Atropos>
          </li>
          <li className="hidden md:inline-block">
            <Atropos className="atropos">
              <div data-atropos-offset={10}>
                {/* The button to open modal */}
                {!user?.email && (
                  <button
                    onClick={openModal}
                    className="border-none text-white hover:text-leadistroWhite"
                  >
                    Sign In
                  </button>
                )}
                {user?.email && (
                  <Link
                    href="/dashboard/"
                    className="border-none text-white hover:text-leadistroWhite"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </Atropos>
          </li>
          <li className="hidden md:inline-block">
            <Atropos className="atropos">
              <button data-atropos-offset={10}>
                <div
                  data-atropos-offset={7}
                  className="flex flex-row items-center justify-between space-x-2 rounded-full border-[1.75px] border-white bg-black px-4 py-2 text-white"
                >
                  <Link
                    href="/download/"
                    className="border-none text-white hover:text-leadistroWhite"
                  >
                    Download
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </Atropos>
          </li>
          {/* Drawer DropDown */}
          <li className="md:hidden">
            <button
              className={` dropdown-end dropdown rounded-md border-[0.75px] border-white text-white`}
            >
              <label tabIndex={0} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="m-1 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content rounded-box  my-4 flex h-[75vh] w-[87.5vw] flex-col items-center justify-start gap-2 bg-leadistroDark/50  p-2  shadow transition-all"
              >
                {/* <Image /> */}
                <Image
                  // eslint-disable-next-line global-require
                  src={Logo}
                  alt="Leadistro Logo"
                  className={`my-10`}
                  width={150}
                  height={150}
                />
                <li className={` border-2 border-white`}>
                  <Link
                    href="/about/"
                    className={`btn-block btn border-none bg-leadistroDark font-poppins font-extrabold text-white hover:text-leadistroWhite`}
                  >
                    About Us
                  </Link>
                </li>
                <li className={` border-2 border-white`}>
                  <Link
                    href="/about/"
                    className={`btn-block btn border-none bg-leadistroDark font-poppins font-extrabold text-white hover:text-leadistroWhite`}
                  >
                    Downloads
                  </Link>
                </li>
                <li className={` border-2 border-white`}>
                  <div
                    onClick={openModal}
                    className={`font-comfortaa text-2xl md:text-4xl `}
                  >
                    Sign In
                  </div>
                </li>
              </ul>
            </button>
          </li>
        </ul>
      </ul>
      {AuthModal(isOpen, closeModal)}
    </nav>
  );
};

export default Navbar;

// export const NewNavbar: FC<{ children: ReactNode }> = ({ children }) => {
//   const { scrollY } = useContext(ScrollContext);
//   const [showNav, setShowNav] = useState(true);
//   // const [open, setOpen] = useState(true);

//   const handleScroll = () => {
//     setShowNav(window.scrollY < scrollY);
//   };
//   useEffect(() => {
//     document.addEventListener('scroll', handleScroll, { passive: true });
//     return () => document.removeEventListener('scroll', handleScroll);
//   }, [scrollY]);
//   return (
//     <>
//       <div className="drawer">
//         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col">
//           {/* <!-- Navbar --> */}
//           <div
//             className={`sticky  w-full px-4  transition-all duration-300 ${
//               showNav ? 'top-2' : '-top-16'
//             }`}
//           >
//             <div className="flex-none lg:hidden">
//               <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   className="inline-block h-6 w-6 stroke-current"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   ></path>
//                 </svg>
//               </label>
//             </div>
//             <div className="mx-2 flex-1 px-2">Navbar Title</div>
//             <div className="hidden flex-none lg:block">
//               <ul className="menu menu-horizontal">
//                 {/* <!-- Navbar menu content here --> */}
//                 <li>
//                   <a>Navbar Item 1</a>
//                 </li>
//                 <li>
//                   <a>Navbar Item 2</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* <!-- Page content here --> */}
//           {children}
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
//           <ul className="menu w-80 bg-base-100 p-4">
//             <li>
//               <a>Sidebar Item 1</a>
//             </li>
//             <li>
//               <a>Sidebar Item 2</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };
