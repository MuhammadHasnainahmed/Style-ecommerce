import React from 'react';
import Navbar from './Component/Navbar';
import { Outlet } from 'react-router-dom';
import HeroSection from './Component/Herosection';
import FashionBanner from './Component/FashionBanner';
import TrendingClothes from './Component/TrendingClothes';
import NewCollectionBanner from './Component/NewCollectionBanner';
import AIPoweredClothing from './Component/AIPoweredClothing';
import Testimonials from './Component/Testimonials';
import Footer from './Component/Footer';



const App = () => {
  return (
   

    <div>
      <Navbar />
      <HeroSection/>
      <FashionBanner/>
      <TrendingClothes/>
      <NewCollectionBanner/>
      <AIPoweredClothing/>
      <Testimonials/>
      <Footer/>
      <Outlet />
    </div>
   
  );
};

export default App;
