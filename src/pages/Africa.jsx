import React, { useState } from 'react'; 
import Button from '../components/common/Button';
import Card, { ImageCard } from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const Africa = () => {
  const [selectedSafari, setSelectedSafari] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const safariExperiences = [
    {
      id: 1,
      name: 'Serengeti Migration Safari',
      country: 'Tanzania',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      description: 'Witness the Great Wildebeest Migration in the vast plains of Serengeti',
      price: 'From $4,999',
      duration: '8-12 days',
      bestTime: 'June - October',
      wildlife: ['Wildebeest', 'Lions', 'Elephants', 'Cheetahs'],
      highlights: ['Great Migration', 'Balloon Safari', 'Maasai Culture', 'Big Five']
    },
    {
      id: 2,
      name: 'Okavango Delta Expedition',
      country: 'Botswana',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      description: 'Explore the unique wetland ecosystem by mokoro canoe and walking safaris',
      price: 'From $5,499',
      duration: '7-10 days',
      bestTime: 'May - October',
      wildlife: ['Hippos', 'Crocodiles', 'Birds', 'Antelopes'],
      highlights: ['Mokoro Safaris', 'Walking Safaris', 'Bird Watching', 'Water-based Game Viewing']
    },
    {
      id: 3,
      name: 'Cape to Kruger Adventure',
      country: 'South Africa',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      description: 'Combine cosmopolitan Cape Town with premier Big Five game viewing',
      price: 'From $3,999',
      duration: '10-14 days',
      bestTime: 'May - September',
      wildlife: ['Big Five', 'Whales', 'Penguins', 'Marine Life'],
      highlights: ['Table Mountain', 'Winelands', 'Garden Route', 'Kruger National Park']
    }
  ];

  const handleSafariClick = (safari) => {
    setSelectedSafari(safari);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Africa
          </h1>
          <p className="text-xl text-[#f7fafc] max-w-2xl mx-auto">
            Experience the ultimate wildlife adventures and cultural encounters in Africa's most spectacular wilderness areas
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                African Safari Adventures
              </h2>
              <p className="text-lg text-[#2d3748] mb-6">
                Africa offers some of the world's most incredible wildlife experiences, from the Great Migration in Tanzania to the unique wetland ecosystems of Botswana. Each safari destination provides a distinct and unforgettable adventure.
              </p>
              <p className="text-lg text-[#2d3748] mb-8">
                Our African safaris combine luxury accommodations with expert guides, ensuring you have the best possible wildlife viewing opportunities while supporting conservation and local communities.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-paw text-[#d4af37]"></i>
                  <span>Big Five Encounters</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-hotel text-[#d4af37]"></i>
                  <span>Luxury Lodges</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-users text-[#d4af37]"></i>
                  <span>Cultural Experiences</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-camera text-[#d4af37]"></i>
                  <span>Photography Focus</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
                alt="African Safari"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safari Experiences */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Premier Safari Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariExperiences.map(safari => (
              <ImageCard
                key={safari.id}
                image={safari.image}
                title={safari.name}
                description={safari.description}
                overlay={true}
                action={
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-serif font-bold text-[#1a365d] mb-1">
                        {safari.price}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-[#2d3748]">
                        <span>{safari.duration}</span>
                        <span>•</span>
                        <span>{safari.country}</span>
                      </div>
                    </div>
                    <Button className="bg-[#1a365d] text-white hover:bg-[#142844]" onClick={() => handleSafariClick(safari)}>
                      View Safari
                    </Button>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Conservation & Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                alt="Conservation"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-[#1a365d] mb-4">
                Responsible Tourism
              </h3>
              <p className="text-lg text-[#2d3748] mb-6">
                We are committed to sustainable tourism practices that protect Africa's wildlife and support local communities. A portion of every safari booking goes directly to conservation efforts and community development projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-leaf text-[#d4af37] mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-[#2d3748]">Wildlife Protection</h4>
                    <p className="text-[#2d3748]">Supporting anti-poaching units and habitat conservation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-hand-holding-heart text-[#d4af37] mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-[#2d3748]">Community Empowerment</h4>
                    <p className="text-[#2d3748]">Creating employment and educational opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-recycle text-[#d4af37] mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-[#2d3748]">Eco-Friendly Practices</h4>
                    <p className="text-[#2d3748]">Minimizing environmental impact through sustainable operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedSafari?.name}
        size="lg"
      >
        {selectedSafari && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedSafari.image}
                  alt={selectedSafari.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                />
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Country</div>
                    <div>{selectedSafari.country}</div>
                  </div>
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Best Time</div>
                    <div>{selectedSafari.bestTime}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-serif font-bold text-[#1a365d]">
                    {selectedSafari.price}
                  </div>
                  <div className="text-lg text-[#2d3748]">
                    {selectedSafari.duration}
                  </div>
                </div>
                
                <p className="text-[#2d3748] mb-6">
                  {selectedSafari.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Wildlife Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSafari.wildlife.map((animal, index) => (
                        <span key={index} className="bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded-full text-sm">
                          {animal}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Experience Highlights</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedSafari.highlights.map((highlight, index) => (
                        <li key={index} className="text-[#2d3748]">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-[#1a365d] text-white hover:bg-[#142844]">
                  Book This Safari
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Africa;
