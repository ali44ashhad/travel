import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Experiences from './pages/Experiences';
import About from './pages/About';
import Contact from './pages/Contact';
import SoutheastAsia from './pages/SoutheastAsia';
import Europe from './pages/Europe';
import Africa from './pages/Africa';
import SouthAmerica from './pages/SouthAmerica';
import LuxuryTravel from './pages/LuxuryTravel';
import Adventure from './pages/Adventure';
import CulturalTours from './pages/CulturalTours';
import BeachHolidays from './pages/BeachHolidays';
import Sustainability from './pages/Sustainability';
 
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Indonesia from './pages/Destinations/Indonesia';
import Vietnam from './pages/Destinations/Vietnam';
import Laos from './pages/Destinations/Laos';
import Thailand from './pages/Destinations/Thailand';
import Myanmar from './pages/Destinations/Myanmar';
import Cambodia from './pages/Destinations/Cambodia';
import Malaysia from './pages/Destinations/Malaysia';
import Philippines from './pages/Destinations/Philippines';
import Singapore from './pages/Destinations/Singapore';
import MultiCountryTours from './pages/Destinations/MultiCountryTours';
import ScrollToTop from './components/common/ScrollToTop'; 
import BlogPost from './pages/BlogPost';
import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      <div className="App">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Destination Pages */}
          <Route path="/southeast-asia" element={<SoutheastAsia />} />
          <Route path="/europe" element={<Europe />} />
          <Route path="/africa" element={<Africa />} />
          <Route path="/south-america" element={<SouthAmerica />} />
          <Route path="/destinations/indonesia" element={<Indonesia />} />
          <Route path="/destinations/vietnam" element={<Vietnam />} />
          <Route path="/destinations/laos" element={<Laos />} />
          <Route path="/destinations/thailand" element={<Thailand />} />
          <Route path="/destinations/myanmar" element={<Myanmar />} />
          <Route path="/destinations/cambodia" element={<Cambodia />} />
          <Route path="/destinations/malaysia" element={<Malaysia />} />
          <Route path="/destinations/philippines" element={<Philippines />} />
          <Route path="/destinations/singapore" element={<Singapore />} />
          <Route path="/destinations/multi-country-tours" element={<MultiCountryTours />} />
          
          {/* Experience Pages */}
          <Route path="/luxury-travel" element={<LuxuryTravel />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/cultural-tours" element={<CulturalTours />} />
          <Route path="/beach-holidays" element={<BeachHolidays />} />
          
          {/* Company Pages */}
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />    
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;