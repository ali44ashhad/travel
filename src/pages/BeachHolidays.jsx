import React, { useState } from 'react';
import Button from '../components/common/Button';
import Card, { ImageCard } from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const BeachHolidays = () => {
  const [selectedBeach, setSelectedBeach] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const beachDestinations = [
    {
      id: 1,
      name: 'Maldives Overwater Paradise',
      location: 'Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      description: 'Luxury overwater bungalows with direct access to crystal-clear turquoise waters',
      price: 'From $5,999',
      duration: '7-14 days',
      beachType: 'White Sand, Turquoise Water',
      activities: ['Snorkeling', 'Spa Treatments', 'Sunset Cruises', 'Private Dining'],
      bestFor: ['Honeymooners', 'Luxury Seekers', 'Romantic Getaways']
    },
    {
      id: 2,
      name: 'Thai Island Hopping',
      location: 'Thailand',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      description: 'Explore multiple paradise islands with vibrant marine life and stunning landscapes',
      price: 'From $2,799',
      duration: '10-14 days',
      beachType: 'Golden Sand, Limestone Cliffs',
      activities: ['Island Hopping', 'Scuba Diving', 'Beach Parties', 'Thai Massage'],
      bestFor: ['Adventure Couples', 'Groups of Friends', 'Young Travelers']
    },
    {
      id: 3,
      name: 'Caribbean All-Inclusive',
      location: 'Caribbean',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Ultimate relaxation at luxury all-inclusive resorts with pristine beaches',
      price: 'From $3,499',
      duration: '7-10 days',
      beachType: 'Powder White Sand, Calm Waters',
      activities: ['Water Sports', 'Golf', 'Spa', 'Fine Dining', 'Entertainment'],
      bestFor: ['Families', 'Couples', 'Stress-Free Vacations']
    }
  ];

  const handleBeachClick = (beach) => {
    setSelectedBeach(beach);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Beach Holidays
          </h1>
          <p className="text-xl text-[#f7fafc] max-w-2xl mx-auto">
            Escape to paradise with our curated collection of the world's most stunning beach destinations
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                Tropical Paradise Awaits
              </h2>
              <p className="text-lg text-[#2d3748] mb-6">
                From the turquoise waters of the Maldives to the vibrant shores of Thailand and the tranquil Caribbean beaches, our beach holidays offer the perfect escape from everyday life.
              </p>
              <p className="text-lg text-[#2d3748] mb-8">
                Whether you seek romantic seclusion, family-friendly resorts, or adventurous water sports, we have the perfect beach destination to match your dream vacation.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-umbrella-beach text-[#d4af37]"></i>
                  <span>Pristine Beaches</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-water text-[#d4af37]"></i>
                  <span>Crystal Waters</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-sun text-[#d4af37]"></i>
                  <span>Year-Round Sun</span>
                </div>
                <div className="flex items-center space-x-2 text-[#2d3748]">
                  <i className="fas fa-cocktail text-[#d4af37]"></i>
                  <span>Luxury Resorts</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/672425798/photo/couple-in-loungers-on-beach-at-maldives.jpg?s=612x612&w=0&k=20&c=EtdtcJ6qsCiEmPB0IUsNfefSArqe7J3MBDGwEqt_WA8="
                alt="Beach Holidays"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beach Destinations Grid */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Featured Beach Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beachDestinations.map(beach => (
              <ImageCard
                key={beach.id}
                image={beach.image}
                title={beach.name}
                description={beach.description}
                overlay={true}
                action={
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-serif font-bold text-[#1a365d] mb-1">
                        {beach.price}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-[#2d3748]">
                        <span>{beach.duration}</span>
                        <span>•</span>
                        <span>{beach.location}</span>
                      </div>
                    </div>
                    <Button className="bg-[#1a365d] text-white hover:bg-[#142844]" onClick={() => handleBeachClick(beach)}>
                      Explore
                    </Button>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Beach Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Find Your Perfect Beach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-xl"></i>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                Romantic Getaways
              </h3>
              <p className="text-[#2d3748]">
                Private villas, sunset dinners, and couples spa treatments in secluded locations
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-xl"></i>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                Family Fun
              </h3>
              <p className="text-[#2d3748]">
                Kid-friendly resorts, safe swimming areas, and activities for all ages
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-water text-xl"></i>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                Adventure & Sports
              </h3>
              <p className="text-[#2d3748]">
                World-class diving, surfing, and water sports in vibrant marine environments
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Beach Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedBeach?.name}
        size="lg"
      >
        {selectedBeach && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedBeach.image}
                  alt={selectedBeach.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                />
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Location</div>
                    <div>{selectedBeach.location}</div>
                  </div>
                  <div className="bg-[#f7fafc] p-3 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Beach Type</div>
                    <div>{selectedBeach.beachType}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[#1a365d] mb-4">
                  {selectedBeach.price}
                </div>
                
                <p className="text-[#2d3748] mb-6">
                  {selectedBeach.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Popular Activities</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedBeach.activities.map((activity, index) => (
                        <span key={index} className="bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded-full text-sm">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">Ideal For</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedBeach.bestFor.map((type, index) => (
                        <span key={index} className="bg-[#1a365d]/10 text-[#1a365d] px-3 py-1 rounded-full text-sm">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-[#1a365d] text-white hover:bg-[#142844]">
                  Book Beach Holiday
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BeachHolidays;
