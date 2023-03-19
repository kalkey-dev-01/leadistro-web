/* eslint-disable tailwindcss/no-custom-classname */
// eslint-disable-next-line import/no-extraneous-dependencies
import Atropos from 'atropos/react';
import Link from 'next/link';
import type { FC } from 'react';
import { useContext, useEffect, useState } from 'react';

import { ScrollContext } from '@/utils/scroll-observer';
// import { SizeContext } from '@/utils/size-observer';

const Navbar: FC<{ fontName: { className: string } }> = ({ fontName }) => {
  // const { innerWidth } = useContext(SizeContext);
  const { scrollY } = useContext(ScrollContext);
  const [showNav, setShowNav] = useState(true);
  const [open, setOpen] = useState(true);

  const handleScroll = () => {
    setShowNav(window.scrollY < scrollY);
  };
  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrollY]);
  return (
    <nav
      className={`fixed z-50  w-full px-4  transition-all duration-300 ${
        showNav ? 'top-2' : '-top-16'
      }`}
    >
      <ul className="flex flex-row items-center justify-between p-2 text-xl">
        <li className="">
          <Link
            href="/"
            className={`${fontName.className} border-none text-white hover:text-leadistroWhite`}
          >
            leadistro
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
                <Link
                  href="#"
                  className="border-none text-white hover:text-leadistroWhite"
                >
                  Sign In
                </Link>
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
          <li className="md:hidden">
            {open ? (
              <>
                <button className="rounded-md border-[0.75px] border-white text-white">
                  <svg
                    onClick={() => setOpen(!open)}
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
                </button>
              </>
            ) : (
              <>
                <div className="fixed  right-0 w-[55vw] bg-red-500">
                  <h1>Drawer</h1>
                </div>
              </>
            )}
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
