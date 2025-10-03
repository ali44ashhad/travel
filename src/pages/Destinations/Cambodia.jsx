import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Card, { ImageCard } from '../../components/ui/Card';
import Modal from '../../components/ui/Modal';

const Cambodia = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Angkor Wat Discovery',
      duration: '5 Days / 4 Nights',
      price: '$899',
      image: 'https://ychef.files.bbci.co.uk/1280x720/p04wc2mf.jpg',
      highlights: ['Angkor Wat Sunrise', 'Bayon Temple', 'Ta Prohm', 'Angkor Thom'],
      includes: ['Siem Reap Hotel', '3-Day Temple Pass', 'English Guide', 'Tuk-tuk Transport', 'Breakfast Daily']
    },
    {
      id: 2,
      name: 'Cambodia Cultural Journey',
      duration: '7 Days / 6 Nights',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2070&q=80',
      highlights: ['Phnom Penh City Tour', 'Killing Fields', 'Royal Palace', 'Tonle Sap Lake'],
      includes: ['City Hotels', 'Domestic Flight', 'All Entrance Fees', 'Expert Guide', 'Some Meals']
    },
    {
      id: 3,
      name: 'Cambodia Beach Escape',
      duration: '8 Days / 7 Nights',
      price: '$1,499',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2069&q=80',
      highlights: ['Sihanoukville Beaches', 'Koh Rong Island', 'Mangrove Kayaking', 'Island Hopping'],
      includes: ['Beach Resort', 'Island Tours', 'Water Activities', 'All Transfers', 'Breakfast Included']
    }
  ];

  const attractions = [
    {
      name: 'Angkor Wat',
      image: 'https://ychef.files.bbci.co.uk/1280x720/p04wc2mf.jpg',
      description: 'Largest religious monument in the world, built in the 12th century'
    },
    {
      name: 'Bayon Temple',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=500&q=80',
      description: 'Famous for its massive stone faces smiling serenely at visitors'
    },
    {
      name: 'Tonle Sap Lake',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80',
      description: 'Southeast Asia\'s largest freshwater lake with floating villages'
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
            backgroundImage: `url('https://images.unsplash.com/photo-1599283787923-51b965a58b05?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8fDA%3D')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Cambodia</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Kingdom of Wonder • Ancient Temples • Rich Heritage</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">Explore Cambodia</h2>
              <p className="text-lg text-gray-600 mb-6">
                Cambodia is a country of contrasts, where ancient temple complexes stand alongside vibrant modern cities. Home to the magnificent Angkor Wat, Cambodia offers a journey through centuries of Khmer empire glory and resilient cultural heritage.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From the awe-inspiring temples of Siem Reap to the capital city of Phnom Penh and pristine southern beaches, Cambodia captivates with its rich history and warm-hearted people.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-landmark text-[#d4af37]"></i>
                  <span>Ancient Temples</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-history text-[#d4af37]"></i>
                  <span>Rich History</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-umbrella-beach text-[#d4af37]"></i>
                  <span>Pristine Beaches</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-smile text-[#d4af37]"></i>
                  <span>Friendly People</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src=" https://ychef.files.bbci.co.uk/1280x720/p04wc2mf.jpg" alt="Angkor Wat" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=500&q=80" alt="Bayon Temple" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80" alt="Cambodian Beach" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=80" alt="Cambodian Culture" className="rounded-2xl h-48 w-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Cambodia Travel Packages
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
            Must-Visit Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-2">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
              Temple Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-sun text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Sunrise at Angkor</h3>
                <p className="text-gray-600 mb-2">Magical Experience</p>
                <p className="text-sm text-gray-600">Watch the sun rise behind Angkor Wat's iconic silhouette</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tree text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Ta Prohm</h3>
                <p className="text-gray-600 mb-2">Jungle Temple</p>
                <p className="text-sm text-gray-600">Explore the temple embraced by massive tree roots</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#2d3748] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-camera text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Photography Tour</h3>
                <p className="text-gray-600 mb-2">Best Angles</p>
                <p className="text-sm text-gray-600">Capture the temples in perfect light with expert guidance</p>
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

export default Cambodia;
