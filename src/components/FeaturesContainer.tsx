import { Poppins } from '@next/font/google';
import React, { useContext, useRef } from 'react';

import { ScrollContext } from '../utils/scroll-observer';
// import { BackgroundPointsCanvas } from "./misc/backgroundPoints";

interface WrapperProps {
  numOfPages: number;
  children: React.ReactNode;
}

interface FContextValue {
  numOfPages: number;
  currentPage: number;
}

export const FContext = React.createContext<FContextValue>({
  numOfPages: 0,
  currentPage: 0,
});
export const TitleWrapper: React.FC<WrapperProps> = ({
  numOfPages,
  children,
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  let currentPage = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenHeight = window.innerHeight;
    const halfHeight = screenHeight / 2;
    const percentY =
      Math.min(
        clientHeight + halfHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + halfHeight
      ) / clientHeight;
    currentPage = percentY * numOfPages;
  }

  return (
    <FContext.Provider value={{ currentPage, numOfPages }}>
      <div
        ref={refContainer}
        className="relative bg-white text-black"
        style={{
          height: `${numOfPages * 100}vh`,
        }}
      >
        {children}
      </div>
    </FContext.Provider>
  );
};
export const FBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="absolute h-full w-full">{children}</div>;
export const FContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="sticky top-0 h-screen overflow-hidden">{children}</div>;

interface Props {
  page: number;
  renderContent: (props: { progress: number }) => any;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const Feature: React.FC<Props> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(FContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const progress = Math.max(0, currentPage - page);

  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }
  return (
    <div
      ref={refContainer}
      style={{
        opacity,
        pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
      }}
      className="absolute top-0 w-full"
    >
      {renderContent({ progress })}
    </div>
  );
};

export const FeaturesContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
    className={`${poppins.className} grid min-h-screen w-full grid-cols-1 lg:grid-cols-2`}
  >
    {children}
  </div>
);

export const FeaturesBackground: React.FC = () => (
  <div className="sticky top-0 grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
    <div className="h-[40vh] bg-leadistroDark lg:h-auto"></div>
    <div className="h-[60vh] bg-inherit lg:min-h-screen"></div>
  </div>
);
export const FeaturesLeft: React.FC<{
  progress: number;
  children: React.ReactNode;
}> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      style={{
        transform: `translateY(${translateY}px)`,
      }}
      className="flex h-[40vh] flex-col items-center justify-center text-3xl md:items-start lg:h-auto lg:text-3xl"
    >
      <div className="leading-tight"> {children}</div>
    </div>
  );
};
export const FeaturesRight: React.FC<{
  progress: number;
  children: React.ReactNode;
}> = ({ children, progress }) => {
  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      style={{
        transform: `translateY(${translateY}px)`,
      }}
      className="flex h-screen flex-1 justify-center lg:items-center"
    >
      <div className="w-full max-w-md px-10 pt-10 md:px-0 lg:pt-0">
        {' '}
        {children}
      </div>
    </div>
  );
};
