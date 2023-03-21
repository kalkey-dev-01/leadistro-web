import React, { useContext, useRef } from 'react';

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
  const numOfPages = 4;
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
    <div ref={blockRefContainer} className="bg-transparent text-white ">
      <div className="mx-2 flex min-h-screen max-w-screen-xl flex-col items-center justify-center px-10 py-24 text-4xl font-semibold drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] md:py-28   md:text-5xl lg:px-20 lg:py-36  lg:text-6xl">
        <div className="leading-[1.15]">
          <h1 className={`my-2 font-black   `}>How it Works</h1>
          <div
            className={s.hiworkText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            <div className="flex flex-col items-center justify-between md:flex-row">
              <h1>
                Firstly you should import your contacts using the following
                methods or use Enrichment to get some contacts.
              </h1>
            </div>
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
          <div
            className={`${s.hiworkText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 3),
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
