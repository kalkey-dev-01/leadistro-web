import { Meta } from '@/layouts/Meta';
// import { Main } from '@/templates/Main';
import MainWithThree from '@/templates/r3fMain';

const Download = () => {
  return (
    <MainWithThree
      meta={<Meta title="Download" description="Download the app" />}
    >
      <div className="min-h-screen">
        <h1 className="text-2xl text-leadistroWhite">Download leadistro</h1>
      </div>
    </MainWithThree>
  );
};

export default Download;
