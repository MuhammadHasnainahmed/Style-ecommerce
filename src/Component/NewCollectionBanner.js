import React from 'react';

const NewCollectionBanner = () => {
  return (
    <div className='container mx-auto mb-14'>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 p-3">
        INTRODUCING NEW COLLECTION
      </h1>
    
      <div className="relative w-full h-[400px] md:h-[500px] p-10 overflow-hidden rounded-tl-md rounded-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/4962909-uhd_2732_1440_25fps.mp4"
          autoPlay
          loop
          muted
        />

        <div className="relative z-10 flex flex-col justify-between  bg-opacity-50 md:px-8">
          <div className='flex flex-col gap-3'>
            <div className='border-2 border-solid border-white w-40 p-3 rounded-full text-center text-white'>
              NEW COLLECTION
            </div>
            <div className='border-2 border-solid border-white w-48 p-3 rounded-full text-center text-white'>
              WINTER COLLECTION
            </div>
          </div>

          <div>
            <p className="text-lg text-left sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-white pt-5 sm:pt-9 md:pt-20  max-w-5xl">
              SETTING THE TRENDS, INSPIRING THE FUTURE: FASHION FOR THE YOUNG, THE RESTLESS, AND THE BOLD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollectionBanner;
