import React, { useState } from 'react'; 
import Button from '../components/common/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const Experiences = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Experiences' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'wellness', name: 'Wellness' }
  ];

  const experiences = [
    {
      id: 1,
      title: 'Private Island Retreat',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Exclusive private island experience with personalized service and ultimate privacy.',
      duration: '5-10 days',
      groupSize: '2-8 guests',
      difficulty: 'Easy',
      price: 'From $5,999',
      includes: ['Private Villa', 'Personal Chef', 'Spa Treatments', 'Water Activities'],
      highlights: ['Sunset Cruises', 'Private Beach Dining', 'Marine Wildlife Encounters']
    },
    {
      id: 2,
      title: 'Himalayan Trekking Adventure',
      category: 'adventure',
      image: 'https://adventure-pulse.com/wp-content/uploads/2024/12/IMG_6237-scaled-e1734604882494-1024x682.jpg',
      description: 'Challenging trek through the Himalayas with experienced guides and breathtaking views.',
      duration: '14-21 days',
      groupSize: '4-12 guests',
      difficulty: 'Challenging',
      price: 'From $3,299',
      includes: ['Expert Guides', 'Mountain Lodges', 'All Meals', 'Equipment Rental'],
      highlights: ['Everest Base Camp', 'Local Sherpa Culture', 'Alpine Lakes']
    },
    {
      id: 3,
      title: 'Japanese Cultural Immersion',
      category: 'cultural',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Deep dive into Japanese traditions, from tea ceremonies to samurai history.',
      duration: '10-14 days',
      groupSize: '6-15 guests',
      difficulty: 'Easy',
      price: 'From $4,899',
      includes: ['Cultural Workshops', 'Traditional Accommodations', 'Local Guides', 'All Entrance Fees'],
      highlights: ['Tea Ceremony', 'Calligraphy Class', 'Traditional Ryokan Stay']
    },
    {
      id: 4,
      title: 'African Wildlife Safari',
      category: 'adventure',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      description: 'Luxury safari experience with close wildlife encounters and expert trackers.',
      duration: '8-12 days',
      groupSize: '4-8 guests',
      difficulty: 'Moderate',
      price: 'From $6,499',
      includes: ['Private Game Drives', 'Luxury Tented Camps', 'Professional Photographer', 'All Meals'],
      highlights: ['Big Five Sightings', 'Sunset Sundowners', 'Bush Walks']
    },
    {
      id: 5,
      title: 'Balinese Wellness Retreat',
      category: 'wellness',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Transformative wellness journey combining ancient healing practices with modern luxury.',
      duration: '7-14 days',
      groupSize: '8-20 guests',
      difficulty: 'Easy',
      price: 'From $2,999',
      includes: ['Daily Yoga', 'Spa Treatments', 'Healthy Gourmet Meals', 'Wellness Workshops'],
      highlights: ['Traditional Balinese Massage', 'Meditation Sessions', 'Organic Farming Experience']
    },
    {
      id: 6,
      title: 'European Castle Tour',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      description: 'Stay in historic castles while exploring the rich heritage of Europe.',
      duration: '12-16 days',
      groupSize: '6-12 guests',
      difficulty: 'Easy',
      price: 'From $7,999',
      includes: ['Castle Accommodations', 'Private Tours', 'Gourmet Dining', 'Wine Tastings'],
      highlights: ['Private Castle Tours', 'Medieval Banquets', 'Vineyard Visits']
    }
  ];

  const filteredExperiences = selectedCategory === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory);

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
              Unique Experiences
            </h1>
            <p className="text-xl text-[#f7fafc] max-w-2xl mx-auto">
              Go beyond ordinary tourism with our curated collection of extraordinary travel experiences
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-[#6b7280]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <Button
                  key={category.id}
                  className={`${
                    selectedCategory === category.id 
                    ? 'bg-[#1a365d] text-white border-[#d4af37]' 
                    : 'bg-transparent text-[#1a365d] border-[#d4af37]'
                  } px-4 py-2 rounded-md font-semibold`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExperiences.map(experience => (
                <Card key={experience.id} hover={true} className="overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[#d4af37] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {experience.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                      {experience.title}
                    </h3>
                    
                    <p className="text-[#2d3748] mb-4 line-clamp-2">
                      {experience.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2 text-[#2d3748]">
                        <i className="far fa-clock"></i>
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#2d3748]">
                        <i className="fas fa-users"></i>
                        <span>{experience.groupSize}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#2d3748]">
                        <i className="fas fa-mountain"></i>
                        <span>{experience.difficulty}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#2d3748]">
                        <i className="fas fa-tag"></i>
                        <span className="capitalize">{experience.category}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-[#1a365d] text-white hover:bg-[#142844]"
                      onClick={() => handleExperienceClick(experience)}
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredExperiences.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-[#2d3748]">No experiences found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Custom Experience Section */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-4">
              Want a Custom Experience?
            </h2>
            <p className="text-xl text-[#2d3748] mb-8 max-w-2xl mx-auto">
              Our travel designers can create a completely personalized experience tailored to your interests and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#1a365d] text-white hover:bg-[#142844] px-6 py-3 rounded-md font-semibold">
                Design Your Journey
              </Button>
              <Button className="border border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white px-6 py-3 rounded-md font-semibold">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
     
      {/* Experience Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedExperience?.title}
        size="lg"
      >
        {selectedExperience && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedExperience.image}
                  alt={selectedExperience.title}
                  className="w-full h-64 object-cover rounded-2xl mb-4"
                />
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Duration</div>
                    <div>{selectedExperience.duration}</div>
                  </div>
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Group Size</div>
                    <div>{selectedExperience.groupSize}</div>
                  </div>
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Difficulty</div>
                    <div>{selectedExperience.difficulty}</div>
                  </div>
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Price</div>
                    <div className="text-[#d4af37] font-semibold">{selectedExperience.price}</div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[#2d3748] mb-6">
                  {selectedExperience.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">What's Included</h4>
                    <ul className="space-y-1">
                      {selectedExperience.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-[#2d3748]">
                          <i className="fas fa-check text-[#d4af37] mr-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Experience Highlights</h4>
                    <ul className="space-y-1">
                      {selectedExperience.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-[#2d3748]">
                          <i className="fas fa-star text-yellow-400 mr-2"></i>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-[#1a365d] text-white hover:bg-[#142844]">
                  Book This Experience
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Experiences;
