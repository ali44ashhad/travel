import React, { useState } from 'react';
import Button from '../components/common/Button';
import Card, { ImageCard } from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const SouthAmerica = () => {
  const [selectedAdventure, setSelectedAdventure] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const adventures = [
    {
      id: 1,
      name: 'Machu Picchu & Inca Trail',
      country: 'Peru',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
      description: 'Trek the ancient Inca Trail to the lost city of Machu Picchu',
      price: 'From $2,999',
      duration: '8-12 days',
      difficulty: 'Moderate to Challenging',
      highlights: ['Inca Trail Trek', 'Sacred Valley', 'Cusco Exploration', 'Local Markets']
    },
    {
      id: 2,
      name: 'Amazon Rainforest Expedition',
      country: 'Brazil',
      image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      description: "Explore the world's largest rainforest and its incredible biodiversity",
      price: 'From $3,499',
      duration: '7-10 days',
      difficulty: 'Moderate',
      highlights: ['Jungle Lodges', 'River Expeditions', 'Wildlife Spotting', 'Indigenous Culture']
    },
    {
      id: 3,
      name: 'Patagonia Wilderness Trek',
      country: 'Chile & Argentina',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Hike through some of the most spectacular landscapes on Earth',
      price: 'From $4,199',
      duration: '10-14 days',
      difficulty: 'Challenging',
      highlights: ['Torres del Paine', 'Perito Moreno Glacier', 'Fitz Roy Massif', 'Gaucho Culture']
    }
  ];

  const handleAdventureClick = (adventure) => {
    setSelectedAdventure(adventure);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[80vh] text-white flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            South America
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover ancient civilizations, breathtaking landscapes, and vibrant cultures across South America's most spectacular destinations
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                South American Adventures
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                South America offers some of the world's most diverse and dramatic landscapes, from the Andes Mountains to the Amazon Rainforest. Each destination provides unique cultural experiences and unforgettable adventures.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our South American journeys combine ancient history with natural wonders, ensuring you experience the continent's rich heritage while exploring its most spectacular environments.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-mountain text-[#d4af37]"></i>
                  <span>Andes Mountains</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-tree text-[#d4af37]"></i>
                  <span>Amazon Rainforest</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-history text-[#d4af37]"></i>
                  <span>Ancient Cultures</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="fas fa-umbrella-beach text-[#d4af37]"></i>
                  <span>Stunning Beaches</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80"
                alt="South America Overview"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Featured Adventures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map(adventure => (
              <ImageCard
                key={adventure.id}
                image={adventure.image}
                title={adventure.name}
                description={adventure.description}
                overlay={true}
                action={
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-serif font-bold text-[#1a365d] mb-1">
                        {adventure.price}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>{adventure.duration}</span>
                        <span>•</span>
                        <span>{adventure.country}</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleAdventureClick(adventure)}
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

      {/* Cultural Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d4af37] text-center mb-12">
            Cultural Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-utensils text-xl"></i>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#d4af37] mb-3">
                Culinary Delights
              </h3>
              <p className="text-gray-600">
                Experience diverse cuisines from Peruvian ceviche to Argentine asado and Brazilian feijoada
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-music text-xl"></i>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#d4af37] mb-3">
                Music & Dance
              </h3>
              <p className="text-gray-600">
                Immerse yourself in vibrant musical traditions from tango to samba and Andean folk music
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hands-helping text-xl"></i>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#d4af37] mb-3">
                Local Communities
              </h3>
              <p className="text-gray-600">
                Connect with indigenous communities and learn about traditional ways of life
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Adventure Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedAdventure?.name}
        size="lg"
      >
        {selectedAdventure && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedAdventure.image}
                  alt={selectedAdventure.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                />
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-[#d4af37]">Country</div>
                    <div>{selectedAdventure.country}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-[#d4af37]">Difficulty</div>
                    <div>{selectedAdventure.difficulty}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-serif font-bold text-[#1a365d]">
                    {selectedAdventure.price}
                  </div>
                  <div className="text-lg text-gray-600">
                    {selectedAdventure.duration}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {selectedAdventure.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Adventure Highlights</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedAdventure.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="primary" className="w-full">
                  Book This Adventure
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SouthAmerica;
