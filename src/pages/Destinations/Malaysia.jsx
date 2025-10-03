import React, { useState } from 'react';
import Button from '../../components/common/Button';
import Card, { ImageCard } from '../../components/ui/Card';
import Modal from '../../components/ui/Modal';

const Malaysia = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Malaysia Cultural Fusion',
      duration: '8 Days / 7 Nights',
      price: '$1,299',
      image: 'https://media.istockphoto.com/id/1224508786/photo/muslim-family-taking-pictures-of-food-during-the-eid-al-fitr.jpg?s=612x612&w=0&k=20&c=OpNac-LPfC3nO8mppKWzcziJrc0QVYqqsDb-rCAmg_c=',
      highlights: ['Kuala Lumpur City Tour', 'Penang Heritage Sites', 'Malacca Historical Center', 'Batu Caves'],
      includes: ['4-Star Hotels', 'Domestic Flights', 'English Guide', 'Breakfast Daily', 'Entrance Fees']
    },
    {
      id: 2,
      name: 'Malaysia Island Paradise',
      duration: '6 Days / 5 Nights',
      price: '$999',
      image: 'https://media.istockphoto.com/id/172440867/photo/a-beautiful-dock-and-cabana-on-the-water.jpg?s=612x612&w=0&k=20&c=B-Eb7PSuYNRYexIpo9kk5rWXYvH0H88x6MEUGvkci0k=',
      highlights: ['Langkawi Island Hopping', 'Pulau Redang Beaches', 'Snorkeling & Diving', 'Cable Car Ride'],
      includes: ['Beach Resorts', 'Island Tours', 'Water Activities', 'Breakfast Included', 'Boat Transfers']
    },
    {
      id: 3,
      name: 'Malaysia Nature Adventure',
      duration: '10 Days / 9 Nights',
      price: '$1,799',
      image: 'https://media.istockphoto.com/id/1255323103/photo/an-asian-chinese-family-of-2-children-standing-in-front-of-the-tropical-rainforest-in-the.jpg?s=612x612&w=0&k=20&c=PdFPOojn2P0nwhhLjxFniFlhSMKIZ2hbSiqrzTVjWjs=',
      highlights: ['Borneo Rainforest', 'Orangutan Sanctuary', 'Mount Kinabalu Trek', 'Wildlife Safari'],
      includes: ['Eco Resorts', 'Nature Guides', 'Park Fees', 'All Meals', 'Domestic Flights']
    }
  ];

  const attractions = [
    {
      name: 'Petronas Twin Towers',
      image: 'https://images.unsplash.com/photo-1597148543182-830ef7bbb904?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0cm9uYXMlMjB0b3dlcnN8ZW58MHx8MHx8fDA%3D',
      description: 'Iconic twin skyscrapers and architectural marvel in Kuala Lumpur'
    },
    {
      name: 'Langkawi Islands',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/59/langkawi.jpg?w=1400&h=1400&s=1',
      description: 'Tropical archipelago with pristine beaches and lush rainforests'
    },
    {
      name: 'George Town, Penang',
      image: 'https://media.istockphoto.com/id/1356620905/photo/georgetown-washington-dc-usa-skyline-on-the-potomac-river.jpg?s=612x612&w=0&k=20&c=80ShTxzIgf1YvwVdbiAb4UJT-PGc7YRp3DzfsWpQ2tI=',
      description: 'UNESCO World Heritage site with colonial architecture and street art'
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
            backgroundImage: `url('https://images.pexels.com/photos/22804/pexels-photo.jpg?cs=srgb&dl=pexels-umaraffan499-22804.jpg&fm=jpg')`
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Malaysia</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Truly Asia • Cultural Melting Pot • Tropical Wonder</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20" style={{ backgroundColor: '#f7fafc' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: '#1a365d' }}>
                Discover Malaysia
              </h2>
              <p className="text-lg mb-6" style={{ color: '#2d3748' }}>
                Malaysia is a vibrant tapestry of cultures, where Malay, Chinese, and Indian traditions blend seamlessly. From modern skyscrapers to ancient rainforests, this diverse nation offers something for every traveler.
              </p>
              <p className="text-lg mb-8" style={{ color: '#2d3748' }}>
                Experience the perfect fusion of tradition and modernity, with world-class infrastructure alongside rich cultural heritage and breathtaking natural beauty.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-building" style={{ color: '#d4af37' }}></i>
                  <span>Modern Cities</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-umbrella-beach" style={{ color: '#d4af37' }}></i>
                  <span>Pristine Islands</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-tree" style={{ color: '#d4af37' }}></i>
                  <span>Ancient Rainforests</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-utensils" style={{ color: '#d4af37' }}></i>
                  <span>Diverse Cuisine</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/94420/pexels-photo-94420.jpeg?cs=srgb&dl=pexels-umaraffan499-94420.jpg&fm=jpg" 
                alt="Kuala Lumpur" 
                className="rounded-2xl h-48 w-full object-cover"
              />
              <img 
                src="https://media.istockphoto.com/id/1255079890/photo/langkawi-island-kedah-malaysia.jpg?s=612x612&w=0&k=20&c=RLHuCTTo6PTjFCs-_5HY07Z-ZE31OfseMHJFmba8vR0=" 
                alt="Langkawi" 
                className="rounded-2xl h-48 w-full object-cover"
              />
              <img 
                src="https://media.istockphoto.com/id/920998748/photo/george-town-city-view-from-penang-hill-during-dawn.jpg?s=612x612&w=0&k=20&c=DkkTBtU3fEe5eLWWosya163baK5aC3C6mRrkiWaGw-Q=" 
                alt="Penang" 
                className="rounded-2xl h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=500&q=80" 
                alt="Malaysian Culture" 
                className="rounded-2xl h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12" style={{ color: '#1a365d' }}>
            Malaysia Travel Packages
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

      {/* Cultural Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: '#1a365d' }}>
              Cultural Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#d4af37', color: '#fff' }}>
                  <i className="fas fa-utensils text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: '#1a365d' }}>Food Paradise</h3>
                <p className="mb-2" style={{ color: '#2d3748' }}>Hawker Centers</p>
                <p className="text-sm" style={{ color: '#2d3748' }}>Sample diverse Malaysian cuisine from street food to fine dining</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1a365d', color: '#fff' }}>
                  <i className="fas fa-mosque text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: '#1a365d' }}>Religious Diversity</h3>
                <p className="mb-2" style={{ color: '#2d3748' }}>Places of Worship</p>
                <p className="text-sm" style={{ color: '#2d3748' }}>Visit mosques, temples, and churches showcasing religious harmony</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2d3748', color: '#fff' }}>
                  <i className="fas fa-shopping-bag text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: '#1a365d' }}>Shopping Haven</h3>
                <p className="mb-2" style={{ color: '#2d3748' }}>Markets & Malls</p>
                <p className="text-sm" style={{ color: '#2d3748' }}>From luxury malls to traditional night markets</p>
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
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#f7fafc' }}>
                    <div className="font-semibold mb-1" style={{ color: '#2d3748' }}>Duration</div>
                    <div style={{ color: '#2d3748' }}>{selectedPackage.duration}</div>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#f7fafc' }}>
                    <div className="font-semibold mb-1" style={{ color: '#2d3748' }}>Price</div>
                    <div className="font-semibold" style={{ color: '#d4af37' }}>{selectedPackage.price}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2d3748' }}>Package Highlights</h4>
                    <ul className="list-disc list-inside space-y-1" style={{ color: '#2d3748' }}>
                      {selectedPackage.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2d3748' }}>What's Included</h4>
                    <ul className="list-disc list-inside space-y-1" style={{ color: '#2d3748' }}>
                      {selectedPackage.includes.map((item, index) => (
                        <li key={index}>{item}</li>
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

export default Malaysia;
