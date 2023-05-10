import React from 'react';

interface PricingProps {}

const Pricing: React.FC<PricingProps> = () => {
  return (
    <div className="absolute h-full w-full bg-leadistroDarkComp py-16 text-leadistroWhite">
      <div className="flex flex-col items-center justify-start gap-4">
        <h1 className="font-comfortaa text-4xl font-bold md:text-5xl lg:text-6xl xl:text-[5rem]">
          Pricing
        </h1>
        <p className="max-w-screen-sm text-center font-poppins text-base md:max-w-screen-md md:text-lg lg:max-w-screen-lg lg:text-xl xl:text-2xl">
          Choose the plan that fits your business needs At Leadistro, we offer
          two pricing tiers to accommodate businesses of all sizes. Our Basic
          tier is perfect for small businesses and startups, while our Pro tier
          is ideal for larger businesses with more advanced email marketing
          needs. Both tiers offer robust features and powerful tools to help you
          optimize your email marketing campaigns and drive sales.
        </p>
        <div className="grid w-full grid-rows-2 gap-2 py-10 md:max-w-screen-md md:grid-cols-2 md:gap-4 lg:max-w-screen-lg lg:gap-5 xl:max-w-screen-xl xl:gap-6">
          <div className="card-bordered card flex flex-col items-center justify-between rounded-2xl border-2 border-leadistroWhite py-5">
            <h6 className="text-base md:text-lg lg:text-xl xl:text-2xl">
              Free Tier
            </h6>
            <div className="max-h-32 flex-1 text-center">
              <h1 className=" text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
                $ 0
              </h1>
              <h3 className="text-lg font-light tracking-wider md:text-xl lg:text-2xl xl:text-3xl">
                Free Early Access
              </h3>
            </div>
            <h5 className="my-4 text-center font-comfortaa text-base md:text-lg lg:text-xl xl:text-2xl">
              100 Max Leads Generated.
            </h5>
            <h5 className="my-4 text-center font-comfortaa text-base md:text-lg lg:text-xl xl:text-2xl">
              Basic Email Editor Functionality
            </h5>
            <h5 className="my-4 text-center font-comfortaa text-base md:text-lg lg:text-xl xl:text-2xl">
              Pre-made Templates
            </h5>
            <h5 className="my-4 text-center font-comfortaa text-base md:text-lg lg:text-xl xl:text-2xl">
              15 Campaigns Daily
            </h5>
            <button className="btn-block btn m-2 text-xl">Register Now</button>
          </div>
          <div className="card-bordered card flex flex-col items-center justify-between rounded-2xl border-2 border-leadistroWhite py-5">
            <h6 className="text-base md:text-lg lg:text-xl xl:text-2xl">
              Pro Tier
            </h6>
            <div className="max-h-32 flex-1 text-center">
              <h1 className=" text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
                $100
              </h1>
              <h3 className="text-lg font-light tracking-wider md:text-xl lg:text-2xl xl:text-3xl">
                Billed Anually
              </h3>
            </div>
            <h5 className="my-4 text-center font-comfortaa text-base md:text-lg lg:text-xl xl:text-2xl">
              100 Max Leads Generated.
            </h5>
            <h5 className="my-4 text-center font-comfortaa text-base md:text-lg lg:text-xl xl:text-2xl">
              Basic Email Editor Functionality
            </h5>
            <h5 className="my-4 text-center font-comfortaa text-base md:text-lg lg:text-xl xl:text-2xl">
              Pre-made Templates
            </h5>
            <h5 className="my-4 text-center font-comfortaa text-base md:text-lg lg:text-xl xl:text-2xl">
              15 Campaigns Daily
            </h5>
            <button className="btn-block btn my-2 text-xl">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
