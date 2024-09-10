import React from 'react';

const FashionBanner = () => {
  return (
    <div
      className="bg-cover bg-center rounded-md h-[350px] lg:h-[500px] mx-auto my-5 container"
      style={{ backgroundImage: "url('/fashonbanarbackground.webp')" }}
    >
      <div className="flex flex-col justify-center gap-4 sm:gap-0">
        <h1 className="text-black bg-lightcoffe font-bold p-4  sm:p-6 lg:p-8  text-3xl lg:text-4xl xl:text-6xl max-w-xl  md:max-w-2xl lg:max-w-4xl  xl:max-w-6xl sm:rounded-br-2xl">
          WHERE TODAY'S MOMENTS BECOME
        </h1>
        <h1 className="text-black bg-lightcoffe font-bold p-4 sm:p-6 lg:p-8  text-2xl md:text-3xl  lg:text-4xl  xl:text-5xl max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl sm:rounded-br-2xl ">
          TOMORROW'S TRENDS: FASHIONS
        </h1>
        <h1 className="text-black bg-lightcoffe font-bold p-4 sm:p-6 lg:p-8  text-2xl md:text-3xl  lg:text-4xl xl:text-5xl max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl sm:rounded-br-2xl ">
          FORWARD, FUTURE FOCUSED
        </h1>
      </div>
    </div>
  );
};

export default FashionBanner;
