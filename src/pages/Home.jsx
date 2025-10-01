import React from 'react';
import Hero from '../components/sections/Hero';
import Destinations from '../components/sections/Destinations';
import Experiences from '../components/sections/Experiences';
import Testimonials from '../components/sections/Testimonials';
 
 
import Gallery from '../components/home/Gallery';
import Roadmap from '../components/home/Roadmap';

const Home = () => {
  return (
    <div className="min-h-screen">
     
        <Hero />
        <Gallery/> 
        <Roadmap/>          
        <Experiences />
        <Testimonials />
    </div>
  );
};

export default Home;