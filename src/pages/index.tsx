/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-plusplus */
import { Comfortaa, Poppins } from '@next/font/google';
import Atropos from 'atropos/react';
import Link from 'next/link';
import React, { useCallback, useContext, useRef, useState } from 'react';

import { Features } from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
// import ImageSequence from '@/components/ImageSequence';
import { Meta } from '@/layouts/Meta';
// import { Main } from '@/templates/Main';
import MainWithThree from '@/templates/r3fMain';
import { ScrollContext } from '@/utils/scroll-observer';
import { SizeContext } from '@/utils/size-observer';
// eslint-disable-next-line unused-imports/no-unused-imports

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// HOME PAGE

const Index = () => {
  // const [user, loading, error] = useAuthState(auth);
  const { innerWidth } = useContext(SizeContext);
  const { scrollY } = useContext(ScrollContext);
  const ref = useRef<HTMLVideoElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);
  const refContainer = useRef<HTMLDivElement>(null);
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  // console.log(user, 'User');
  // console.log(loading, 'loading');
  // console.log(error, 'error');
  return (
    <MainWithThree
      meta={
        <Meta
          title="leadistro"
          description="leadistro is a minimal enrichment and an Email Designer to send cold mails."
        />
      }
    >
      <div
        ref={refContainer}
        style={{ transform: `translateY(-${progress * 20}vh)` }}
        className=" hero mt-9 flex min-h-screen min-w-full flex-col items-center justify-between overflow-x-hidden bg-transparent py-24 px-4 md:flex-row md:px-6 "
      >
        {/* Title && Subtitle */}
        <div className="hero-content flex flex-col items-center justify-center text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]  md:items-start">
          <h1
            className={` ${poppins.className} text-3xl font-normal leading-snug   lg:text-4xl xl:text-5xl`}
          >
            Generate More Leads and Close More Deals with{' '}
            <span
              className={` ${comfortaa.className} text-3xl font-bold lg:text-4xl xl:text-6xl `}
            >
              {' '}
              leadistro{' '}
            </span>{' '}
          </h1>
          <h6
            className={`my-5 ${poppins.className} text-base font-light leading-normal lg:text-lg xl:text-xl `}
          >
            {' '}
            Say goodbye to manual lead generation and create effective email
            campaigns with the app that helps you reach your target audience and
            increase your sales.
          </h6>
          <div className="my-5">
            <Atropos className="atropos">
              <button data-atropos-offset={2}>
                <div
                  data-atropos-offset={7}
                  className="flex flex-row items-center justify-between space-x-2 rounded-full border-[1.75px] border-white bg-black px-4 py-2 text-white"
                >
                  <Link
                    href="/download/"
                    className="border-none text-white hover:text-leadistroWhite"
                  >
                    Learn More
                  </Link>
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </button>
            </Atropos>
          </div>
        </div>
        {/* Video */}
        <video
          controls={false}
          ref={ref}
          autoPlay={true}
          muted
          playsInline
          className={` h-full ${
            innerWidth < 640 ? 'max-w-md' : 'max-w-xl'
          }   pointer-events-none scale-100 bg-transparent object-cover md:scale-150 ${
            imageLoaded
              ? 'opacity-0'
              : '-translate-y-10 opacity-100 md:-translate-y-5'
          } ${
            scrollY > 300
              ? 'scale-[1.75] opacity-10 transition-opacity md:scale-150'
              : 'scale-150 opacity-100'
          }   
            `}
          onLoad={handleImageLoaded}
        >
          <source
            // eslint-disable-next-line global-require
            src={'/outtro.webm'}
            type="video/webm"
          />
        </video>
      </div>
      {/* !!!!//! START SECOND SECTION */}
      <div className="min-h-screen min-w-full bg-transparent">
        <HowItWorks />
      </div>
      <div className="min-h-screen min-w-full">
        <Features />
      </div>
    </MainWithThree>
  );
};

export default Index;
