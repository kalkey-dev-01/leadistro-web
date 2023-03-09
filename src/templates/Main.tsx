import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-leadistroDark px-1 text-white antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-lg">
      <header className="sticky top-0 z-50 border-2 border-b border-white ">
        <nav className="">
          <ul className="flex flex-wrap items-center text-xl">
            <li className="mx-4 my-2 flex-1">
              <Link
                href="/"
                className=" border-none text-white hover:text-leadistroWhite"
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
                Pricing
              </a>
            </li>
            <li className="mr-6">
              <Link
                href="/blog/"
                className="border-none text-white hover:text-leadistroWhite"
              >
                Download
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="pt-16 pb-8">
        <h1 className="text-3xl font-bold text-white">{AppConfig.title}</h1>
        <h2 className="text-xl">{AppConfig.description}</h2>
      </div>

      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="#">leadistro</a>.
      </footer>
    </div>
  </div>
);

export { Main };
