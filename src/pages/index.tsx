/* eslint-disable no-plusplus */
// import { gsap } from 'gsap';
import React from 'react';

// import ImageSequence from '@/components/ImageSequence';
import { Meta } from '@/layouts/Meta';
import { comfortaa, poppins } from '@/templates/Main';
// import { Main } from '@/templates/Main';
import MainWithThree from '@/templates/r3fMain';

// eslint-disable-next-line unused-imports/no-unused-imports

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
      <div className="z-10 mt-16 flex flex-col items-center justify-between py-24 px-4 md:flex-row ">
        {/* Title && Subtitle */}
        <div className="flex  flex-col items-center justify-center text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]  md:items-start">
          <h1
            className={` ${poppins.className}   text-3xl font-normal leading-tight  lg:text-4xl xl:text-5xl`}
          >
            Revolutionize Your Email Marketing with{' '}
            <span
              className={` ${comfortaa.className}  text-3xl font-bold lg:text-4xl xl:text-6xl `}
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
        {/* !!!!//!The Second Item Of the Row */}
        <video
          autoPlay
          muted
          playsInline
          loop
          className="-z-20 h-full max-w-xl bg-transparent object-cover"
        >
          <source
            // eslint-disable-next-line global-require
            src={'/mainSeq.mp4'}
            type="video/mp4"
          />
        </video>
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
