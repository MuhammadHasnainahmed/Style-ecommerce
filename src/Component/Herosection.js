import React from "react";
const HeroSection = () => {
  return (
    <div className="">
      <div className="mt-7">
        <h1 className="text-6xl md:text-8xl font-bold py-3 text-gray-800 text-center">
          CREATE YOUR STYLE NOW!
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-8  p-8 ">
          {/* New Collection Card */}
          <div className=" p-4 rounded-lg bg-white shadow-lg w-full md:w-auto  ">
            <h2 className="font-bold text-4xl  mb-2 ">NEW COLLECTION!</h2>
            
            <div className="zoom-container">

              <img
                src="/istockphoto7.jpg"
                alt="Description"
                className="w-full md:w-80 h-auto md:h-96  object-cover zoom-image "
              />
              </div>
        


            <p className="text-2xl text-center font-bold mt-2 text-white py-2 px-4  shadow-lg uppercase tracking-wider animate-gradient">
              Coming Soon
            </p>
          </div>

          {/* Winter Collection Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-auto">
            <h2 className="font-bold text-4xl mb-2">NEW COLLECTION!</h2>
            <div className="zoom-container">

            <img
              src="/istockphoto4.jpg"
              alt="Description"
              className="w-full md:w-80  h-auto md:h-96 object-cover zoom-image "
            />
            </div>

            <p className="text-2xl text-center font-bold mt-2 text-white py-2 px-4  shadow-lg uppercase tracking-wider animate-gradient">
              Coming Soon
            </p>
          </div>
          {/* Winter Collection Card */}

          {/* Trending Collection Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-auto">
            <h2 className="font-bold text-4xl mb-2">NEW COLLECTION!</h2>
            <div className="zoom-container">
            <img
              src="/istockphoto5.jpg"
              alt="Description"
              className="w-full md:w-80  h-auto md:h-96  object-cover zoom-image "
            />
            </div>

            <p className="text-2xl text-center font-bold mt-2 text-white py-2 px-4  shadow-lg uppercase tracking-wider animate-gradient">
              Coming Soon
            </p>
          </div>
          {/* Trending Collection Card */}

          {/* New Collection Card */}
          <div className=" p-4 rounded-lg bg-white shadow-lg w-full md:w-auto">
            <h2 className="font-bold text-4xl  mb-2 ">NEW COLLECTION!</h2>
            <div>
            <div className="zoom-container">

              <img
                src="/istockphoto8.jpg"
                alt="Description"
                className="w-full md:w-80  h-auto md:h-96 object-cover zoom-image "
              />
            </div>
            </div>

            <p className="text-2xl text-center font-bold mt-2 text-white py-2 px-4  shadow-lg uppercase tracking-wider animate-gradient">
              Coming Soon
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap container m-5   justify-around p-4 my-10 mx-auto border-2 border-solid border-black rounded-xl">
         <img src="/junaid jamshad.png" alt="j." className="w-11 md:w-20 lg:w-30" />
         <img src="/adidas.png" alt="jadidas." className="w-11 md:w-20 lg:w-30" />
         <img src="/Dolce&gabbana.png" alt="Dolce&gabbana" className="w-11 md:w-20 lg:w-30" />
         <img src="/zara.png" alt="zara" className="w-11 md:w-20 lg:w-30" />
         <img src="/Nike.png" alt="Nike" className="w-11 md:w-20 lg:w-30" />
         <img src="/louis LV.png" alt="Nike" className="w-11 md:w-20 lg:w-30" />

      </div>  
    </div>
  );
};

export default HeroSection;
