import React, { useState } from 'react'; 
import Button from '../components/common/Button';
import Card, { ImageCard } from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const LuxuryTravel = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const luxuryExperiences = [
    {
      id: 1,
      name: 'Private Island Paradise',
      location: 'Maldives',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Exclusive private island resort with overwater villas and personalized service',
      price: 'From $12,999',
      duration: '7-14 days',
      includes: ['Private Villa', 'Personal Chef', 'Spa Treatments', 'Water Sports', 'Private Yacht']
    },
    {
      id: 2,
      name: 'European Castle Tour',
      location: 'France & Italy',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      description: 'Stay in historic castles with private tours and gourmet dining experiences',
      price: 'From $15,999',
      duration: '10-16 days',
      includes: ['Castle Accommodations', 'Private Guides', 'Michelin Star Dining', 'Wine Tastings', 'Helicopter Transfers']
    },
    {
      id: 3,
      name: 'African Safari in Style',
      location: 'Botswana & Rwanda',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      description: 'Luxury safari camps with private game drives and gorilla trekking',
      price: 'From $18,999',
      duration: '12-18 days',
      includes: ['Luxury Tented Suites', 'Private Guides', 'Gorilla Permits', 'Spa Services', 'Hot Air Balloon Safari']
    }
  ];

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      
        {/* Hero Section */}
        <section className="bg-[#1a365d] text-white py-40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Luxury Travel
            </h1>
            <p className="text-xl text-[#f7fafc] max-w-2xl mx-auto">
              Experience the world in ultimate comfort and style with our exclusive luxury travel collections
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                  Ultimate Luxury Experiences
                </h2>
                <p className="text-lg text-[#2d3748] mb-6">
                  Our luxury travel experiences redefine opulence, combining exclusive access with unparalleled service. From private islands to historic castles, each journey is meticulously crafted to provide the ultimate in comfort and sophistication.
                </p>
                <p className="text-lg text-[#2d3748] mb-8">
                  We partner with the world's most exclusive properties and service providers to ensure every detail exceeds your expectations, creating memories that will last a lifetime.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-[#2d3748]">
                    <i className="fas fa-crown text-[#d4af37]"></i>
                    <span>Exclusive Access</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#2d3748]">
                    <i className="fas fa-user-shield text-[#d4af37]"></i>
                    <span>Personalized Service</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#2d3748]">
                    <i className="fas fa-gem text-[#d4af37]"></i>
                    <span>Luxury Accommodations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#2d3748]">
                    <i className="fas fa-helicopter text-[#d4af37]"></i>
                    <span>Private Transfers</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Luxury Travel"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Experiences */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              Exclusive Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {luxuryExperiences.map(experience => (
                <ImageCard
                  key={experience.id}
                  image={experience.image}
                  title={experience.name}
                  description={experience.description}
                  overlay={true}
                  action={
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-serif font-bold text-[#1a365d] mb-1">
                          {experience.price}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#2d3748]">
                          <span>{experience.duration}</span>
                          <span>•</span>
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleExperienceClick(experience)}
                        className="bg-[#1a365d] text-white hover:bg-[#142844]"
                      >
                        Discover
                      </Button>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              Bespoke Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-tie text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                  Personal Concierge
                </h3>
                <p className="text-[#2d3748]">
                  24/7 dedicated travel concierge to handle all your needs and preferences
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-helicopter text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                  Private Transfers
                </h3>
                <p className="text-[#2d3748]">
                  Luxury vehicles, private jets, and helicopter transfers for seamless travel
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-utensils text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                  Gourmet Dining
                </h3>
                <p className="text-[#2d3748]">
                  Private chefs, Michelin-star experiences, and exclusive restaurant access
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                  VIP Access
                </h3>
                <p className="text-[#2d3748]">
                  Exclusive access to private events, galleries, and cultural experiences
                </p>
              </Card>
            </div>
          </div>
        </section>
      

      {/* Experience Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedExperience?.name}
        size="lg"
      >
        {selectedExperience && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedExperience.image}
                  alt={selectedExperience.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                />
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Location</div>
                    <div>{selectedExperience.location}</div>
                  </div>
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Duration</div>
                    <div>{selectedExperience.duration}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[#1a365d] mb-4">
                  {selectedExperience.price}
                </div>
                
                <p className="text-[#2d3748] mb-6">
                  {selectedExperience.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Includes</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedExperience.includes.map((item, index) => (
                        <li key={index} className="text-[#2d3748]">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full mb-4 bg-[#1a365d] text-white hover:bg-[#142844]">
                  Request Custom Proposal
                </Button>
                <Button className="w-full border border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LuxuryTravel;
