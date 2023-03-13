/* eslint-disable no-plusplus */
// import { gsap } from 'gsap';
import React from 'react';

// import ImageSequence from '@/components/ImageSequence';
import { Meta } from '@/layouts/Meta';
import { comfortaa, poppins } from '@/templates/Main';
// import { Main } from '@/templates/Main';
import MainWithThree from '@/templates/r3fMain';
// HOME PAGE

const Index = () => {
  // const Images: string[] = [];
  // for (let i = 10; i <= 171; i++) {
  //   const imageName = `/assets/images/seq${i}.png`;
  //   Images.push(imageName);
  // }
  // console.log(Images);
  // const timeline = gsap.timeline({
  //   repeat: -1,
  //   repeatDelay: 0.5,
  //   paused: true,
  // });
  // const ref = React.useRef<HTMLDivElement>(null);
  // const { current: divRef } = ref;
  // timeline.to(divRef, {
  //   opacity: 1,
  // });
  return (
    <MainWithThree
      meta={
        <Meta
          title="leadistro"
          description="leadistro is a minimal enrichment and an Email Designer to send cold mails."
        />
      }
    >
      <div className="flex flex-col items-center justify-center py-24 px-2  text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]   ">
        {/* Title && Subtitle */}
        <h1
          className={` ${poppins.className} text-3xl font-normal lg:text-4xl xl:text-5xl`}
        >
          Revolutionize Your Email Marketing with{' '}
          <span
            className={` ${comfortaa.className} text-3xl    font-bold lg:text-4xl xl:text-6xl `}
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
        {/* Button */}
        {/* <Atropos className="atropos">
          <button data-atropos-offset={5}>
            <div
              data-atropos-offset={12}
              className="flex flex-row items-center justify-between space-x-2 rounded-full border-[1.75px] border-white bg-black px-4 py-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <div data-atropos-offset={7}> Download </div>
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
        </Atropos> */}
      </div>
      {/* <a href="#">
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a> */}
    </MainWithThree>
  );
};

export default Index;
