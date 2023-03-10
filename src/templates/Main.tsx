/* eslint-disable import/no-extraneous-dependencies */
import { Comfortaa, Poppins } from '@next/font/google';
import type { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});

const Main = (props: IMainProps) => (
  <div
    className={`w-full bg-leadistroDark px-1 text-white antialiased ${comfortaa.className}  `}
  >
    {props.meta}

    <div className="mx-auto max-w-screen-lg">
      <header className={`${poppins.className} `}>
        <Navbar fontName={comfortaa} />
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
