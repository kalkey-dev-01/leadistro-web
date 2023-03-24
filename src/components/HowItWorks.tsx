import { Poppins } from '@next/font/google';
import Image from 'next/image';
import React, { useContext, useRef } from 'react';

import { ScrollContext } from '@/utils/scroll-observer';
import { SizeContext } from '@/utils/size-observer';

import btmsheet from '../../public/assets/images/btmsheet.png';
import s from '../styles/hiw.module.css';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const blockProgress = sectionProgress - blockNo;
  if (blockProgress >= 0 && blockProgress < 1) return 1;
  return 0.2;
};

// const comfortaa = Comfortaa({
//   subsets: ['latin'],
//   variable: '--font-comfortaa',
// });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const HowItWorks: React.FC = () => {
  const { innerWidth } = useContext(SizeContext);
  const { scrollY } = useContext(ScrollContext);
  const blockRefContainer = useRef<HTMLDivElement>(null);
  // numofpages = current block no + 2
  const numOfPages = 4;
  let progress = 0;
  const { current: elContainer } = blockRefContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenHeight = window.innerHeight;
    const halfHeight = screenHeight / 3.33;
    const percentY =
      Math.min(
        clientHeight + halfHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + halfHeight
      ) / clientHeight;
    progress = Math.min(
      numOfPages - 0.75,
      Math.max(0.75, percentY * numOfPages)
    );
    console.log(percentY, 'Percent Y');
    console.log(progress, 'Progress');
    console.log(offsetTop, 'offest TOP');
  }

  return (
    <div ref={blockRefContainer} className="bg-transparent  text-white ">
      <div className=" flex min-h-screen max-w-screen-xl flex-col items-center justify-center px-2 py-24 text-4xl font-medium drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] md:py-28 md:text-5xl   md:font-semibold lg:px-20 lg:py-36  lg:text-6xl">
        <div
          className={`tracking-none leading-[1.15] md:tracking-wide ${poppins.className}`}
        >
          <div
            className={s.hiworkText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            <div className="flex flex-col-reverse items-center justify-between gap-2 md:flex-row ">
              <h1>
                Firstly you should import your contacts using the following
                methods or use Enrichment to get some contacts.
              </h1>
              <Image
                className={`p-1`}
                src={btmsheet}
                alt={'Welome To leadistro'}
                height={innerWidth > 480 ? 16 * 27 : 16 * 18}
                width={
                  innerWidth > 480 ? 9 * 27 : ((innerWidth * 9) / 16) * 1.55
                }
              />
            </div>
          </div>
          <span
            className={`${s.hiworkText} inline-block after:content-['_'] `}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            <div className="flex flex-col-reverse items-center justify-between gap-2 md:flex-row-reverse ">
              <h1>
                Firstly you should import your contacts using the following
                methods or use Enrichment to get some contacts.
              </h1>
              <Image
                className={`p-1`}
                src={btmsheet}
                alt={'Welome To leadistro'}
                height={innerWidth > 480 ? 16 * 27 : 16 * 18}
                width={
                  innerWidth > 480 ? 9 * 27 : ((innerWidth * 9) / 16) * 1.55
                }
              />
            </div>
          </span>
          <div
            className={`${s.hiworkText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row ">
              <h1>
                Firstly you should import your contacts using the following
                methods or use Enrichment to get some contacts.
              </h1>
              <Image
                className={`p-1`}
                src={btmsheet}
                alt={'Welome To leadistro'}
                height={innerWidth > 480 ? 16 * 27 : 16 * 18}
                width={
                  innerWidth > 480 ? 9 * 27 : ((innerWidth * 9) / 16) * 1.55
                }
              />
            </div>
          </div>
          <div
            className={`${s.hiworkText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 3),
            }}
          >
            <div className="flex flex-col-reverse items-center justify-between gap-2 md:flex-row ">
              <h1>
                Firstly you should import your contacts using the following
                methods or use Enrichment to get some contacts.
              </h1>
              <Image
                className={`p-1`}
                src={btmsheet}
                alt={'Welome To leadistro'}
                height={innerWidth > 480 ? 16 * 27 : 16 * 18}
                width={
                  innerWidth > 480 ? 9 * 27 : ((innerWidth * 9) / 16) * 1.55
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
