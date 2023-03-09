// import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
// HOME PAGE

const Index = () => {
  // const router = useRouter();
  return (
    <Main
      meta={
        <Meta
          title="leadistro"
          description="leadistro is a minimal enrichment and an Email Designer to send cold mails."
        />
      }
    >
      <div className="min-h-screen "></div>
      <div className="min-h-screen "></div>
      <div className="min-h-screen "></div>
      <div className="min-h-screen "></div>
      <div className="min-h-screen "></div>
      {/* <a href="#">
        <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a> */}
    </Main>
  );
};

export default Index;
