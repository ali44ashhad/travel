import React, { useState } from 'react'; 
import Button from '../components/common/Button';
import Card, { ImageCard } from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const Adventure = () => {
  const [selectedAdventure, setSelectedAdventure] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const adventures = [
    {
      id: 1,
      name: 'Himalayan Trekking Expedition',
      location: 'Nepal',
      image: 'https://trekthehimalayas.com/images/HomePageImages/Desktop/1835c898-ade2-445b-9567-250332b15fc7_Kedarkantha-Trek.webp',
      description: 'Challenge yourself with high-altitude trekking in the world\'s highest mountains',
      price: 'From $3,299',
      duration: '14-21 days',
      difficulty: 'Challenging',
      fitnessLevel: 'High',
      highlights: ['Everest Base Camp', 'High Passes', 'Sherpa Culture', 'Mountain Lodges']
    },
    {
      id: 2,
      name: 'Amazon Jungle Survival',
      location: 'Brazil',
      image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      description: 'Learn survival skills in the world\'s largest rainforest with expert guides',
      price: 'From $2,899',
      duration: '8-12 days',
      difficulty: 'Moderate',
      fitnessLevel: 'Medium',
      highlights: ['Jungle Trekking', 'River Navigation', 'Wildlife Tracking', 'Survival Training']
    },
    {
      id: 3,
      name: 'Patagonia Ice Trekking',
      location: 'Argentina & Chile',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Walk on ancient glaciers and explore the southernmost wilderness',
      price: 'From $4,199',
      duration: '10-14 days',
      difficulty: 'Moderate to Challenging',
      fitnessLevel: 'Medium to High',
      highlights: ['Perito Moreno Glacier', 'Ice Trekking', 'Fitz Roy Massif', 'Gaucho Culture']
    }
  ];

  const handleAdventureClick = (adventure) => {
    setSelectedAdventure(adventure);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Adventure Travel
          </h1>
          <p className="text-xl text-[#f7fafc] max-w-2xl mx-auto">
            Push your limits and discover the world's most thrilling landscapes and experiences
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                Extreme Adventures
              </h2>
              <p className="text-lg text-[#2d3748] mb-6">
                For those who seek the extraordinary, our adventure travel experiences take you to the edge of the world and beyond. From high-altitude treks to jungle expeditions, each adventure is designed to challenge and inspire.
              </p>
              <p className="text-lg text-[#2d3748] mb-8">
                Our expert guides and comprehensive safety protocols ensure you can push your boundaries while staying secure in some of the planet's most remote and spectacular environments.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-mountain text-[#d4af37]"></i>
                  <span>High-Altitude Trekking</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-tree text-[#d4af37]"></i>
                  <span>Jungle Expeditions</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-snowflake text-[#d4af37]"></i>
                  <span>Glacier Exploration</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-water text-[#d4af37]"></i>
                  <span>River Adventures</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg="
                alt="Adventure Travel"
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
                      <div className="flex items-center space-x-2 text-sm text-[#2d3748]">
                        <span>{adventure.duration}</span>
                        <span>•</span>
                        <span>{adventure.location}</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleAdventureClick(adventure)}
                      className="bg-[#1a365d] text-white hover:bg-[#142844]"
                    >
                      Explore
                    </Button>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Preparation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Safety & Preparation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{icon:'fa-user-shield', title:'Expert Guides', desc:'All adventures led by certified guides with extensive local knowledge and emergency training'},
              {icon:'fa-first-aid', title:'Safety Equipment', desc:'Top-quality gear and comprehensive safety equipment provided for all activities'},
              {icon:'fa-clipboard-check', title:'Preparation Support', desc:'Detailed pre-trip information, fitness guidelines, and equipment checklists provided'}].map((item,index)=>(
                <Card key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${item.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">{item.title}</h3>
                  <p className="text-[#2d3748]">{item.desc}</p>
                </Card>
              ))}
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
                  {['Location','Difficulty','Fitness Level','Duration'].map((label,i)=>(
                    <div key={i} className="bg-[#f7fafc] p-3 rounded-lg">
                      <div className="font-semibold text-[#2d3748]">{label}</div>
                      <div>{
                        label==='Location'?selectedAdventure.location:
                        label==='Difficulty'?selectedAdventure.difficulty:
                        label==='Fitness Level'?selectedAdventure.fitnessLevel:
                        selectedAdventure.duration
                      }</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[#1a365d] mb-4">
                  {selectedAdventure.price}
                </div>
                <p className="text-[#2d3748] mb-6">{selectedAdventure.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Adventure Highlights</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedAdventure.highlights.map((highlight,index)=>(
                        <li key={index} className="text-[#2d3748]">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-[#d4af37] mb-2">Important Notes</h4>
                  <p className="text-[#d4af37] text-sm">
                    This adventure requires good physical condition. Medical clearance may be required for high-altitude treks. Comprehensive travel insurance is mandatory.
                  </p>
                </div>

                <Button className="w-full bg-[#1a365d] text-white hover:bg-[#142844]">
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

export default Adventure;
