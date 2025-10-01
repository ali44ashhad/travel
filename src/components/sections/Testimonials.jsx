import React, { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'Our trip to Bali was absolutely magical! The attention to detail and personalized service made it the best vacation we\'ve ever had. Every moment was perfectly planned.',
      image: 'https://physicaleducationandwellness.mit.edu/wp-content/uploads/Untitled-1.png',
      trip: 'Bali Luxury Retreat'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'The cultural immersion experience in Japan was beyond expectations. Our guide was incredibly knowledgeable and helped us discover hidden gems we would have never found on our own.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      trip: 'Japanese Cultural Tour'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'London, UK',
      rating: 5,
      text: 'From the stunning accommodations to the expert-led safari tours, every aspect of our African adventure was flawless. We created memories that will last a lifetime.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      trip: 'African Safari Experience'
    }
  ];

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-[#f7fafc]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Traveler Stories
          </h2>
          <p className="text-xl text-accent max-w-2xl mx-auto">
            Discover what our guests say about their unforgettable journeys with us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 testimonial-card">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Client Image */}
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-secondary"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <i className="fas fa-quote-left text-sm"></i>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:w-2/3 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl font-serif text-primary mb-6 italic">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>

                <div>
                  <div className="font-sans font-semibold text-lg text-accent">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-600 mb-2">
                    {testimonials[activeTestimonial].location}
                  </div>
                  <div className="text-secondary font-medium">
                    {testimonials[activeTestimonial].trip}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-secondary' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by travelers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['tripadvisor', 'booking-com', 'national-geographic', 'travel-leisure', 'forbes'].map((brand) => (
              <div key={brand} className="text-3xl text-primary">
                <i className={`fab fa-${brand}`}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
