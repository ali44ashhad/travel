import React, { useState } from 'react'; 
import Button from '../../components/common/Button';
import Card, { ImageCard } from '../../components/ui/Card';
import Modal from '../../components/ui/Modal';

const Vietnam = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Vietnam Heritage Tour',
      duration: '10 Days / 9 Nights',
      price: '$1,599',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Halong Bay Cruise', 'Hoi An Ancient Town', 'Hue Imperial City', 'Mekong Delta'],
      includes: ['4-Star Hotels', 'Domestic Flights', 'Expert Guide', 'All Meals', 'Entrance Fees']
    },
    {
      id: 2,
      name: 'Vietnam Food Adventure',
      duration: '8 Days / 7 Nights',
      price: '$1,199',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Hanoi Street Food Tour', 'Cooking Classes', 'Floating Markets', 'Local Food Experiences'],
      includes: ['Food Tours', 'Cooking Classes', 'Hotel Accommodation', 'Local Transport', 'Food Guide']
    },
    {
      id: 3,
      name: 'Vietnam Coastal Explorer',
      duration: '12 Days / 11 Nights',
      price: '$2,199',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      highlights: ['Da Nang Beaches', 'Nha Trang Islands', 'Phu Quoc Paradise', 'Coastal Resorts'],
      includes: ['Beach Resorts', 'Island Hopping', 'Water Activities', 'Luxury Accommodation', 'Private Transfers']
    }
  ];

  const attractions = [
    {
      name: 'Halong Bay',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'UNESCO World Heritage site with thousands of limestone islands'
    },
    {
      name: 'Hoi An Ancient Town',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Beautiful preserved trading port with lantern-lit streets'
    },
    {
      name: 'Sapa Rice Terraces',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      description: 'Stunning mountain landscapes with ethnic minority villages'
    }
  ];

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center" style={{ color: '#f7fafc' }}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4" style={{ color: '#f7fafc' }}>Vietnam</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto" style={{ color: '#f7fafc' }}>Timeless Charm • Rich Heritage • Breathtaking Landscapes</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20" style={{ backgroundColor: '#f7fafc' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: '#1a365d' }}>Experience Vietnam</h2>
              <p className="text-lg mb-6" style={{ color: '#2d3748' }}>
                Vietnam is a country of breathtaking natural beauty and cultural complexity. From the bustling cities of Hanoi and Ho Chi Minh to the tranquil countryside and stunning coastlines, Vietnam offers an unforgettable journey.
              </p>
              <p className="text-lg mb-8" style={{ color: '#2d3748' }}>
                Discover ancient traditions, sample world-renowned cuisine, and explore landscapes that range from soaring mountains to emerald waters.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-utensils" style={{ color: '#d4af37' }}></i>
                  <span>World-Class Cuisine</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-history" style={{ color: '#d4af37' }}></i>
                  <span>Rich History</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-mountain" style={{ color: '#d4af37' }}></i>
                  <span>Stunning Landscapes</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-smile" style={{ color: '#d4af37' }}></i>
                  <span>Friendly People</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Halong Bay" className="rounded-2xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Hoi An" className="rounded-2xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="Sapa" className="rounded-2xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Vietnamese Culture" className="rounded-2xl h-48 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12" style={{ color: '#1a365d' }}>
            Vietnam Travel Packages
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
                    <div className="text-2xl font-serif font-bold" style={{ color: '#1a365d' }}>
                      {pkg.price}
                    </div>
                    <Button 
                      onClick={() => handlePackageClick(pkg)}
                      variant="primary"
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
      <section className="py-20" style={{ backgroundColor: '#f7fafc' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12" style={{ color: '#1a365d' }}>
            Must-Visit Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2" style={{ color: '#1a365d' }}>
                    {attraction.name}
                  </h3>
                  <p style={{ color: '#2d3748' }}>
                    {attraction.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


        {/* Best Time to Visit */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                Best Time to Visit Vietnam
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-sun text-xl"></i>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">North Vietnam</h3>
                  <p className="text-gray-600 mb-2">Sep-Nov, Mar-Apr</p>
                  <p className="text-sm text-gray-600">Pleasant weather for Hanoi and Sapa</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-umbrella-beach text-xl"></i>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Central Vietnam</h3>
                  <p className="text-gray-600 mb-2">Jan-Aug</p>
                  <p className="text-sm text-gray-600">Best for Hoi An and coastal areas</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-tint text-xl"></i>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">South Vietnam</h3>
                  <p className="text-gray-600 mb-2">Dec-Apr</p>
                  <p className="text-sm text-gray-600">Dry season for Ho Chi Minh and Mekong</p>
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
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                />
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-accent">Duration</div>
                    <div>{selectedPackage.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-accent">Price</div>
                    <div className="text-secondary font-semibold">{selectedPackage.price}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Package Highlights</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPackage.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">What's Included</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPackage.includes.map((item, index) => (
                        <li key={index} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button variant="primary" className="w-full mb-4">
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

export default Vietnam;