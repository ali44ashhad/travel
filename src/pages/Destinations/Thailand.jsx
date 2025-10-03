import React, { useState } from 'react'; 
import Button from '../../components/common/Button';
import Card, { ImageCard } from '../../components/ui/Card';
import Modal from '../../components/ui/Modal';

const Thailand = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Thailand Island Hopping',
      duration: '9 Days / 8 Nights',
      price: '$1,499',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2070&q=80',
      highlights: ['Phi Phi Islands', 'Phuket Beaches', 'James Bond Island', 'Snorkeling & Diving'],
      includes: ['Beach Resorts', 'Island Tours', 'Speedboat Transfers', 'Breakfast Daily', 'English Guide']
    },
    {
      id: 2,
      name: 'Thailand Cultural Journey',
      duration: '7 Days / 6 Nights',
      price: '$1,099',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2069&q=80',
      highlights: ['Bangkok Temples', 'Ayutthaya Ruins', 'Floating Markets', 'Thai Cooking Class'],
      includes: ['City Hotels', 'Cultural Tours', 'Cooking Class', 'All Entrance Fees', 'Local Transport']
    },
    {
      id: 3,
      name: 'Thailand Luxury Escape',
      duration: '12 Days / 11 Nights',
      price: '$2,799',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2069&q=80',
      highlights: ['Private Yacht Charter', 'Luxury Villas', 'Michelin Dining', 'Private Guides'],
      includes: ['5-Star Accommodation', 'Private Transfers', 'Gourmet Meals', 'Personal Guide', 'Luxury Experiences']
    }
  ];

  const attractions = [
    {
      name: 'Bangkok',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=80',
      description: 'Vibrant capital city with golden temples and bustling street markets'
    },
    {
      name: 'Chiang Mai',
      image: 'https://t3.ftcdn.net/jpg/01/70/97/82/360_F_170978243_Yic42DaWc9QdqzdWi93WrMxU7R0xiWK7.jpg',
      description: 'Cultural hub in northern Thailand with ancient temples and mountain scenery'
    },
    {
      name: 'Phuket',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=500&q=80',
      description: 'Thailand\'s largest island with stunning beaches and vibrant nightlife'
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
            backgroundImage: `url('https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4" style={{ color: '#1a365d' }}>Thailand</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto" style={{ color: '#2d3748' }}>Land of Smiles • Tropical Paradise • Cultural Wonder</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20" style={{ backgroundColor: '#f7fafc' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: '#1a365d' }}>Experience Thailand</h2>
              <p className="text-lg mb-6" style={{ color: '#2d3748' }}>
                Thailand is a country that captivates every traveler with its perfect blend of ancient traditions and modern energy. From the bustling streets of Bangkok to the tranquil islands of the south, Thailand offers endless possibilities for adventure and relaxation.
              </p>
              <p className="text-lg mb-8" style={{ color: '#2d3748' }}>
                Discover golden temples, indulge in world-renowned cuisine, and experience the famous Thai hospitality that makes this country so special.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-umbrella-beach" style={{ color: '#d4af37' }}></i>
                  <span>Pristine Beaches</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-utensils" style={{ color: '#d4af37' }}></i>
                  <span>Amazing Food</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-landmark" style={{ color: '#d4af37' }}></i>
                  <span>Ancient Temples</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: '#2d3748' }}>
                  <i className="fas fa-shopping-bag" style={{ color: '#d4af37' }}></i>
                  <span>Vibrant Markets</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=80" alt="Bangkok" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://t3.ftcdn.net/jpg/01/70/97/82/360_F_170978243_Yic42DaWc9QdqzdWi93WrMxU7R0xiWK7.jpg" alt="Chiang Mai" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=500&q=80" alt="Phuket" className="rounded-2xl h-48 w-full object-cover"/>
              <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80" alt="Thai Islands" className="rounded-2xl h-48 w-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12" style={{ color: '#1a365d' }}>
            Thailand Travel Packages
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
                      style={{ backgroundColor: '#1a365d', color: '#f7fafc' }}
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
            Must-Visit Destinations
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

      {/* Thai Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: '#1a365d' }}>
              Unique Thai Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#d4af37', color: '#f7fafc' }}>
                  <i className="fas fa-utensils text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: '#1a365d' }}>Thai Cuisine</h3>
                <p style={{ color: '#2d3748' }} className="mb-2">Cooking Classes</p>
                <p style={{ color: '#2d3748' }} className="text-sm">Learn to cook authentic Thai dishes from local experts</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2d3748', color: '#f7fafc' }}>
                  <i className="fas fa-spa text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: '#1a365d' }}>Thai Massage</h3>
                <p style={{ color: '#2d3748' }} className="mb-2">Wellness Retreats</p>
                <p style={{ color: '#2d3748' }} className="text-sm">Experience traditional Thai massage and wellness treatments</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1a365d', color: '#f7fafc' }}>
                  <i className="fas fa-water text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: '#1a365d' }}>Island Hopping</h3>
                <p style={{ color: '#2d3748' }} className="mb-2">Andaman Sea</p>
                <p style={{ color: '#2d3748' }} className="text-sm">Explore stunning islands and crystal-clear waters</p>
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
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold" style={{ color: '#2d3748' }}>Duration</div>
                    <div style={{ color: '#2d3748' }}>{selectedPackage.duration}</div>
                  </div>
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold" style={{ color: '#2d3748' }}>Price</div>
                    <div style={{ color: '#d4af37', fontWeight: '600' }}>{selectedPackage.price}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2d3748' }}>Package Highlights</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPackage.highlights.map((highlight, index) => (
                        <li key={index} style={{ color: '#2d3748' }}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: '#2d3748' }}>What's Included</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPackage.includes.map((item, index) => (
                        <li key={index} style={{ color: '#2d3748' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button style={{ backgroundColor: '#1a365d', color: '#f7fafc' }} className="w-full mb-4">
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

export default Thailand;
