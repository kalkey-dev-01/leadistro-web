import '../styles/global.css';

import type { AppProps } from 'next/app';

import MouseObserver from '../utils/mouse-observer';
import ScrollObserver from '../utils/scroll-observer';
import SizeObserver from '../utils/size-observer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MouseObserver>
        <SizeObserver>
          <ScrollObserver>
            <Component {...pageProps} />
          </ScrollObserver>
        </SizeObserver>
      </MouseObserver>
    </>
  );
}

export default MyApp;
