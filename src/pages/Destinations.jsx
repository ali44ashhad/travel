import React, { useState } from 'react'; 
import Button from '../components/common/Button';
import Card, { ImageCard } from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const regions = [
    { id: 'all', name: 'All Destinations' },
    { id: 'asia', name: 'Southeast Asia' },
    { id: 'europe', name: 'Europe' },
    { id: 'africa', name: 'Africa' },
    { id: 'americas', name: 'Americas' }
  ];

  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      region: 'asia',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      description: 'The Island of Gods offers stunning beaches, vibrant culture, and spiritual retreats.',
      highlights: ['Ubud Rice Terraces', 'Sacred Temples', 'Beach Clubs', 'Traditional Villages'],
      bestTime: 'April to October',
      price: 'From $1,299',
      duration: '7-14 days',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      region: 'europe',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      description: 'Famous for its breathtaking sunsets, white-washed buildings, and crystal-clear waters.',
      highlights: ['Oia Sunset', 'Wine Tasting', 'Volcanic Beaches', 'Ancient Ruins'],
      bestTime: 'May to October',
      price: 'From $2,199',
      duration: '5-7 days',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      region: 'asia',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Experience ancient traditions, stunning temples, and the beauty of seasonal changes.',
      highlights: ['Fushimi Inari Shrine', 'Geisha District', 'Bamboo Forest', 'Traditional Tea Ceremonies'],
      bestTime: 'March to May, October to November',
      price: 'From $2,899',
      duration: '8-12 days',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Siem Reap, Cambodia',
      region: 'asia',
      image: 'https://media.istockphoto.com/id/1153879780/photo/traveler-exploring-ancient-ruins-of-ta-prohm-temple-at-angkor-siem-reap-cambodia.jpg?s=612x612&w=0&k=20&c=cZPttlXn_MUtlxxteFmbkeE7TjJMPylXDc6NJ2t1xfw=',
      description: 'Home to the magnificent Angkor Wat and rich Khmer cultural heritage.',
      highlights: ['Angkor Wat', 'Floating Villages', 'Local Markets', 'Traditional Dance Shows'],
      bestTime: 'November to February',
      price: 'From $999',
      duration: '4-7 days',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Safari, Tanzania',
      region: 'africa',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      description: 'Witness the Great Migration and incredible wildlife in their natural habitat.',
      highlights: ['Serengeti National Park', 'Ngorongoro Crater', 'Great Migration', 'Maasai Culture'],
      bestTime: 'June to October',
      price: 'From $3,499',
      duration: '10-14 days',
      rating: 4.9
    },
    {
      id: 6,
      name: 'Machu Picchu, Peru',
      region: 'americas',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      description: 'Discover the ancient Incan citadel nestled in the Andes mountains.',
      highlights: ['Inca Trail', 'Sacred Valley', 'Cusco City', 'Local Textile Markets'],
      bestTime: 'May to September',
      price: 'From $2,499',
      duration: '8-12 days',
      rating: 4.8
    }
  ];

  const filteredDestinations = selectedRegion === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.region === selectedRegion);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
  
        <section className="bg-[#1a365d] text-white py-40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Explore Destinations
            </h1>
            <p className="text-xl text-[#f7fafc] max-w-2xl mx-auto">
              Discover our handpicked selection of extraordinary destinations around the world
            </p>
          </div>
        </section>

        {/* Region Filter */}
      <section className="py-12 bg-[#6b7280]">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-4">
      {regions.map(region => (
        <Button
          key={region.id}
          className={`${
            selectedRegion === region.id 
            ? 'bg-[#1a365d] text-white border-[#d4af37]' 
            : 'bg-transparent text-[#1a365d] border-[#d4af37]'
          } px-4 py-2 rounded-md font-semibold`}
          onClick={() => setSelectedRegion(region.id)}
        >
          {region.name}
        </Button>
      ))}
    </div>
  </div>
</section>

        {/* Destinations Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map(destination => (
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
                        className="bg-[#1a365d] text-white hover:bg-[#142844]"
                        onClick={() => handleDestinationClick(destination)}
                      >
                        View Details
                      </Button>
                    </div>
                  }
                />
              ))}

              {filteredDestinations.length === 0 && (
                <div className="text-center py-12 col-span-full">
                  <p className="text-xl text-[#2d3748]">No destinations found for this region.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-[#2d3748]font-serif font-bold mb-4">
              Can't Find Your Dream Destination?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-[#1a365d]">
              Our travel experts can create a custom itinerary tailored to your preferences.
            </p>
          
               <Button className="bg-[#1a365d] text-white hover:bg-[#142844] px-6 py-3 rounded-md font-semibold">
                           Contact Our Experts
                          </Button>
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

                  <Button className="w-full bg-[#1a365d] text-white hover:bg-[#142844]">
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

export default Destinations;
