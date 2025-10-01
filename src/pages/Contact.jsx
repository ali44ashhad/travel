import React, { useState } from 'react'; 
import Button from '../components/common/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const contactMethods = [
    {
      icon: 'phone',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm PST',
      action: 'tel:+15551234567'
    },
    {
      icon: 'envelope',
      title: 'Email Us',
      details: 'info@wanderlust.com',
      description: 'We reply within 24 hours',
      action: 'mailto:info@wanderlust.com'
    },
    {
      icon: 'map-marker-alt',
      title: 'Visit Us',
      details: '123 Travel Street, Suite 100',
      description: 'San Francisco, CA 94102',
      action: 'https://maps.google.com'
    },
    {
      icon: 'clock',
      title: 'Office Hours',
      details: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM PST',
      action: null
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccessModal(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      travelers: '',
      budget: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
    
        <section className="bg-[#1a365d] text-white py-40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Start Your Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to create your perfect travel experience? Contact us and let's start planning your adventure.
            </p>
          </div>
        </section>

        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-serif font-bold text-primary mb-8">
                  Get in Touch
                </h2>
                
                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#d4af37] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                          <i className={`fas fa-${method.icon} text-lg`}></i>
                        </div>
                        <div>
                          <h3 className="font-sans font-semibold text-accent mb-1">
                            {method.title}
                          </h3>
                          {method.action ? (
                            <a 
                              href={method.action} 
                              className="text-primary font-medium mb-1 hover:text-secondary transition-colors duration-300 block"
                            >
                              {method.details}
                            </a>
                          ) : (
                            <p className="text-primary font-medium mb-1">
                              {method.details}
                            </p>
                          )}
                          <p className="text-gray-600 text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Social Media */}
                <Card className="p-6">
                  <h3 className="font-sans font-semibold text-accent mb-4">
                    Follow Our Adventures
                  </h3>
                  <div className="flex space-x-4">
                    {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 bg-[#1a365d] text-white rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                      >
                        <i className={`fab fa-${social}`}></i>
                      </a>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-[#1a365d] mb-6">
                    Plan Your Trip
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-accent mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-accent mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-accent mb-2">
                          Destination of Interest
                        </label>
                        <select
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select a destination</option>
                          <option value="bali">Bali, Indonesia</option>
                          <option value="santorini">Santorini, Greece</option>
                          <option value="kyoto">Kyoto, Japan</option>
                          <option value="cambodia">Siem Reap, Cambodia</option>
                          <option value="safari">African Safari</option>
                          <option value="machu-picchu">Machu Picchu, Peru</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent mb-2">
                          Travel Date
                        </label>
                        <input
                          type="date"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-accent mb-2">
                          Number of Travelers
                        </label>
                        <select
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select</option>
                          <option value="1">1 Traveler</option>
                          <option value="2">2 Travelers</option>
                          <option value="3-4">3-4 Travelers</option>
                          <option value="5-8">5-8 Travelers</option>
                          <option value="9+">9+ Travelers</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
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
                      <label className="block text-sm font-medium text-accent mb-2">
                        Tell Us About Your Dream Trip
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                        placeholder="Share your travel preferences, interests, and any special requirements..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending Inquiry...
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      We'll get back to you within 24 hours to start planning your perfect journey.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12">
              Visit Our Office
            </h2>
            <Card className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                    Wanderlust Travel
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-center">
                      <i className="fas fa-map-marker-alt text-secondary mr-3 w-5"></i>
                      123 Travel Street, Suite 100<br />
                      San Francisco, CA 94102
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-phone text-secondary mr-3 w-5"></i>
                      +1 (555) 123-4567
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-envelope text-secondary mr-3 w-5"></i>
                      info@wanderlust.com
                    </p>
                    <p className="flex items-center">
                      <i className="fas fa-clock text-secondary mr-3 w-5"></i>
                      Mon-Fri: 8:00 AM - 6:00 PM PST
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-gray-200 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <i className="fas fa-map text-4xl mb-4"></i>
                      <p>Interactive Map</p>
                      <p className="text-sm">(Would show Google Maps in production)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Thank You!"
        size="md"
      >
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-green-600 text-2xl"></i>
          </div>
          <h3 className="text-xl font-serif font-semibold text-primary mb-4">
            Inquiry Submitted Successfully
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in Wanderlust Travel! Our travel expert will contact you within 24 hours to discuss your dream trip.
          </p>
          <Button
            variant="primary"
            onClick={() => setShowSuccessModal(false)}
            className="w-full"
          >
            Continue Exploring
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;