import React from 'react';
import { Link } from 'react-router-dom'; // agar react-router use kar rahe ho
import Button from '../common/Button';

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: 'Beach Holidays',
      description:
        'Private villas with ocean views, personalized service, and exclusive beach access',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&...',
      icon: 'umbrella-beach',
      features: ['Private Pool', 'Spa Services', 'Gourmet Dining'],
      link: '/beach-holidays'
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      description:
        'Thrilling hikes, wildlife encounters, and breathtaking mountain landscapes',
      image:
        'https://images.stockcake.com/public/5/5/7/557ca58d-ac58-447d-9085-ee80eb07dbd0_large/mountain-adventure-awaits-stockcake.jpg',
      icon: 'mountain',
      features: ['Expert Guides', 'Equipment Provided', 'Small Groups'],
      link: '/adventure'
    },
    {
      id: 3,
      title: 'Cultural Tours',
      description:
        'Authentic local experiences, traditional ceremonies, and cultural workshops',
      image:
        'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&...',
      icon: 'landmark',
      features: ['Local Guides', 'Hands-on Activities', 'Cultural Shows'],
      link: '/cultural-tours'
    },
    {
      id: 4,
      title: 'Luxury Travel',
      description:
        'Close encounters with exotic wildlife in their natural habitats',
      image:
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&...',
      icon: 'binoculars',
      features: ['Expert Trackers', 'Luxury Lodges', 'Photography Focus'],
      link: '/luxury-travel'
    }
  ];

  return (
    <section className="py-20 bg-[#f7fafc]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-4">
            Unique Experiences
          </h2>
          <p className="text-xl text-[#2d3748] max-w-2xl mx-auto">
            Tailored adventures that go beyond ordinary tourism
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg group flex flex-col lg:flex-row ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#d4af37] text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <i className={`fas fa-${exp.icon} text-lg`}></i>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-semibold text-[#1a365d] mb-4">
                  {exp.title}
                </h3>
                <p className="text-gray-600 mb-6">{exp.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {exp.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-[#2d3748]">
                      <i className="fas fa-check text-[#d4af37] mr-3"></i>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Button with Link */}
                <Link to={exp.link}>
                  <Button variant="primary">Discover More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-[#1a365d] rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Destinations' },
              { number: '10K+', label: 'Happy Travelers' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '15', label: 'Years Experience' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-serif font-bold text-[#d4af37] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
