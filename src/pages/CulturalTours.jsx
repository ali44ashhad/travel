import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import Card, { ImageCard } from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const CulturalTours = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const culturalTours = [
    {
      id: 1,
      name: 'Japanese Traditions Immersion',
      location: 'Japan',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Deep dive into traditional Japanese arts, ceremonies, and way of life',
      price: 'From $4,899',
      duration: '12-16 days',
      focus: ['Tea Ceremony', 'Calligraphy', 'Traditional Crafts', 'Temple Stays'],
      experiences: ['Stay in Ryokan', 'Meet Local Artisans', 'Participate in Festivals', 'Learn Traditional Arts']
    },
    {
      id: 2,
      name: 'Indian Cultural Odyssey',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      description: 'Explore the diverse cultural heritage across India\'s most historic regions',
      price: 'From $3,799',
      duration: '14-18 days',
      focus: ['Ancient Temples', 'Traditional Arts', 'Local Cuisine', 'Spiritual Practices'],
      experiences: ['Yoga Retreat', 'Cooking Classes', 'Textile Workshops', 'Classical Dance Performances']
    },
    {
      id: 3,
      name: 'Moroccan Cultural Journey',
      location: 'Morocco',
      image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
      description: 'Discover the rich tapestry of Berber, Arab, and French influences',
      price: 'From $2,999',
      duration: '10-14 days',
      focus: ['Medina Exploration', 'Traditional Crafts', 'Desert Culture', 'Culinary Traditions'],
      experiences: ['Stay in Riads', 'Carpet Weaving Workshops', 'Desert Camp Experience', 'Traditional Music']
    }
  ];

  const handleTourClick = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Cultural Tours
          </h1>
          <p className="text-xl text-[#f7fafc] max-w-2xl mx-auto">
            Immerse yourself in ancient traditions, local customs, and authentic cultural experiences around the world
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                Cultural Immersion
              </h2>
              <p className="text-lg text-[#2d3748] mb-6">
                Our cultural tours are designed for travelers who seek authentic connections and deep understanding of local traditions. We go beyond surface-level tourism to provide meaningful interactions with communities and preservation of cultural heritage.
              </p>
              <p className="text-lg text-[#2d3748] mb-8">
                Each journey is crafted in collaboration with local experts and community leaders, ensuring respectful engagement and genuine cultural exchange that benefits both travelers and host communities.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-hands-helping text-[#d4af37]"></i>
                  <span>Community-Based</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-user-graduate text-[#d4af37]"></i>
                  <span>Educational</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-heart text-[#d4af37]"></i>
                  <span>Authentic</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-leaf text-[#d4af37]"></i>
                  <span>Sustainable</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Cultural Tours"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Tours Grid */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Featured Cultural Journeys
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalTours.map(tour => (
              <ImageCard
                key={tour.id}
                image={tour.image}
                title={tour.name}
                description={tour.description}
                overlay={true}
                action={
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-serif font-bold text-[#1a365d] mb-1">
                        {tour.price}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-[#2d3748]">
                        <span>{tour.duration}</span>
                        <span>•</span>
                        <span>{tour.location}</span>
                      </div>
                    </div>
                    <Button className="bg-[#1a365d] text-white hover:bg-[#142844]" onClick={() => handleTourClick(tour)}>
                      Discover
                    </Button>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Our Cultural Tourism Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Cultural Values"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-[#1a365d] mb-4">
                Responsible Cultural Engagement
              </h3>
              <p className="text-lg text-[#2d3748] mb-6">
                We believe cultural tourism should be a mutually beneficial exchange that preserves traditions while creating economic opportunities for local communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-hand-holding-usd text-[#d4af37] mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-[#2d3748]">Fair Compensation</h4>
                    <p className="text-[#2d3748]">Local guides and artisans receive fair wages for their expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-comments text-[#d4af37] mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-[#2d3748]">Cultural Sensitivity</h4>
                    <p className="text-[#2d3748]">Respectful engagement guided by local customs and traditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-seedling text-[#d4af37] mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-[#2d3748]">Preservation Support</h4>
                    <p className="text-[#2d3748]">Portion of proceeds supports cultural heritage preservation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Tour Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedTour?.name}
        size="lg"
      >
        {selectedTour && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedTour.image}
                  alt={selectedTour.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                />
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Location</div>
                    <div>{selectedTour.location}</div>
                  </div>
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Duration</div>
                    <div>{selectedTour.duration}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[#1a365d] mb-4">
                  {selectedTour.price}
                </div>
                
                <p className="text-[#2d3748] mb-6">
                  {selectedTour.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Cultural Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTour.focus.map((area, index) => (
                        <span key={index} className="bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded-full text-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Unique Experiences</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedTour.experiences.map((experience, index) => (
                        <li key={index} className="text-[#2d3748]">{experience}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-[#1a365d] text-white hover:bg-[#142844]">
                  Book Cultural Journey
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CulturalTours;
