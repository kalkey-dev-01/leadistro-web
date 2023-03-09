// import gsap from 'gsap';
// import ScrollTrigger from 'gsap';
import * as React from 'react';

import {
  FBackground,
  FContent,
  Feature,
  FeaturesBackground,
  FeaturesContainer,
  FeaturesLeft,
  FeaturesRight,
  TitleWrapper,
} from './FeaturesContainer';

// gsap.registerPlugin(ScrollTrigger);

interface FeatureProps {}

export const Features: React.FC<FeatureProps> = () => {
  // const ref = React.useRef<HTMLDivElement>(null)
  // React.useEffect(() => {
  //     const el = ref.current
  //     gsap.fromTo(el, { translateX: -1000, }, {
  //         translateX: 0, duration: 1, scrollTrigger: {
  //             trigger: el,
  //         }
  //     })
  // }, [])

  return (
    <TitleWrapper numOfPages={5}>
      <FBackground>
        <FeaturesBackground />
      </FBackground>
      {/* Feature Section - 1 */}
      <FContent>
        <Feature
          page={0}
          renderContent={({ progress }) => (
            <FeaturesContainer>
              <FeaturesLeft progress={progress}>
                <h1 className="px-10 pb-5 text-center font-['Comfortaa'] text-3xl font-bold text-white md:text-start md:text-6xl">
                  Personalized email campaigns
                </h1>
                <h3 className="px-10 text-center font-['Poppins'] text-xl font-light tracking-wide  text-white md:text-start md:text-4xl">
                  Create targeted and personalized email campaigns for your cold
                  leads, using our advanced segmentation and personalization
                  tools.
                </h3>
              </FeaturesLeft>
              <FeaturesRight progress={progress}>
                <div className="text-center text-5xl font-semibold text-black  md:text-6xl">
                  {' '}
                  Image or Lottie{' '}
                </div>
              </FeaturesRight>
            </FeaturesContainer>
          )}
        ></Feature>
      </FContent>
      {/* Feature Section - 2 */}
      <FContent>
        <Feature
          page={1}
          renderContent={({ progress }) => (
            <FeaturesContainer>
              <FeaturesLeft progress={progress}>
                <h1 className="px-10 pb-5 text-center font-['Comfortaa'] text-3xl font-bold text-white md:text-start md:text-6xl">
                  Advanced lead scoring
                </h1>
                <h3 className="px-10 text-center font-['Poppins'] text-xl font-light tracking-wide  text-white md:text-start md:text-4xl">
                  Automatically score your leads based on their behavior and
                  engagement, to prioritize your outreach and increase
                  conversions.
                </h3>
              </FeaturesLeft>
              <FeaturesRight progress={progress}>
                <div className="text-center text-5xl font-semibold text-black  md:text-6xl">
                  {' '}
                  Image or Lottie{' '}
                </div>
              </FeaturesRight>
            </FeaturesContainer>
          )}
        ></Feature>
      </FContent>
      {/* Feature Section - 3 */}
      <FContent>
        <Feature
          page={2}
          renderContent={({ progress }) => (
            <FeaturesContainer>
              <FeaturesLeft progress={progress}>
                <h1 className="px-10 pb-5 text-center font-['Comfortaa'] text-3xl font-bold text-white md:text-start md:text-6xl">
                  Email automation
                </h1>
                <h3 className="px-10 text-center font-['Poppins'] text-xl font-light tracking-wide  text-white md:text-start md:text-4xl">
                  Automate your email campaigns to reach your cold leads at the
                  right time, with the right message.
                </h3>
              </FeaturesLeft>
              <FeaturesRight progress={progress}>
                <div className="text-center text-5xl font-semibold text-black  md:text-6xl">
                  {' '}
                  Image or Lottie{' '}
                </div>
              </FeaturesRight>
            </FeaturesContainer>
          )}
        ></Feature>
      </FContent>
      {/* Feature Section - 4 */}
      <FContent>
        <Feature
          page={3}
          renderContent={({ progress }) => (
            <FeaturesContainer>
              <FeaturesLeft progress={progress}>
                <h1 className="px-10 pb-5 text-center font-['Comfortaa'] text-3xl font-bold text-white md:text-start md:text-6xl">
                  Comprehensive reporting
                </h1>
                <h3 className="px-10 text-center font-['Poppins'] text-xl font-light tracking-wide  text-white md:text-start md:text-4xl">
                  Track the success of your email campaigns with comprehensive
                  reporting, including open rates, click-through rates, and
                  conversion metrics.
                </h3>
              </FeaturesLeft>
              <FeaturesRight progress={progress}>
                <div className="text-center text-5xl font-semibold text-black  md:text-6xl">
                  {' '}
                  Image or Lottie{' '}
                </div>
              </FeaturesRight>
            </FeaturesContainer>
          )}
        ></Feature>
      </FContent>
      {/* Feature Section - 5 */}
      <FContent>
        <Feature
          page={4}
          renderContent={({ progress }) => (
            <FeaturesContainer>
              <FeaturesLeft progress={progress}>
                <h1 className="px-10 pb-5 text-center font-['Comfortaa'] text-3xl font-bold text-white md:text-start md:text-6xl">
                  Integration with CRM
                </h1>
                <h3 className="px-10 text-center font-['Poppins'] text-xl font-light tracking-wide  text-white md:text-start md:text-4xl">
                  Integrate with your existing CRM to seamlessly import and
                  manage your cold lead data, and keep all your data in one
                  place.
                </h3>
              </FeaturesLeft>
              <FeaturesRight progress={progress}>
                <div className="text-center text-5xl font-semibold text-black  md:text-6xl">
                  {' '}
                  Image or Lottie{' '}
                </div>
              </FeaturesRight>
            </FeaturesContainer>
          )}
        ></Feature>
      </FContent>
    </TitleWrapper>
  );
};
