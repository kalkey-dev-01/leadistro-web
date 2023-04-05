/* eslint-disable tailwindcss/no-custom-classname */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Dialog, Transition } from '@headlessui/react';
import { Comfortaa, Poppins } from '@next/font/google';
import Atropos from 'atropos/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React, { Fragment, useContext, useEffect, useState } from 'react';

import { ScrollContext } from '@/utils/scroll-observer';

// import { SizeContext } from '@/utils/size-observer';
import Logo from '../../public/assets/images/CircLogoBlack.png';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Navbar: FC<{}> = () => {
  // const { innerWidth } = useContext(SizeContext);
  const { scrollY } = useContext(ScrollContext);
  const [showNav, setShowNav] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

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
            className={`${comfortaa.className} border-none text-white hover:text-leadistroWhite`}
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
              <button data-atropos-offset={10}>
                {/* The button to open modal */}
                <button
                  type="button"
                  onClick={openModal}
                  className="border-none text-white hover:text-leadistroWhite"
                >
                  Sign In
                </button>
              </button>
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
                    className={`${poppins.className} btn-block btn border-none bg-leadistroDark font-extrabold text-white hover:text-leadistroWhite`}
                  >
                    About Us
                  </Link>
                </li>
                <li className={` border-2 border-white`}>
                  <Link
                    href="/about/"
                    className={`${poppins.className} btn-block btn border-none bg-leadistroDark font-extrabold text-white hover:text-leadistroWhite`}
                  >
                    Downloads
                  </Link>
                </li>
                <li className={` border-2 border-white`}>
                  <button
                    type="button"
                    onClick={openModal}
                    className={`${comfortaa.className} text-2xl md:text-4xl `}
                  >
                    Sign In
                  </button>
                </li>
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
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
                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-screen-lg overflow-hidden rounded-2xl bg-leadistroDark/70 p-6 text-left align-middle shadow-xl backdrop-blur-[6px] transition-all">
                            <Dialog.Title
                              as="h2"
                              className="text-2xl font-medium leading-6 text-leadistroWhite"
                            >
                              Sign In
                            </Dialog.Title>
                            <div className="mt-2">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text text-xs text-white">
                                    Your Email
                                  </span>
                                </label>
                                <label className="input-group">
                                  <span>Email</span>
                                  <input
                                    type="email"
                                    placeholder="example@mail.com"
                                    className="input-bordered input"
                                  />
                                </label>
                                <label className="label">
                                  <span className="label-text text-xs text-white">
                                    Your Password
                                  </span>
                                </label>
                                <label className="input-group">
                                  <span>Password</span>
                                  <input
                                    type="password"
                                    placeholder="Password"
                                    className="input-bordered input"
                                  />
                                </label>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Got it, thanks!
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </ul>
            </button>
          </li>
        </ul>
      </ul>
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
