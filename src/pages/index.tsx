/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-plusplus */
import Atropos from 'atropos/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useContext, useRef, useState } from 'react';
// eslint-disable-next-line unused-imports/no-unused-imports
// import { useAuthState } from 'react-firebase-hooks/auth';
// eslint-disable-next-line unused-imports/no-unused-imports
import { Typewriter } from 'react-simple-typewriter';

import { Features } from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
// import { auth } from '@/firebase/config';
// import ImageSequence from '@/components/ImageSequence';
import { Meta } from '@/layouts/Meta';
import Img from '@/public/assets/images/MockupLaptop.png';
// import { Main } from '@/templates/Main';
import MainWithThree from '@/templates/r3fMain';
import { ScrollContext } from '@/utils/scroll-observer';
import { SizeContext } from '@/utils/size-observer';

// HOME PAGE

const Index = () => {
  // const [user, loading, error] = useAuthState(auth);
  const { innerWidth } = useContext(SizeContext);
  const { scrollY } = useContext(ScrollContext);
  // const ref = useRef<HTMLVideoElement>(null);
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
        className=" hero mt-9 flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-transparent py-24 px-4"
      >
        {/* Title && Subtitle */}
        <div className="hero-content flex flex-col items-center  justify-center text-center text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
          <h1
            className={`font-poppins text-3xl font-normal leading-5 md:text-4xl  md:leading-normal lg:text-5xl xl:text-6xl`}
          >
            <Typewriter
              words={
                innerWidth < 480
                  ? [
                      'Send Smart Emails',
                      'Scrape More Leads',
                      'Close More Deals',
                    ]
                  : [
                      'Send Smart Emails with',
                      'Scrape More Leads with',
                      'Close More Deals with',
                    ]
              }
              loop={0}
              typeSpeed={40}
              deleteSpeed={60}
              delaySpeed={5000}
              cursor={true}
              cursorStyle={'_'}
            />
          </h1>
          <span
            className={`font-comfortaa text-4xl font-bold  md:text-[3rem] lg:text-6xl xl:text-[4.5rem] `}
          >
            {innerWidth < 480 ? (
              <>
                <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  with
                </span>
                <br />
              </>
            ) : null}
            leadistro{' '}
          </span>{' '}
          <h6
            className={`my-5 font-poppins text-lg font-light leading-normal md:text-xl lg:text-2xl xl:text-3xl `}
          >
            Take the guesswork out of email marketing and achieve success with
            Leadistro.
          </h6>
          {/* Button */}
          <div className="my-5">
            <Atropos className="atropos">
              <button data-atropos-offset={2}>
                <div
                  data-atropos-offset={7}
                  className="btn flex flex-row items-center justify-between space-x-3 rounded-full border-[1.75px] border-white bg-leadistroDark text-white md:btn-lg xl:btn-xl hover:bg-leadistroDarkComp"
                >
                  <Link
                    href="/download/"
                    className="border-none text-white hover:text-leadistroWhite"
                  >
                    Download
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
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </button>
            </Atropos>
          </div>
        </div>
        {/* Second Sec */}
        <Image
          alt={'Web Mockup'}
          src={Img}
          onLoad={handleImageLoaded}
          className={`${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } h-full max-w-sm object-contain object-center md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl`}
        />
        {/* <div className="grid h-full w-full grid-cols-[3fr_0.5fr] place-items-center gap-4 text-4xl text-white">
          <div className="h-full w-full bg-white">Section 1</div>
          <div className="h-full w-full bg-white">Section 2</div>
        </div> */}
      </div>
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
