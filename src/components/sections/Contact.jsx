import React, { useState } from 'react';
import Button from '../common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  const contactMethods = [
    { icon: 'phone', title: 'Call Us', details: '+1 (555) 123-4567', description: 'Mon-Fri from 8am to 6pm' },
    { icon: 'envelope', title: 'Email Us', details: 'info@wanderlust.com', description: 'We reply within 24 hours' },
    { icon: 'map-marker-alt', title: 'Visit Us', details: '123 Travel Street, Suite 100', description: 'San Francisco, CA 94102' },
    { icon: 'clock', title: 'Office Hours', details: 'Monday - Friday', description: '8:00 AM - 6:00 PM PST' }
  ];

  return (
    <section className="py-20 bg-[#f7fafc]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1a365d] mb-6">
            Start Your Journey
          </h1>
          <p className="text-xl text-[#2d3748] max-w-2xl mx-auto">
            Ready to create your perfect travel experience? Contact us and let's start planning your adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-8">Get in Touch</h2>

            <div className="space-y-6 mb-8">
              {contactMethods.map((method, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#d4af37] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`fas fa-${method.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-[#2d3748] mb-1">{method.title}</h3>
                    <p className="text-[#1a365d] font-medium mb-1">{method.details}</p>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-sans font-semibold text-[#2d3748] mb-4">Follow Our Adventures</h3>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-[#1a365d] text-white rounded-lg flex items-center justify-center hover:bg-[#d4af37] transition-colors duration-300"
                  >
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-6">Plan Your Trip</h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2d3748] mb-2">Full Name *</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2d3748] mb-2">Email Address *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2d3748] mb-2">Phone Number</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2d3748] mb-2">Destination of Interest</label>
                    <select
                      name="destination" value={formData.destination} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a destination</option>
                      <option value="bali">Bali, Indonesia</option>
                      <option value="santorini">Santorini, Greece</option>
                      <option value="kyoto">Kyoto, Japan</option>
                      <option value="cambodia">Siem Reap, Cambodia</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2d3748] mb-2">Travel Date</label>
                    <input
                      type="date" name="travelDate" value={formData.travelDate} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2d3748] mb-2">Number of Travelers</label>
                    <select
                      name="travelers" value={formData.travelers} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select</option>
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3-4">3-4 Travelers</option>
                      <option value="5+">5+ Travelers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2d3748] mb-2">Budget Range</label>
                    <select
                      name="budget" value={formData.budget} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-5000">$2,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2d3748] mb-2">Tell Us About Your Dream Trip</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} rows="5"
                    placeholder="Share your travel preferences, interests, and any special requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-[#1a365d] text-white hover:bg-[#142844]">
                  Submit Inquiry
                </Button>

                <p className="text-sm text-[#2d3748] text-center mt-4">
                  We'll get back to you within 24 hours to start planning your perfect journey.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
