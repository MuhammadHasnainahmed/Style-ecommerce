import React from "react";

const TrendingClothes = () => {
  return (
    <div className="bg-white container mx-auto my-20 ">
      <div>
        <h1 className="text-2xl sm:text-4xl md:text-2xl lg:text-4xl p-3 bg-lightcoffe w-[70%] md:w-[40%] xl:w-[30%]  font-bold rounded-br-lg">
          TRENDING CLOTHES
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 py-5">
        
        {/* First Item */}
        <div className="flex flex-col md:flex-row  bg-white text-black border rounded-lg shadow-lg">
          <div>
            <img src="/istockphoto10.png" alt="Black Jacket" className=" md:w-96 md:h-full  rounded-l-md" />
          </div>
          <div className="mt-2 p-3 flex flex-col justify-between">
            <div className="text-right">

            <span className="block text-gray-500 font-bold">⭐ 4.5</span>
            </div>
            <div>
            <span className="block text-xl font-bold">$32.99</span>

            <button className="mt-2 border-2 border-solid border-amber-800 text-amber-800 xl:w-[150px] hover:text-white font-bold px-4 py-2 rounded-md hover:bg-red-700 transition">
              SHOP NOW
            </button>
            </div>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex flex-col sm:flex-row  bg-white text-black border rounded-lg shadow-lg">
          <div>
            <img src="/A clear, high-resolut.webp" alt="Black Jacket" className="md:w-96 h-full  rounded-l-md" />
          </div>
          <div className="mt-2 p-3 flex flex-col justify-between">
            <div className="text-right">

            <span className="block text-gray-500 font-bold">⭐ 4.5</span>
            </div>
            <div>
            <span className="block text-xl font-bold">$32.99</span>

            <button className="mt-2 border-2 border-solid border-amber-800 text-amber-800 xl:w-[150px] hover:text-white font-bold px-4 py-2 rounded-md hover:bg-red-700 transition">
              SHOP NOW
            </button>
            </div>
          </div>
        </div>

        {/* Fifth Item (Larger, spans more columns/rows) */}
        <div className=" flex flex-col justify-between text-black border-2 border-solid  rounded-lg shadow-lg row-span-2">
          <div>
            <img src="/istockphoto9.jpg" alt="Black Jacket" className="w-full rounded-tl-md rounded-tr-md" />
          </div>
            <div className="text-right p-3">

            <span className="block text-gray-500 font-bold">⭐ 4.5</span>
            </div>
          <div className="mt-2 p-3 flex flex-col justify-between">
            <div>
            <span className="block text-xl font-bold">$32.99</span>

            <button className="mt-2 border-2 border-solid border-amber-800 text-amber-800 xl:w-[150px] hover:text-white font-bold px-4 py-2 rounded-md hover:bg-red-700 transition">
              SHOP NOW
            </button>
            </div>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex flex-col md:flex-row  bg-white text-black border rounded-lg shadow-lg">
          <div>
            <img src="/A clear, highl.webp" alt="Black Jacket" className="md:w-96 h-full  rounded-l-md bg-cover" />
          </div>
          <div className="mt-2 p-3 flex flex-col justify-between">
            <div className="text-right">

            <span className="block text-gray-500 font-bold">⭐ 4.5</span>
            </div>
            <div>
            <span className="block text-xl font-bold">$32.99</span>

            <button className="mt-2 border-2 border-solid border-amber-800 text-amber-800 xl:w-[150px] hover:text-white font-bold px-4 py-2 rounded-md hover:bg-red-700 transition">
              SHOP NOW
            </button>
            </div>
          </div>
        </div>

        {/* Fourth Item */}
        <div className="flex flex-col sm:flex-row  bg-white text-black border rounded-lg shadow-lg">
          <div>
            <img src="/A red, double.webp" alt="Black Jacket" className="md:w-96 h-full  rounded-l-md" />
          </div>
          <div className="mt-2 p-3 flex flex-col justify-between">
            <div className="text-right">

            <span className="block text-gray-500 font-bold">⭐ 4.5</span>
            </div>
            <div>
            <span className="block text-xl font-bold">$32.99</span>

            <button className="mt-2 border-2 border-solid border-amber-800 text-amber-800 xl:w-[150px] hover:text-white font-bold px-4 py-2 rounded-md hover:bg-red-700 transition">
              SHOP NOW
            </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrendingClothes;
