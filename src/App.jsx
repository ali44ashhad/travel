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


function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Destination Pages */}
          <Route path="/southeast-asia" element={<SoutheastAsia />} />
          <Route path="/europe" element={<Europe />} />
          <Route path="/africa" element={<Africa />} />
          <Route path="/south-america" element={<SouthAmerica />} />
          
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