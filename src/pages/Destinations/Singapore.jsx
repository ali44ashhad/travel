import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Card, { ImageCard } from '../../components/ui/Card';
import Modal from '../../components/ui/Modal';

const Singapore = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Singapore City Explorer',
      duration: '4 Days / 3 Nights',
      price: '$799',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=2070&q=80',
      highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Chinatown & Little India'],
      includes: ['4-Star Hotel', 'City Tours', 'Attraction Passes', 'Daily Breakfast', 'Airport Transfers']
    },
    {
      id: 2,
      name: 'Singapore Family Fun',
      duration: '5 Days / 4 Nights',
      price: '$1,199',
      image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=2074&q=80',
      highlights: ['Universal Studios', 'Singapore Zoo', 'Science Centre', 'S.E.A. Aquarium'],
      includes: ['Family Hotel', 'Theme Park Tickets', 'Zoo Admission', 'Breakfast Included', 'Family Activities']
    },
    {
      id: 3,
      name: 'Singapore Luxury Experience',
      duration: '6 Days / 5 Nights',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=2069&q=80',
      highlights: ['Marina Bay Sands Suite', 'Michelin Star Dining', 'Private Yacht Charter', 'Luxury Shopping'],
      includes: ['5-Star Accommodation', 'Fine Dining Experiences', 'Private Transfers', 'Personal Concierge', 'VIP Access']
    }
  ];

  const attractions = [
    {
      name: 'Gardens by the Bay',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=500&q=80',
      description: 'Futuristic nature park with iconic Supertree Grove and climate-controlled domes'
    },
    {
      name: 'Marina Bay Sands',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80',
      description: 'Iconic integrated resort with infinity pool, luxury shopping, and world-class entertainment'
    },
    {
      name: 'Sentosa Island',
      image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=500&q=80',
      description: 'Island resort with beaches, theme parks, golf courses, and luxury accommodations'
    }
  ];

  const neighborhoods = [
    {
      name: 'Chinatown',
      icon: 'dragon',
      description: 'Vibrant cultural district with traditional shops and authentic cuisine'
    },
    {
      name: 'Little India',
      icon: 'om',
      description: 'Colorful neighborhood filled with spice shops and Indian restaurants'
    },
    {
      name: 'Kampong Glam',
      icon: 'mosque',
      description: 'Historic Muslim quarter with boutique shops and Middle Eastern eateries'
    },
    {
      name: 'Clarke Quay',
      icon: 'cocktail',
      description: 'Riverside entertainment hub with restaurants and nightlife'
    }
  ];

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Singapore</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Lion City • Garden City • Futuristic Metropolis</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">Discover Singapore</h2>
              <p className="text-lg text-gray-600 mb-6">
                Singapore is a dynamic city-state where futuristic innovation meets rich cultural heritage. This global hub offers a perfect blend of modern architecture, green spaces, and diverse culinary experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From the iconic skyline of Marina Bay to the lush gardens and vibrant ethnic neighborhoods, Singapore provides a clean, safe, and efficient travel experience unlike any other.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-seedling text-[#d4af37]"></i>
                  <span>Garden City</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-utensils text-[#d4af37]"></i>
                  <span>Food Paradise</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-shopping-bag text-[#d4af37]"></i>
                  <span>Shopping Haven</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-glass-cheers text-[#d4af37]"></i>
                  <span>Vibrant Nightlife</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=500&q=80" alt="Gardens by the Bay" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80" alt="Marina Bay Sands" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=500&q=80" alt="Sentosa Island" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://media.istockphoto.com/id/491056644/photo/singapore-skyline-cityscape-at-night.jpg?s=612x612&w=0&k=20&c=kdXYIXNV-8WM3ZOeBCS2JLgrqbTbV6YUWDFIHFThwwk=" alt="Singapore Skyline" className="rounded-2xl h-48 w-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Singapore Travel Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map(pkg => (
              <ImageCard
                key={pkg.id}
                image={pkg.image}
                title={pkg.name}
                description={pkg.duration}
                overlay={true}
                action={
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-serif font-bold text-[#1a365d]">
                      {pkg.price}
                    </div>
                    <Button 
                      onClick={() => handlePackageClick(pkg)}
                      variant="[#1a365d]"
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

      {/* Attractions Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Iconic Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Neighborhoods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Cultural Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={index} className="text-center p-6 group hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas fa-${neighborhood.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                  {neighborhood.name}
                </h3>
                <p className="text-gray-600 text-sm">{neighborhood.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Paradise Section */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Singapore Food Paradise
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience Singapore's world-famous hawker centers and diverse culinary scene
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Must-Try Dishes</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Chili Crab</li>
                <li>Hainanese Chicken Rice</li>
                <li>Laksa</li>
                <li>Satay</li>
                <li>Roti Prata</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Famous Hawker Centers</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Lau Pa Sat</li>
                <li>Maxwell Food Centre</li>
                <li>Old Airport Road</li>
                <li>Chinatown Complex</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Food Experiences</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Food Tours</li>
                <li>Cooking Classes</li>
                <li>Michelin Star Dining</li>
                <li>Night Markets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedPackage?.name}
        size="lg"
      >
        {selectedPackage && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img src={selectedPackage.image} alt={selectedPackage.name} className="w-full h-64 lg:h-80 object-cover rounded-2xl"/>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Duration</div>
                    <div>{selectedPackage.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Price</div>
                    <div className="text-[#d4af37] font-semibold">{selectedPackage.price}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Package Highlights</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPackage.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">What's Included</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPackage.includes.map((item, index) => (
                        <li key={index} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button variant="[#1a365d]" className="w-full mb-4">
                  Book This Package
                </Button>
                <Button variant="outline" className="w-full">
                  Customize Itinerary
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Singapore;
