import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Card, { ImageCard } from '../../components/ui/Card';
import Modal from '../../components/ui/Modal';

const Philippines = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Philippines Island Hopping',
      duration: '10 Days / 9 Nights',
      price: '$1,399',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2074&q=80',
      highlights: ['Palawan Island Hopping', 'El Nido Lagoons', 'Coron Wreck Diving', 'Underground River'],
      includes: ['Island Resorts', 'Boat Transfers', 'Snorkeling Gear', 'Breakfast Daily', 'Tour Guide']
    },
    {
      id: 2,
      name: 'Philippines Beach Paradise',
      duration: '7 Days / 6 Nights',
      price: '$1,099',
      image: 'https://images.unsplash.com/photo-1526951521990-620dc14c214b?auto=format&fit=crop&w=2087&q=80',
      highlights: ['Boracay White Beach', 'Puka Shell Beach', 'Sunset Sailing', 'Island Parties'],
      includes: ['Beachfront Hotels', 'Welcome Drink', 'Island Activities', 'Breakfast Included', 'Airport Transfers']
    },
    {
      id: 3,
      name: 'Philippines Adventure Tour',
      duration: '12 Days / 11 Nights',
      price: '$1,899',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=2076&q=80',
      highlights: ['Chocolate Hills', 'Rice Terraces', 'Whale Shark Watching', 'Firefly River Cruises'],
      includes: ['Eco Lodges', 'Adventure Guides', 'All Activities', 'Most Meals', 'Domestic Flights']
    }
  ];

  const attractions = [
    {
      name: 'Palawan Islands',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=500&q=80',
      description: 'World\'s best islands with stunning lagoons and limestone cliffs'
    },
    {
      name: 'Boracay Island',
      image: 'https://images.unsplash.com/photo-1526951521990-620dc14c214b?auto=format&fit=crop&w=500&q=80',
      description: 'Famous white sand beach and vibrant nightlife destination'
    },
    {
      name: 'Banaue Rice Terraces',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=500&q=80',
      description: '2,000-year-old terraces carved into mountains by ancestors'
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
            backgroundImage: `url('https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=2074&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Philippines</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Pearl of the Orient • 7,641 Islands • Tropical Paradise</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">Discover the Philippines</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Philippines is an archipelago of over 7,000 islands, each offering unique beauty and experiences. From world-class beaches to vibrant cities and rich cultural heritage, this tropical paradise will capture your heart.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Experience the warm hospitality of the Filipino people, explore diverse landscapes, and create unforgettable memories in this island nation.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-umbrella-beach text-[#d4af37]"></i>
                  <span>Stunning Beaches</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-water text-[#d4af37]"></i>
                  <span>Crystal Waters</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-mountain text-[#d4af37]"></i>
                  <span>Volcanic Landscapes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-smile text-[#d4af37]"></i>
                  <span>Friendly People</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=500&q=80" alt="Palawan" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1526951521990-620dc14c214b?auto=format&fit=crop&w=500&q=80" alt="Boracay" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=500&q=80" alt="Rice Terraces" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJC2TF5YqserSsYWrubE3yccy2obXAgeouQ&s" alt="Filipino Culture" className="rounded-2xl h-48 w-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Philippines Travel Packages
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
                    <Button onClick={() => handlePackageClick(pkg)} variant="[#1a365d]">
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
            Must-Visit Destinations
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

      {/* Marine Life */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
              Marine & Wildlife Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-fish text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Whale Sharks</h3>
                <p className="text-gray-600 mb-2">Donsol & Oslob</p>
                <p className="text-sm text-gray-600">Swim with gentle giants in their natural habitat</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#2d3748] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-water text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Coral Reefs</h3>
                <p className="text-gray-600 mb-2">Tubbataha Reef</p>
                <p className="text-sm text-gray-600">Explore UNESCO World Heritage marine park</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#1a365d] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-ship text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Wreck Diving</h3>
                <p className="text-gray-600 mb-2">Coron Bay</p>
                <p className="text-sm text-gray-600">Discover WWII Japanese shipwrecks</p>
              </Card>
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

export default Philippines;
