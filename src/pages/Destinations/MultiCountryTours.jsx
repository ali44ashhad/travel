import React, { useState } from 'react'; 
import Button from '../../components/common/Button';
import Card, { ImageCard } from '../../components/ui/Card';
import Modal from '../../components/ui/Modal';

const MultiCountryTours = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState('all');

  const regions = [
    { id: 'all', name: 'All Tours', count: 8 },
    { id: 'southeast-asia', name: 'Southeast Asia', count: 4 },
    { id: 'europe', name: 'Europe', count: 2 },
    { id: 'asia-pacific', name: 'Asia Pacific', count: 2 }
  ];

  const multiCountryTours = [
    {
      id: 1,
      name: 'Southeast Asia Grand Tour',
      countries: ['Thailand', 'Vietnam', 'Cambodia', 'Laos'],
      duration: '21 Days / 20 Nights',
      price: '$3,999',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      region: 'southeast-asia',
      description: 'Experience the best of Southeast Asia in one unforgettable journey through four incredible countries.',
      highlights: [
        'Bangkok temples and floating markets',
        'Halong Bay overnight cruise',
        'Angkor Wat sunrise experience',
        'Luang Prabang alms giving ceremony',
        'Local cooking classes in each country'
      ],
      includes: [
        '4-star accommodation throughout',
        'Domestic flights between countries',
        'Professional English-speaking guides',
        'All entrance fees and activities',
        'Daily breakfast, most lunches and dinners'
      ],
      bestFor: ['First-time visitors to Asia', 'Cultural enthusiasts', 'Photography lovers']
    },
    {
      id: 2,
      name: 'Indochina Explorer',
      countries: ['Vietnam', 'Cambodia'],
      duration: '14 Days / 13 Nights',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      region: 'southeast-asia',
      description: 'Discover the rich history and stunning landscapes of Vietnam and Cambodia on this immersive journey.',
      highlights: [
        'Hanoi Old Quarter exploration',
        'Halong Bay luxury cruise',
        'Hoi An ancient town',
        'Angkor Archaeological Park',
        'Mekong Delta experience'
      ],
      includes: [
        'Boutique hotels and resorts',
        'Internal flights Vietnam-Cambodia',
        'Expert local guides',
        'All transportation',
        'Breakfast daily, 8 lunches, 6 dinners'
      ],
      bestFor: ['History buffs', 'Couples', 'Active travelers']
    },
    {
      id: 3,
      name: 'Thai & Lao Cultural Journey',
      countries: ['Thailand', 'Laos'],
      duration: '12 Days / 11 Nights',
      price: '$2,199',
      image: 'https://media.istockphoto.com/id/965788402/photo/temple-inside-royal-palace-complex-in-luang-prabang-laos.jpg?s=612x612&w=0&k=20&c=YSUxPAavhgBz51HOSupJza7PbgpTPVcJR1JDFFzSTeA=',
      region: 'southeast-asia',
      description: 'Combine the vibrant energy of Thailand with the tranquil beauty of Laos in this cultural adventure.',
      highlights: [
        'Chiang Mai temple tours',
        'Elephant sanctuary visit',
        'Slow boat on Mekong River',
        'Luang Prabang UNESCO sites',
        'Kuang Si Waterfalls'
      ],
      includes: [
        'Comfortable accommodation',
        'Mekong River cruise',
        'Cultural activities',
        'All ground transportation',
        'Breakfast daily, 6 lunches'
      ],
      bestFor: ['Cultural travelers', 'Nature lovers', 'Spiritual seekers']
    },
    {
      id: 4,
      name: 'Bali & Singapore Escape',
      countries: ['Indonesia', 'Singapore'],
      duration: '10 Days / 9 Nights',
      price: '$2,899',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      region: 'asia-pacific',
      description: 'Experience tropical paradise in Bali and urban sophistication in Singapore on this perfect contrast tour.',
      highlights: [
        'Ubud rice terraces and temples',
        'Seminyak beach relaxation',
        'Singapore Gardens by the Bay',
        'Marina Bay Sands experience',
        'Bali traditional dance performance'
      ],
      includes: [
        'Luxury resorts and city hotel',
        'Flight Bali to Singapore',
        'Private transfers',
        'Guided tours in both countries',
        'Daily breakfast'
      ],
      bestFor: ['Luxury travelers', 'Food enthusiasts', 'Island and city lovers']
    },
    {
      id: 5,
      name: 'European Capitals Tour',
      countries: ['France', 'Italy', 'Spain'],
      duration: '15 Days / 14 Nights',
      price: '$4,499',
      image: 'https://www.authentic-europe.com/themes/european-capital-and-city-tours/_/image/23a1f703-10dd-44e6-a4b2-8e48a8649c18:29dff0cdc1ca51e1d6bcddb3cd1013717072c330/block-1200-630/London-Visit-Britain.jpg?quality=85',
      region: 'europe',
      description: 'Discover the romance, art, and passion of Europe\'s most captivating capitals.',
      highlights: [
        'Eiffel Tower and Louvre Museum',
        'Roman Colosseum and Vatican City',
        'Barcelona Gothic Quarter',
        'Venice gondola ride',
        'Parisian cuisine and tapas tours'
      ],
      includes: [
        '4-star central hotels',
        'High-speed train between cities',
        'Expert local guides',
        'Skip-the-line entrance fees',
        'Daily breakfast, 5 dinners'
      ],
      bestFor: ['First-time Europe visitors', 'Art and history lovers', 'Food and wine enthusiasts']
    },
    {
      id: 6,
      name: 'Japan & South Korea Discovery',
      countries: ['Japan', 'South Korea'],
      duration: '16 Days / 15 Nights',
      price: '$5,199',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      region: 'asia-pacific',
      description: 'Explore the ancient traditions and modern innovations of Japan and South Korea.',
      highlights: [
        'Tokyo city exploration',
        'Kyoto temples and geisha district',
        'Bullet train experience',
        'Seoul palaces and markets',
        'Traditional tea ceremonies'
      ],
      includes: [
        'Western-style hotels and ryokan',
        'Japan Rail Pass',
        'Flight Tokyo to Seoul',
        'Cultural experiences',
        'Daily breakfast, 8 lunches'
      ],
      bestFor: ['Culture enthusiasts', 'Technology lovers', 'Food adventurers']
    },
    {
      id: 7,
      name: 'Vietnam, Cambodia & Laos',
      countries: ['Vietnam', 'Cambodia', 'Laos'],
      duration: '18 Days / 17 Nights',
      price: '$3,299',
      image: 'https://media.istockphoto.com/id/1201281530/photo/landscape-with-halong-bay.jpg?s=612x612&w=0&k=20&c=Kg4BgIyfMr5Egq-yaQNtBLjHP2U_db9WaLB0-4MGrb0=',
      region: 'southeast-asia',
      description: 'A comprehensive journey through the heart of Indochina, exploring ancient cultures and stunning landscapes.',
      highlights: [
        'Halong Bay overnight cruise',
        'Angkor Wat complex exploration',
        'Luang Prabang UNESCO sites',
        'Mekong Delta floating markets',
        'Traditional village visits'
      ],
      includes: [
        'Boutique hotels and lodges',
        'Domestic flights and boat transfers',
        'Expert local guides',
        'All activities and entrance fees',
        'Breakfast daily, 12 lunches, 8 dinners'
      ],
      bestFor: ['Adventure seekers', 'Cultural explorers', 'Photography enthusiasts']
    },
    {
      id: 8,
      name: 'Mediterranean Magic',
      countries: ['Greece', 'Italy', 'Croatia'],
      duration: '17 Days / 16 Nights',
      price: '$4,899',
      image: 'https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      region: 'europe',
      description: 'Sail through the stunning Mediterranean, exploring ancient ruins, charming villages, and crystal-clear waters.',
      highlights: [
        'Santorini sunset views',
        'Athens Acropolis tour',
        'Amalfi Coast drive',
        'Dubrovnik Old Town',
        'Greek island hopping'
      ],
      includes: [
        '4-star hotels and boutique stays',
        'Ferry transfers between islands',
        'Guided tours in each country',
        'All entrance fees',
        'Daily breakfast, 6 dinners'
      ],
      bestFor: ['Island lovers', 'History enthusiasts', 'Romantic getaways']
    }
  ];

  const filteredTours = activeRegion === 'all' 
    ? multiCountryTours 
    : multiCountryTours.filter(tour => tour.region === activeRegion);

  const handleTourClick = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const CountryFlags = ({ countries }) => (
    <div className="flex items-center space-x-2 mb-3">
      {countries.map((country, index) => (
        <div key={index} className="flex items-center space-x-1 bg-[#1a365d]/10 px-2 py-1 rounded-full">
          <span className="text-xs font-medium text-[#1a365d]">{country}</span>
          {index < countries.length - 1 && (
            <span className="text-[#1a365d] text-xs">+</span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen">
   
        <section className="bg-[#1a365d] text-white py-40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Multi-Country Tours
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience multiple destinations in one seamless journey. Our expertly crafted multi-country tours offer the perfect blend of diverse cultures, landscapes, and experiences.
            </p>
          </div>
        </section>

        {/* Why Choose Multi-Country Tours */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              Why Choose Multi-Country Tours?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-route text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Seamless Planning</h3>
                <p className="text-gray-600">
                  We handle all logistics, visas, and transfers between countries for a stress-free experience.
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-money-bill-wave text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Better Value</h3>
                <p className="text-gray-600">
                  Save compared to booking separate trips with bundled flights and accommodations.
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-globe-asia text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">Diverse Experiences</h3>
                <p className="text-gray-600">
                  Experience multiple cultures, cuisines, and landscapes in one comprehensive journey.
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-headset text-xl"></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Dedicated support throughout your journey across all countries and destinations.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Region Filter */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {regions.map(region => (
                <Button
                  key={region.id}
                  variant={activeRegion === region.id ? "primary" : "outline"}
                  onClick={() => setActiveRegion(region.id)}
                  className="relative"
                >
                  {region.name}
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-sm">
                    {region.count}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map(tour => (
                <Card key={tour.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-semibold text-[#1a365d]">{tour.price}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <CountryFlags countries={tour.countries} />
                    <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-2">
                      {tour.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {tour.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <i className="far fa-clock"></i>
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i key={star} className="fas fa-star text-yellow-400 text-sm"></i>
                        ))}
                        <span className="text-sm text-gray-600 ml-1">4.8</span>
                      </div>
                    </div>
                    <Button 
                      variant="primary" 
                      className="w-full"
                      onClick={() => handleTourClick(tour)}
                    >
                      View Tour Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No tours found for this region.</p>
              </div>
            )}
          </div>
        </section>

        {/* Planning Assistance */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                Need Help Planning?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our travel experts can customize any multi-country tour to match your preferences, budget, and travel style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Speak with a Travel Expert
                </Button>
                <Button variant="outline" size="lg">
                  Request Custom Itinerary
                </Button>
              </div>
            </div>
          </div>
        </section>
      

      {/* Tour Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedTour?.name}
        size="xl"
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
                
                <div className="mt-6">
                  <h4 className="font-semibold text-[#2d3748] mb-3">Countries Visited</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTour.countries.map((country, index) => (
                      <span key={index} className="bg-[#1a365d]/10 text-[#1a365d] px-3 py-2 rounded-lg font-medium">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Duration</div>
                    <div>{selectedTour.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Price</div>
                    <div className="text-[#d4af37] font-semibold text-lg">{selectedTour.price}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Region</div>
                    <div className="capitalize">{selectedTour.region.replace('-', ' ')}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-[#2d3748]">Rating</div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className="fas fa-star text-yellow-400 text-sm"></i>
                      ))}
                      <span className="ml-1">4.8/5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedTour.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Tour Highlights</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedTour.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-3">What's Included</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedTour.includes.map((item, index) => (
                        <li key={index} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#2d3748] mb-3">Best For</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTour.bestFor.map((type, index) => (
                        <span key={index} className="bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded-full text-sm">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Button variant="primary" className="w-full text-lg py-4">
                    Book This Tour
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Detailed Itinerary
                  </Button>
                  <Button variant="outline" className="w-full">
                    Customize This Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MultiCountryTours;