/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-plusplus */
import Atropos from 'atropos/react';
import Link from 'next/link';
import React, { useCallback, useContext, useRef, useState } from 'react';

import { Features } from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
// import ImageSequence from '@/components/ImageSequence';
import { Meta } from '@/layouts/Meta';
import { comfortaa, poppins } from '@/templates/Main';
// import { Main } from '@/templates/Main';
import MainWithThree from '@/templates/r3fMain';
import { ScrollContext } from '@/utils/scroll-observer';
import { SizeContext } from '@/utils/size-observer';
// eslint-disable-next-line unused-imports/no-unused-imports

// HOME PAGE

const Index = () => {
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
  // console.log(scrollY, 'scrollY');
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
        className="  mt-16 flex min-h-screen min-w-full flex-col items-center justify-between overflow-x-hidden bg-transparent py-24 md:flex-row  md:px-4 "
      >
        {/* Title && Subtitle */}
        <div className="flex  flex-col items-center justify-center text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]  md:items-start">
          <h1
            className={` ${poppins.className} text-3xl font-normal leading-tight  lg:text-4xl xl:text-5xl`}
          >
            Revolutionize Your Email Marketing with{' '}
            <span
              className={` ${comfortaa.className} text-3xl font-bold lg:text-4xl xl:text-6xl `}
            >
              {' '}
              leadistro{' '}
            </span>{' '}
          </h1>
          <h6 className="my-10  text-base font-normal lg:text-xl xl:text-2xl ">
            {' '}
            Unlock the full potential of your campaigns with our powerful market
            researcher app
          </h6>
          <div className="inline-block md:hidden">
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
          </div>
        </div>
        {/* Video */}
        <video
          controls={false}
          ref={ref}
          autoPlay={true}
          muted
          playsInline
          className={`h-full ${
            innerWidth < 640 ? 'max-w-sm' : 'max-w-2xl'
          }   pointer-events-none scale-100 bg-transparent object-cover md:scale-150 ${
            imageLoaded
              ? 'opacity-0'
              : '-translate-y-10 opacity-100 md:-translate-y-5'
          } ${
            scrollY > 300
              ? 'scale-[1.75] transition-opacity md:scale-150'
              : 'scale-150'
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
