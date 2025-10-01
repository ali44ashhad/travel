import React, { useState } from 'react'; 
import Button from '../components/common/Button';
import Card, { ImageCard } from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { destinations } from '../data/destinations';

const SoutheastAsia = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const southeastAsiaDestinations = destinations.filter(dest => 
    dest.region === 'asia' || 
    ['Bali, Indonesia', 'Siem Reap, Cambodia', 'Kyoto, Japan'].includes(dest.name)
  );

  const countries = [
    {
      name: 'Thailand',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2070&q=80',
      description: 'Land of smiles with vibrant cities, ancient temples, and pristine islands'
    },
    {
      name: 'Vietnam',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=2070&q=80',
      description: 'Rich history, stunning landscapes, and incredible street food'
    },
    {
      name: 'Malaysia',
      image: 'https://images.unsplash.com/photo-1596422846543-75e6d59b35e1?auto=format&fit=crop&w=2070&q=80',
      description: 'Diverse culture, modern cities, and beautiful rainforests'
    },
    {
      name: 'Singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=2070&q=80',
      description: 'Garden city with futuristic architecture and culinary delights'
    }
  ];

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[80vh] text-white flex items-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661878915254-f3163e91d870?q=80&w=2071&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Southeast Asia
          </h1>
          <p className="text-xl text-[#f7fafc] max-w-2xl mx-auto">
            Discover ancient temples, pristine beaches, and vibrant cultures across Southeast Asia's most enchanting destinations
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                Explore Southeast Asia
              </h2>
              <p className="text-lg text-[#2d3748] mb-6">
                Southeast Asia offers an incredible diversity of experiences, from the ancient temples of Cambodia to the pristine beaches of Thailand and the bustling cities of Singapore. Each country boasts its own unique culture, cuisine, and natural wonders.
              </p>
              <p className="text-lg text-[#2d3748] mb-8">
                Our carefully curated journeys take you beyond the tourist trail to discover authentic local experiences, hidden gems, and the warm hospitality that makes this region so special.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-utensils text-[#d4af37]"></i>
                  <span>World-Class Cuisine</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-history text-[#d4af37]"></i>
                  <span>Rich History</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-umbrella-beach text-[#d4af37]"></i>
                  <span>Stunning Beaches</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-mountain text-[#d4af37]"></i>
                  <span>Lush Landscapes</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=2074&q=80"
                alt="Southeast Asia Overview"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {southeastAsiaDestinations.map(destination => (
              <ImageCard
                key={destination.id}
                image={destination.image}
                title={destination.name}
                description={destination.description}
                overlay={true}
                action={
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-serif font-bold text-[#1a365d] mb-1">
                        {destination.price}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-[#2d3748]">
                        <span>{destination.duration}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <i className="fas fa-star text-[#d4af37]"></i>
                          <span>{destination.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleDestinationClick(destination)}
                      className="bg-[#1a365d] text-white hover:bg-[#142947]"
                    >
                      View Details
                    </Button>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Explore Countries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                    {country.name}
                  </h3>
                  <p className="text-[#2d3748] mb-4">
                    {country.description}
                  </p>
                  <Button 
                    className="w-full border border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white"
                  >
                    Explore {country.name}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Best Time to Visit
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4">Dry Season (Nov-Feb)</h3>
                    <ul className="space-y-2 text-[#f7fafc]">
                      <li className="flex items-center">
                        <i className="fas fa-check text-[#d4af37] mr-3"></i>
                        Pleasant temperatures
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check text-[#d4af37] mr-3"></i>
                        Minimal rainfall
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check text-[#d4af37] mr-3"></i>
                        Ideal for beach activities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4">Green Season (Jun-Oct)</h3>
                    <ul className="space-y-2 text-[#f7fafc]">
                      <li className="flex items-center">
                        <i className="fas fa-check text-[#d4af37] mr-3"></i>
                        Lush landscapes
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check text-[#d4af37] mr-3"></i>
                        Fewer tourists
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check text-[#d4af37] mr-3"></i>
                        Lower prices
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Destination Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedDestination?.name}
        size="lg"
      >
        {selectedDestination && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-serif font-bold text-[#1a365d]">
                    {selectedDestination.price}
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-star text-[#d4af37]"></i>
                    <span className="font-semibold">{selectedDestination.rating}</span>
                  </div>
                </div>
                
                <p className="text-[#2d3748] mb-6">
                  {selectedDestination.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Duration</h4>
                    <p>{selectedDestination.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Best Time to Visit</h4>
                    <p>{selectedDestination.bestTime}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Highlights</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedDestination.highlights.map((highlight, index) => (
                        <li key={index} className="text-[#2d3748]">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-[#1a365d] text-white hover:bg-[#142947]">
                  Book This Destination
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SoutheastAsia;
