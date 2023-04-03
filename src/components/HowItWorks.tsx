import { Poppins } from '@next/font/google';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useContext, useEffect, useRef } from 'react';

import { ScrollContext } from '@/utils/scroll-observer';
import { SizeContext } from '@/utils/size-observer';

import btmsheet from '../../public/assets/images/btmsheet.png';
import singleContact from '../../public/assets/images/singleContact.png';
import s from '../styles/hiw.module.css';

gsap.registerPlugin(ScrollTrigger);
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
  const VideoRef = useRef<HTMLVideoElement>(null);
  const blockRefContainer = useRef<HTMLDivElement>(null);
  const refImageContainer = useRef<HTMLImageElement>(null);
  const refImageContainer1 = useRef<HTMLImageElement>(null);
  const refImageContainer2 = useRef<HTMLImageElement>(null);
  const refImageContainer3 = useRef<HTMLImageElement>(null);

  // numofpages = current block no + 2
  const numOfPages = 5;
  let progress = 0;
  const { current: elContainer } = blockRefContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenHeight = window.innerHeight;
    const halfHeight = screenHeight / 3;
    const percentY =
      Math.min(
        clientHeight + halfHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + halfHeight
      ) / clientHeight;
    progress = Math.min(
      numOfPages - 0.75,
      Math.max(0.75, percentY * numOfPages)
    );
    // console.log(percentY, 'Percent Y');
    // console.log(offsetTop, 'offest TOP');
    // console.log(opacityForBlock(progress, 0));
  }

  // console.log(progress, 'Progress');
  // !! Need To use progress to play the video
  useEffect(() => {
    const ImageContainer = refImageContainer.current;
    const ImageContainer1 = refImageContainer1.current;
    const ImageContainer2 = refImageContainer2.current;
    const ImageContainer3 = refImageContainer3.current;
    if (opacityForBlock(progress, 0)) {
      gsap.fromTo(
        ImageContainer,
        { x: 250, opacity: 0.5 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ImageContainer,
          },
        }
      );
    }
    if (opacityForBlock(progress, 1)) {
      gsap.fromTo(
        ImageContainer1,
        { x: -250, opacity: 0.5 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ImageContainer1,
          },
        }
      );
    }
    if (opacityForBlock(progress, 2)) {
      gsap.fromTo(
        ImageContainer2,
        { x: 250, opacity: 0.5 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ImageContainer2,
          },
        }
      );
    }
    if (progress >= 3.15) {
      VideoRef.current?.play();
    }
    if (opacityForBlock(progress, 4)) {
      gsap.fromTo(
        ImageContainer3,
        { x: -250, opacity: 0.5 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ImageContainer3,
          },
        }
      );
    }
  }, [
    refImageContainer,
    refImageContainer1,
    refImageContainer2,
    refImageContainer3,
  ]);
  return (
    <div
      ref={blockRefContainer}
      className="overflow-x-hidden bg-transparent text-white "
    >
      <div className=" flex min-h-screen max-w-screen-xl flex-col items-center justify-center px-2 py-24 text-[27.5px] font-medium drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] md:py-28 md:text-4xl   md:font-semibold lg:px-20 lg:py-36  lg:text-[50px]">
        <div
          className={`leading-snug tracking-wider md:tracking-wide ${poppins.className}`}
        >
          <div
            className={s.hiworkText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row ">
              <h1>
                Firstly you should import your contacts using the following
                methods or use Enrichment to get some contacts.
              </h1>
              <Image
                ref={refImageContainer}
                className={`p-1`}
                src={singleContact}
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
                Select a pre-designed template or create your own custom design.
                Use our drag-and-drop editor to add elements and preview on
                different devices.
              </h1>
              <Image
                ref={refImageContainer1}
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
                Send emails right away or schedule them for later, and segment
                your collection according to specific criteria.
              </h1>
              <Image
                ref={refImageContainer2}
                className={`p-1`}
                src={singleContact}
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
            <video
              ref={VideoRef}
              controls={false}
              autoPlay={true}
              muted
              loop={!!opacityForBlock(progress, 3)}
              playsInline
              className="pointer-events-none h-full w-full scale-150 bg-transparent object-cover md:scale-125 "
            >
              <source src="/horiz.webm" type="video/webm" />
            </video>
          </div>
          <div
            className={`${s.hiworkText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 4),
            }}
          >
            <div className="flex flex-col-reverse items-center justify-between gap-2 md:flex-row-reverse ">
              <h1>
                To optimise future campaigns, view comprehensive analytics on
                email performance, including open rates and click-through rates.
              </h1>
              <Image
                ref={refImageContainer3}
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
