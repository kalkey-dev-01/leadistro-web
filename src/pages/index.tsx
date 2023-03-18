/* eslint-disable no-plusplus */
// import { gsap } from 'gsap';
// import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useContext, useRef } from 'react';

import { Features } from '@/components/Features';
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

  console.log(scrollY);
  return (
    <MainWithThree
      meta={
        <Meta
          title="leadistro"
          description="leadistro is a minimal enrichment and an Email Designer to send cold mails."
        />
      }
    >
      <div className="z-10  mt-16 flex flex-col items-center justify-between overflow-x-hidden py-24 md:flex-row  md:px-4 ">
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
        </div>
        <video
          controls={false}
          ref={ref}
          autoPlay={true}
          muted
          playsInline
          className={`h-full ${
            innerWidth < 640 ? 'max-w-sm' : 'max-w-2xl'
          }   pointer-events-none scale-150 bg-transparent object-cover   `}
        >
          <source
            // eslint-disable-next-line global-require
            src={'/outtro.webm'}
            type="video/webm"
          />
        </video>
      </div>
      {/* !!!!//! START SECOND SECTION */}
      <div className="my-14 min-h-screen min-w-full">
        <Features />
      </div>
    </MainWithThree>
  );
};

export default Index;
