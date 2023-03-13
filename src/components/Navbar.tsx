import Link from 'next/link';
import type { FC } from 'react';
import { useContext, useEffect, useState } from 'react';

import { ScrollContext } from '@/utils/scroll-observer';

const Navbar: FC<{ fontName: { className: string } }> = ({ fontName }) => {
  const { scrollY } = useContext(ScrollContext);
  const [showNav, setShowNav] = useState(true);
  const handleScroll = () => {
    setShowNav(window.scrollY < scrollY);
  };
  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrollY]);
  return (
    <nav
      className={`fixed z-10 w-full  max-w-screen-lg rounded-lg  border-2 border-white transition-all duration-300 ${
        showNav ? 'top-2' : '-top-16'
      }`}
    >
      <ul className="flex flex-row items-center text-xl">
        <li className="mx-4 my-2 flex-1">
          <Link
            href="/"
            className={`${fontName.className} border-none text-white hover:text-leadistroWhite`}
          >
            leadistro
          </Link>
        </li>
        <li className="mr-6">
          <Link
            href="/about/"
            className="border-none text-white hover:text-leadistroWhite"
          >
            About
          </Link>
        </li>
        <li className="mr-6">
          <a
            className="border-none text-white hover:text-leadistroWhite"
            href="#"
          >
            Features
          </a>
        </li>
        <li className="mr-6">
          <a
            className="border-none text-white hover:text-leadistroWhite"
            href="#"
          >
            Sign In
          </a>
        </li>
        <li className="mr-6">
          <Link
            href="/download/"
            className="border-none text-white hover:text-leadistroWhite"
          >
            Download
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
