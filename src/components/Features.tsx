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
                  Lead Researcher
                </h1>
                <h3 className="px-10 text-center font-['Poppins'] text-xl font-light tracking-wide  text-white md:text-start md:text-4xl">
                  Leadistro may locate possible leads for your company by using
                  information from a variety of sources (including LinkedIn,
                  Twitter, or other public profiles). This feature can allow you
                  to save leads and classify them for subsequent follow-up. It
                  might also offer filters to help you target particular
                  industries, job titles, or regions.
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
                  Cold Mail Automation
                </h1>
                <h3 className="px-10 text-center font-['Poppins'] text-xl font-light tracking-wide  text-white md:text-start md:text-4xl">
                  You can always use Leadistro to compose and schedule automatic
                  cold emails to send to your leads. You may be able to tailor
                  the content of each email to some extent, for instance, by
                  inserting placeholders for the recipient&#39;s name or firm.
                  This tool can save you time and ensures that you&#39;re
                  regularly reaching out to leads.
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
                  AI-Written Emails:
                </h1>
                <h3 className="px-10 text-center font-['Poppins'] text-xl font-light tracking-wide  text-white md:text-start md:text-4xl">
                  Leadistro uses natural language processing (NLP) technology to
                  generate individual emails as well as subject suggestions for
                  your cold emails. This could allow you save time as well as
                  ensure that all emails are written well and are worth reading.
                  Before the email is sent, you could also be able to examine
                  and modify the suggested content.
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
                  Personalised Email Design
                </h1>
                <h3 className="px-10 text-center font-['Poppins'] text-xl font-light tracking-wide  text-white md:text-start md:text-4xl">
                  Leadistro&#39;s drag-and-drop interface enables you to design
                  and construct your own email templates in addition to
                  AI-generated content. You can have the option of selecting
                  from pre-made from pre-made templates or making your own from
                  start. You this tool to make sure your emails reflect your
                  brand and look professional.
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
                  Integration with Gmail
                </h1>
                <h3 className="px-10 text-center font-['Poppins'] text-xl font-light tracking-wide  text-white md:text-start md:text-4xl">
                  To make it simple to send emails, Leadistro can lastly
                  interface with Gmail (or any email client). You might be able
                  to export your emails to your email client for sending, or you
                  might be able to compose and send emails right from the
                  Leadistro app. With the aid of this feature, you might be able
                  to organise your work flow and keep all of your outreach and
                  lead generation efforts in one location.
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
