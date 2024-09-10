import React from 'react';

const AIPoweredClothing = () => {
  return (
    <div className="container mx-auto p-8 flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-lg">
      <div className="w-full lg:w-1/2 text-center lg:text-left p-8 order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">AI-POWERED VIRTUAL CLOTHING</h1>
        <p className="text-gray-600 mb-4">
          Apple Vision Pro scans your body, allowing you to select the clothes you want.
        </p>
        <p className="text-gray-600 mb-6">
          Leveraging an AI system, it recognizes your preferred styles upon website access and suggests clothing options better suited to you.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <button className="p-2 md:px-6 md:py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition">Try Now</button>
          <button className="p-2 md:px-6 md:py-2 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300 transition">Watch Demo</button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-8 order-1">
        <img 
          src="/portrait_right.jpg" 
          alt="AI-Powered Virtual Clothing" 
          className=" object-cover h-auto md:h-96 lg:h-[600px] rounded-full"
        />
      </div>
    </div>
  );
}

export default AIPoweredClothing;
