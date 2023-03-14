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
        {/* Button */}
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
