import React, { useState } from 'react'; 
import Button from '../../components/common/Button';
import Card, { ImageCard } from '../../components/ui/Card';
import Modal from '../../components/ui/Modal';

const Laos = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Laos Cultural Discovery',
      duration: '8 Days / 7 Nights',
      price: '$1,199',
      image: 'https://media.istockphoto.com/id/187489351/photo/royal-palace-in-luang-prabang-laos.jpg?s=612x612&w=0&k=20&c=cI9b8u992Ick57AFCM-G2v3Nbn91jCv0JP2aZWO5kGE=',
      highlights: ['Luang Prabang Temples', 'Kuang Si Waterfalls', 'Pak Ou Caves', 'Traditional Alms Giving'],
      includes: ['Boutique Hotels', 'English Guide', 'All Entrance Fees', 'Breakfast Daily', 'Airport Transfers']
    },
    {
      id: 2,
      name: 'Laos Adventure Tour',
      duration: '6 Days / 5 Nights',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2070&q=80',
      highlights: ['Vang Vieng Kayaking', 'Zip Lining', 'Cave Exploration', 'Mountain Trekking'],
      includes: ['Adventure Activities', 'Equipment Rental', 'Hotel Accommodation', 'Meals as Specified', 'Expert Guides']
    },
    {
      id: 3,
      name: 'Laos Luxury Retreat',
      duration: '10 Days / 9 Nights',
      price: '$1,899',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2080&q=80',
      highlights: ['Luxury River Cruise', 'Private Temple Tours', 'Elephant Sanctuary Visit', 'Spa Treatments'],
      includes: ['5-Star Accommodation', 'Private Guide & Driver', 'Gourmet Meals', 'Spa Services', 'Luxury Transfers']
    }
  ];

  const attractions = [
    {
      name: 'Luang Prabang',
      image: 'https://media.worldnomads.com/Explore/laos/aerial-view-of-luang-prabang-laos-gettyimages-marcinkilarski.jpg',
      description: 'UNESCO World Heritage town with ancient temples and French colonial architecture'
    },
    {
      name: 'Kuang Si Waterfalls',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2070&q=80',
      description: 'Turquoise multi-tiered waterfalls surrounded by lush jungle'
    },
    {
      name: 'Vang Vieng',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2080&q=80',
      description: 'Dramatic karst mountains and outdoor adventure activities'
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
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661916287718-edb15703cbaf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFvc3xlbnwwfHwwfHx8MA%3D%3D')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Laos</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Land of a Million Elephants • Timeless Beauty • Spiritual Serenity</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20" style={{ backgroundColor: "#f7fafc" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#1a365d" }}>Discover Laos</h2>
              <p className="text-lg mb-6" style={{ color: "#2d3748" }}>
                Laos remains one of Southeast Asia's most authentic and unspoiled destinations. This landlocked country offers a peaceful escape with its Buddhist traditions, stunning natural landscapes, and warm-hearted people.
              </p>
              <p className="text-lg mb-8" style={{ color: "#2d3748" }}>
                From the spiritual atmosphere of Luang Prabang to the adventurous landscapes of Vang Vieng, Laos invites you to slow down and embrace its gentle pace of life.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2" style={{ color: "#2d3748" }}>
                  <i className="fas fa-peace" style={{ color: "#d4af37" }}></i>
                  <span>Peaceful Atmosphere</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: "#2d3748" }}>
                  <i className="fas fa-water" style={{ color: "#d4af37" }}></i>
                  <span>Stunning Waterfalls</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: "#2d3748" }}>
                  <i className="fas fa-mountain" style={{ color: "#d4af37" }}></i>
                  <span>Dramatic Landscapes</span>
                </div>
                <div className="flex items-center space-x-2" style={{ color: "#2d3748" }}>
                  <i className="fas fa-hands-helping" style={{ color: "#d4af37" }}></i>
                  <span>Friendly Locals</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1686120552846-7caf1a345876?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHVhbmclMjBwcmFiYW5nfGVufDB8fDB8fHww" alt="Luang Prabang" className="rounded-2xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=80" alt="Kuang Si Waterfalls" className="rounded-2xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=500&q=80" alt="Vang Vieng" className="rounded-2xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=80" alt="Laos Culture" className="rounded-2xl h-48 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12" style={{ color: "#1a365d" }}>
            Laos Travel Packages
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
                    <div className="text-2xl font-serif font-bold" style={{ color: "#1a365d" }}>
                      {pkg.price}
                    </div>
                    <Button onClick={() => handlePackageClick(pkg)} variant="primary">
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
      <section className="py-20" style={{ backgroundColor: "#f7fafc" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12" style={{ color: "#1a365d" }}>
            Must-Visit Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2" style={{ color: "#1a365d" }}>
                    {attraction.name}
                  </h3>
                  <p style={{ color: "#2d3748" }}>{attraction.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#1a365d" }}>
              Cultural Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#d4af37" }}>
                  <i className="fas fa-hands text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "#1a365d" }}>Alms Giving</h3>
                <p className="mb-2" style={{ color: "#2d3748" }}>Tak Bat Ceremony</p>
                <p className="text-sm" style={{ color: "#2d3748" }}>Participate in the sacred morning alms giving to Buddhist monks</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#2d3748" }}>
                  <i className="fas fa-utensils text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "#1a365d" }}>Lao Cuisine</h3>
                <p className="mb-2" style={{ color: "#2d3748" }}>Food Experiences</p>
                <p className="text-sm" style={{ color: "#2d3748" }}>Discover unique Lao flavors and cooking traditions</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#1a365d" }}>
                  <i className="fas fa-spa text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "#1a365d" }}>Wellness</h3>
                <p className="mb-2" style={{ color: "#2d3748" }}>Traditional Healing</p>
                <p className="text-sm" style={{ color: "#2d3748" }}>Experience traditional Lao massage and herbal treatments</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedPackage?.name} size="lg">
        {selectedPackage && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img src={selectedPackage.image} alt={selectedPackage.name} className="w-full h-64 lg:h-80 object-cover rounded-2xl" />
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: "#f7fafc" }}>
                    <div className="font-semibold mb-1" style={{ color: "#2d3748" }}>Duration</div>
                    <div style={{ color: "#2d3748" }}>{selectedPackage.duration}</div>
                  </div>
                  <div className="p-3 rounded-lg" style={{ backgroundColor: "#f7fafc" }}>
                    <div className="font-semibold mb-1" style={{ color: "#2d3748" }}>Price</div>
                    <div className="font-semibold" style={{ color: "#d4af37" }}>{selectedPackage.price}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: "#2d3748" }}>Package Highlights</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPackage.highlights.map((highlight, index) => (
                        <li key={index} style={{ color: "#2d3748" }}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: "#2d3748" }}>What's Included</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPackage.includes.map((item, index) => (
                        <li key={index} style={{ color: "#2d3748" }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button variant="primary" className="w-full mb-4">Book This Package</Button>
                <Button variant="outline" className="w-full">Customize Itinerary</Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Laos;
