// import gsap from 'gsap';
// import ScrollTrigger from 'gsap';
import Image from 'next/image';
import * as React from 'react';

import { SizeContext } from '@/utils/size-observer';

import btmsheet from '../../public/assets/images/btmsheet.png';
import distroGpt from '../../public/assets/images/distroGptMockup.png';
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
  const { innerWidth } = React.useContext(SizeContext);
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
                <h1 className=" mb-3 px-3  text-center text-3xl font-bold tracking-wider text-white md:text-start md:text-6xl md:tracking-normal">
                  Lead Researcher
                </h1>
                <h3 className="px-3 text-center text-lg  font-light leading-snug tracking-widest  text-white md:text-start md:text-3xl md:font-medium md:tracking-wide">
                  Leadistro can identify leads for your company by utilizing
                  data from various sources like LinkedIn, Twitter, and public
                  profiles. It allows you to save leads and categorize them for
                  follow-up, with filters to target specific industries, job
                  titles, or regions.
                </h3>
              </FeaturesLeft>
              <FeaturesRight progress={progress}>
                <Image
                  priority={true}
                  fill={true}
                  className={`${
                    innerWidth > 410
                      ? 'relative object-contain'
                      : 'relative object-cover'
                  } `}
                  src={distroGpt}
                  alt="Album"
                />
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
                <h1 className=" mb-3 px-3  text-center text-3xl font-bold tracking-wider text-white md:text-start md:text-6xl md:tracking-normal">
                  Cold Mail Automation
                </h1>
                <h3 className="px-3 text-center text-lg  font-light leading-snug tracking-widest  text-white md:text-start md:text-3xl md:font-medium md:tracking-wide">
                  Leadistro allows you to compose and schedule automatic cold
                  emails to send to your leads, with tailored content options
                  like recipient&#39;s name or firm. This saves time and ensures
                  regular outreach to leads.
                </h3>
              </FeaturesLeft>
              <FeaturesRight progress={progress}>
                <Image
                  priority={true}
                  fill={true}
                  className={`${
                    innerWidth > 410
                      ? 'relative object-contain'
                      : 'relative object-cover'
                  } `}
                  src={btmsheet}
                  alt="Album"
                />
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
                <h1 className=" mb-3 px-3  text-center text-3xl font-bold tracking-wider text-white md:text-start md:text-6xl md:tracking-normal">
                  AI-Written Emails
                </h1>
                <h3 className="px-3 text-center text-lg  font-light leading-snug tracking-widest  text-white md:text-start md:text-3xl md:font-medium md:tracking-wide">
                  Leadistro uses NLP technology to generate individual emails
                  and subject suggestions, saving time and ensuring well-written
                  and engaging emails. You can modify the content before
                  sending.
                </h3>
              </FeaturesLeft>
              <FeaturesRight progress={progress}>
                <Image
                  priority={true}
                  fill={true}
                  className={`${
                    innerWidth > 410
                      ? 'relative object-contain'
                      : 'relative object-cover'
                  } `}
                  src={distroGpt}
                  alt="Album"
                />
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
                <h1 className=" mb-3 px-3  text-center text-3xl font-bold tracking-wider text-white md:text-start md:text-6xl md:tracking-normal">
                  Personalised Email Design
                </h1>
                <h3 className="px-3 text-center text-lg  font-light leading-snug tracking-widest  text-white md:text-start md:text-3xl md:font-medium md:tracking-wide">
                  Leadistro offers a AI based interface for designing email
                  templates, with options to choose from pre-made or customize
                  from scratch. This ensures professional, branded emails.
                </h3>
              </FeaturesLeft>
              <FeaturesRight progress={progress}>
                <Image
                  priority={true}
                  fill={true}
                  className={`${
                    innerWidth > 410
                      ? 'relative object-contain'
                      : 'relative object-cover'
                  } `}
                  src={distroGpt}
                  alt="Album"
                />
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
                <h1 className=" mb-3 px-3  text-center text-3xl font-bold tracking-wider text-white md:text-start md:text-6xl md:tracking-normal">
                  Integration with Gmail
                </h1>
                <h3 className="px-3 text-center text-lg  font-light leading-snug tracking-widest  text-white md:text-start md:text-3xl md:font-medium md:tracking-wide">
                  Leadistro integrates with Gmail or any email client, enabling
                  you to export emails for sending or composing and sending
                  emails from within the app. It simplifies workflow and
                  consolidates outreach efforts.
                </h3>
              </FeaturesLeft>
              <FeaturesRight progress={progress}>
                <Image
                  priority={true}
                  fill={true}
                  className={`${
                    innerWidth > 410
                      ? 'relative object-contain'
                      : 'relative object-cover'
                  } `}
                  src={distroGpt}
                  alt="Album"
                />
              </FeaturesRight>
            </FeaturesContainer>
          )}
        ></Feature>
      </FContent>
    </TitleWrapper>
  );
};
// {/* <div id="paypal-button-container-P-6TE0221320438462WMQVH5IA"></div>
// <script src="https://www.paypal.com/sdk/js?client-id=AfO40mKtn7ll7133hVLYZ-LrTNC-aY3ec_V0g2iImLlZAygxBzl4oJNSf2LLRRTUd_ACUIiYirAuVSlM&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
// <script>
//   paypal.Buttons({
//       style: {
//           shape: 'pill',
//           color: 'black',
//           layout: 'vertical',
//           label: 'subscribe'
//       },
//       createSubscription: function(data, actions) {
//         return actions.subscription.create({
//           /* Creates the subscription */
//           plan_id: 'P-6TE0221320438462WMQVH5IA'
//         });
//       },
//       onApprove: function(data, actions) {
//         alert(data.subscriptionID); // You can add optional success message for the subscriber here
//       }
//   }).render('#paypal-button-container-P-6TE0221320438462WMQVH5IA'); // Renders the PayPal button
// </script> */}
