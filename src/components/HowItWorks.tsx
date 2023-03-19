import React, { useContext, useRef } from 'react';

import { comfortaa } from '@/templates/Main';
import { ScrollContext } from '@/utils/scroll-observer';

import s from '../styles/hiw.module.css';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const blockProgress = sectionProgress - blockNo;
  if (blockProgress >= 0 && blockProgress < 1) return 1;
  return 0.2;
};

const HowItWorks: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const blockRefContainer = useRef<HTMLDivElement>(null);
  // numofpages = current block no + 2
  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = blockRefContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenHeight = window.innerHeight;
    const halfHeight = screenHeight / 2;
    const percentY =
      Math.min(
        clientHeight + halfHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + halfHeight
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }
  return (
    <div ref={blockRefContainer} className="bg-white text-black ">
      <div className="mx-auto flex min-h-screen max-w-screen-lg flex-col items-center justify-center px-10 py-24 text-4xl font-semibold md:py-28   md:text-5xl lg:px-20 lg:py-36  lg:text-6xl">
        <div className="leading-[1.15]">
          <h1 className={`my-2 font-black ${comfortaa.className}`}>
            How it Works
          </h1>
          <div
            className={s.hiworkText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            We know our tools and technologies inside out.
          </div>
          <span
            className={`${s.hiworkText} inline-block after:content-['_'] `}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            Our app has contributed to many projects, from small to large. We
            have worked on both Android and Websites to Decentralized-Web-Apps.
          </span>
          <div
            className={`${s.hiworkText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            We are still continuously refine our skills and knowledge and no
            work is less than a dream.
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
