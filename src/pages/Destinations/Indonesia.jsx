import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Card, { ImageCard } from '../../components/ui/Card';
import Modal from '../../components/ui/Modal';

const Indonesia = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Bali Cultural Immersion',
      duration: '7 Days / 6 Nights',
      price: '$1,299',
      image: 'https://www.shutterstock.com/image-photo/women-tourists-standing-besakih-temple-600nw-2359094599.jpg',
      highlights: ['Ubud Rice Terraces', 'Traditional Temple Visits', 'Balinese Cooking Class', 'Sacred Monkey Forest'],
      includes: ['Luxury Villa Accommodation', 'Private Guide', 'All Entrance Fees', 'Daily Breakfast', 'Airport Transfers']
    },
    {
      id: 2,
      name: 'Bali Beach Paradise',
      duration: '5 Days / 4 Nights',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2070&q=80',
      highlights: ['Seminyak Beach Clubs', 'Sunset Uluwatu Temple', 'Beachfront Resort', 'Water Sports Activities'],
      includes: ['Beachfront Hotel', 'Welcome Drink', 'Beach Club Access', 'Breakfast Included', 'Spa Credit']
    },
    {
      id: 3,
      name: 'Bali Luxury Retreat',
      duration: '10 Days / 9 Nights',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=2076&q=80',
      highlights: ['Private Villa with Pool', 'Personal Chef', 'Yoga & Meditation', 'Luxury Spa Treatments', 'Private Car with Driver'],
      includes: ['Private Villa', 'Personal Butler', 'Gourmet Meals', 'Spa Treatments', 'Private Transfers']
    }
  ];

  const attractions = [
    {
      name: 'Ubud Rice Terraces',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=2076&q=80',
      description: 'Stunning green rice paddies with traditional farming methods'
    },
    {
      name: 'Uluwatu Temple',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2070&q=80',
      description: 'Ancient sea temple with spectacular sunset views'
    },
    {
      name: 'Mount Batur',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=2072&q=80',
      description: 'Active volcano with sunrise trekking experiences'
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
            backgroundImage: `url('https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=2072&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Bali, Indonesia</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Island of Gods • Cultural Paradise • Tropical Beauty</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">Discover Bali</h2>
              <p className="text-lg text-gray-600 mb-6">
                Bali is more than just a destination; it's an experience. Known as the Island of Gods, Bali offers a perfect blend of stunning natural beauty, rich cultural heritage, and warm hospitality.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From ancient temples and lush rice terraces to pristine beaches and vibrant nightlife, Bali captivates every traveler with its unique charm and spiritual energy.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-umbrella-beach text-[#d4af37]"></i>
                  <span>Pristine Beaches</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-landmark text-[#d4af37]"></i>
                  <span>Ancient Temples</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-spa text-[#d4af37]"></i>
                  <span>Wellness Retreats</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-utensils text-[#d4af37]"></i>
                  <span>Delicious Cuisine</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2070&q=80" alt="Bali Temple" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=2076&q=80" alt="Bali Rice Terraces" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=2072&q=80" alt="Bali Beach" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://www.shutterstock.com/image-photo/women-tourists-standing-besakih-temple-600nw-2359094599.jpg" alt="Bali Culture" className="rounded-2xl h-48 w-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Bali Travel Packages
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

      {/* Best Time to Visit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
              Best Time to Visit Bali
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-sun text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Dry Season</h3>
                <p className="text-gray-600 mb-2">April - October</p>
                <p className="text-sm text-gray-600">Perfect for beach activities and outdoor exploration</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-leaf text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Green Season</h3>
                <p className="text-gray-600 mb-2">November - March</p>
                <p className="text-sm text-gray-600">Lush landscapes, fewer crowds, lower prices</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#2d3748] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar-alt text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Festival Season</h3>
                <p className="text-gray-600 mb-2">Year-round</p>
                <p className="text-sm text-gray-600">Experience cultural festivals and ceremonies</p>
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

export default Indonesia;
