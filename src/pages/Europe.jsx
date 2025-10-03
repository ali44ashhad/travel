import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import Card, { ImageCard } from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const Europe = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const europeanCountries = [
    {
      id: 1,
      name: 'Italy',
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'From Renaissance art to incredible cuisine and stunning coastlines',
      price: 'From $2,799',
      duration: '10-14 days',
      highlights: ['Rome Colosseum', 'Venetian Canals', 'Tuscan Countryside', 'Amalfi Coast']
    },
    {
      id: 2,
      name: 'France',
      image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      description: 'Romantic cities, world-class wine, and breathtaking landscapes',
      price: 'From $3,199',
      duration: '8-12 days',
      highlights: ['Eiffel Tower', 'French Riviera', 'Loire Valley Castles', 'Provence Lavender Fields']
    },
    {
      id: 3,
      name: 'Spain',
      image: 'https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Vibrant culture, stunning architecture, and beautiful beaches',
      price: 'From $2,499',
      duration: '9-13 days',
      highlights: ['Sagrada Familia', 'Alhambra Palace', 'Ibiza Beaches', 'Tapas Culture']
    },
    {
      id: 4,
      name: 'Greece',
      image: 'https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Ancient history, island paradise, and Mediterranean charm',
      price: 'From $2,199',
      duration: '7-10 days',
      highlights: ['Santorini Sunsets', 'Athens Acropolis', 'Mykonos Nightlife', 'Ancient Delphi']
    }
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
     
        <section className="bg-[#1a365d] text-white py-40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Europe
            </h1>
            <p className="text-xl text-[#f7fafc] max-w-2xl mx-auto">
              Experience the rich history, diverse cultures, and breathtaking landscapes of Europe's most enchanting destinations
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                  Discover Europe
                </h2>
                <p className="text-lg text-[#2d3748] mb-6">
                  Europe offers an unparalleled travel experience with its incredible diversity. From the romantic cities of France and Italy to the historic sites of Greece and the vibrant culture of Spain, each destination tells a unique story.
                </p>
                <p className="text-lg text-[#2d3748] mb-8">
                  Our European journeys combine iconic landmarks with hidden local gems, ensuring you experience the authentic charm of each country while enjoying luxury accommodations and expert guidance.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-[#2d3748]">
                    <i className="fas fa-landmark text-[#d4af37]"></i>
                    <span>Rich History</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#2d3748]">
                    <i className="fas fa-utensils text-[#d4af37]"></i>
                    <span>Gourmet Cuisine</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#2d3748]">
                    <i className="fas fa-mountain text-[#d4af37]"></i>
                    <span>Stunning Landscapes</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#2d3748]">
                    <i className="fas fa-theater-masks text-[#d4af37]"></i>
                    <span>Vibrant Culture</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Europe Overview"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Countries Grid */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              Featured European Countries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {europeanCountries.map(country => (
                <ImageCard
                  key={country.id}
                  image={country.image}
                  title={country.name}
                  description={country.description}
                  overlay={true}
                  action={
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-serif font-bold text-[#1a365d] mb-1">
                          {country.price}
                        </div>
                        <div className="text-sm text-[#2d3748]">
                          {country.duration}
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleCountryClick(country)}
                        className="bg-[#1a365d] text-white hover:bg-[#142844] px-4 py-2 rounded-md font-semibold"
                      >
                        Explore
                      </Button>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              European Travel Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-train text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                  Efficient Transport
                </h3>
                <p className="text-[#2d3748]">
                  Europe's extensive rail network makes multi-country travel seamless and scenic
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-passport text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                  Schengen Area
                </h3>
                <p className="text-[#2d3748]">
                  Single visa access to 26 European countries for simplified travel planning
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-language text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                  Cultural Diversity
                </h3>
                <p className="text-[#2d3748]">
                  Experience unique traditions, languages, and cuisines within short distances
                </p>
              </Card>
            </div>
          </div>
        </section>

      {/* Country Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedCountry?.name}
        size="lg"
      >
        {selectedCountry && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedCountry.image}
                  alt={selectedCountry.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-serif font-bold text-[#1a365d]">
                    {selectedCountry.price}
                  </div>
                  <div className="text-lg text-[#2d3748]">
                    {selectedCountry.duration}
                  </div>
                </div>
                
                <p className="text-[#2d3748] mb-6">
                  {selectedCountry.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Must-See Highlights</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedCountry.highlights.map((highlight, index) => (
                        <li key={index} className="text-[#2d3748]">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-[#1a365d] text-white hover:bg-[#142844]">
                  Plan Your {selectedCountry.name} Journey
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Europe;
