import React from 'react';
import Button from '../common/Button';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      description: 'Island of gods with stunning beaches and rich culture',
      price: '$1,299',
      duration: '7 days',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      description: 'Breathtaking sunsets and iconic white architecture',
      price: '$2,199',
      duration: '5 days',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Ancient temples and traditional Japanese culture',
      price: '$2,899',
      duration: '8 days',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Siem Reap, Cambodia',
      image: 'https://media.istockphoto.com/id/1153879780/photo/traveler-exploring-ancient-ruins-of-ta-prohm-temple-at-angkor-siem-reap-cambodia.jpg?s=612x612&w=0&k=20&c=cZPttlXn_MUtlxxteFmbkeE7TjJMPylXDc6NJ2t1xfw=',
      description: 'Home to the magnificent Angkor Wat temple complex',
      price: '$999',
      duration: '6 days',
      rating: 4.6
    }
  ];

  return (
    <section className="py-20 bg-[#f7fafc]">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-[#2d3748] max-w-2xl mx-auto">
            Discover our handpicked selection of extraordinary destinations around the world
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-transform duration-300 hover:shadow-xl">
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-[#1a365d]">{dest.price}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d]">{dest.name}</h3>
                  <div className="flex items-center space-x-1">
                    <i className="fas fa-star text-yellow-400 text-sm"></i>
                    <span className="text-sm font-medium text-[#2d3748]">{dest.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{dest.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <i className="far fa-clock"></i>
                    <span className="text-sm">{dest.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <i
                        key={star}
                        className={`fas fa-star text-sm ${star <= Math.floor(dest.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      ></i>
                    ))}
                  </div>
                </div>

                <Button variant="primary" className="w-full">
                  Explore Package
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Destinations
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Destinations;
