import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Download = () => {
  return (
    <Main meta={<Meta title="Download" description="Download the app" />}>
      <div className="min-h-screen">
        <h1 className="text-2xl text-leadistroWhite">Download leadistro</h1>
      </div>
    </Main>
  );
};

export default Download;
