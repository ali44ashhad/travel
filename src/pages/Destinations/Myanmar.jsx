import React, { useState } from 'react'; 
import Button from '../../components/common/Button';
import Card, { ImageCard } from '../../components/ui/Card';
import Modal from '../../components/ui/Modal';

const Myanmar = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      name: 'Myanmar Cultural Heritage',
      duration: '8 Days / 7 Nights',
      price: '$1,399',
      image: 'https://t3.ftcdn.net/jpg/00/62/07/60/360_F_62076041_BFBjA2NFCVrM2sr85FeDvqJYQyxi7659.jpg',
      highlights: ['Bagan Temples', 'Mandalay Palace', 'U Bein Bridge', 'Golden Rock'],
      includes: ['Boutique Hotels', 'English Guide', 'Domestic Flights', 'All Entrance Fees', 'Breakfast Daily']
    },
    {
      id: 2,
      name: 'Myanmar River Journey',
      duration: '10 Days / 9 Nights',
      price: '$1,799',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Irrawaddy River Cruise', 'Local Village Visits', 'Sunset at Bagan', 'Traditional Workshops'],
      includes: ['River Cruise Cabin', 'All Meals on Cruise', 'Shore Excursions', 'Expert Guide', 'Port Fees']
    },
    {
      id: 3,
      name: 'Myanmar Photography Tour',
      duration: '12 Days / 11 Nights',
      price: '$2,199',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      highlights: ['Sunrise Balloon over Bagan', 'Monastery Life Photography', 'Floating Gardens', 'Local Markets'],
      includes: ['Photography Guide', 'Hot Air Balloon Ride', 'Special Access Permits', 'Luxury Accommodation', 'Private Transfers']
    }
  ];

  const attractions = [
    {
      name: 'Bagan Archaeological Zone',
      image: 'https://media.istockphoto.com/id/504529012/photo/bagan-mynmar-archeological-zone.jpg?s=612x612&w=0&k=20&c=MZwMwAeWvL0gMnzF8OprqrN1W0vxSLGWxK0OblcBP8o=',
      description: 'Ancient city with over 2,000 Buddhist temples and pagodas'
    },
    {
      name: 'Inle Lake',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Floating villages and gardens with unique leg-rowing fishermen'
    },
    {
      name: 'Shwedagon Pagoda',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: '99-meter tall golden stupa, the most sacred Buddhist pagoda in Myanmar'
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
            backgroundImage: `url('https://t3.ftcdn.net/jpg/00/60/65/50/360_F_60655041_hRPBAaG0V1HJzSUsUT8VRhdPAaroLS3s.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Myanmar</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Golden Land • Ancient Kingdoms • Spiritual Heritage</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">Discover Myanmar</h2>
              <p className="text-lg text-[#2d3748] mb-6">
                Myanmar, the Golden Land, is a country of breathtaking beauty and deep spiritual heritage. From the ancient temples of Bagan to the floating gardens of Inle Lake, Myanmar offers a journey back in time to a world of traditional culture and warm hospitality.
              </p>
              <p className="text-lg text-[#2d3748] mb-8">
                Experience the magic of sunrise over thousands of temples, meet friendly locals, and discover a country that has preserved its traditions against the backdrop of stunning landscapes.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-landmark text-[#d4af37]"></i>
                  <span>Ancient Temples</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-water text-[#d4af37]"></i>
                  <span>Floating Villages</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-hands-helping text-[#d4af37]"></i>
                  <span>Friendly People</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-gem text-[#d4af37]"></i>
                  <span>Golden Pagodas</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://media.istockphoto.com/id/1392477783/photo/sulamani-temple-in-bagan.jpg?s=612x612&w=0&k=20&c=Kv3rB2P6O3kj8tK8sJf1Lz9eY1AJEWtac57PMxyNo_0=" 
                alt="Bagan Temples" 
                className="rounded-2xl h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Inle Lake" 
                className="rounded-2xl h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Shwedagon Pagoda" 
                className="rounded-2xl h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Myanmar Culture" 
                className="rounded-2xl h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Myanmar Travel Packages
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
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
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
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-[#2d3748]">
                    {attraction.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
              Cultural Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hotel text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Hot Air Balloon</h3>
                <p className="text-[#2d3748] mb-2">Bagan Sunrise</p>
                <p className="text-sm text-[#2d3748]">Float above thousands of ancient temples at sunrise</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-boat text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">River Cruise</h3>
                <p className="text-[#2d3748] mb-2">Irrawaddy River</p>
                <p className="text-sm text-[#2d3748]">Journey through rural Myanmar on a traditional river boat</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hands text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Local Workshops</h3>
                <p className="text-[#2d3748] mb-2">Traditional Crafts</p>
                <p className="text-sm text-[#2d3748]">Learn traditional crafts from local artisans</p>
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
                    <div className="font-semibold text-[#2d3748]">Duration</div>
                    <div>{selectedPackage.duration}</div>
                  </div>
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
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
                        <li key={index} className="text-[#2d3748]">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">What's Included</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedPackage.includes.map((item, index) => (
                        <li key={index} className="text-[#2d3748]">{item}</li>
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

export default Myanmar;
