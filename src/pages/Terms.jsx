import React from 'react';
import Card from '../components/ui/Card';

const Terms = () => {
  return (
    <div className="min-h-screen">
   
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <p className="text-gray-600 mb-6">
                    Last updated: {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>

                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">1. Introduction</h2>
                  <p className="text-gray-700 mb-4">
                    Welcome to Wanderlust Travel ("we," "our," or "us"). These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
                  </p>
                </div>

                {/* Booking and Payments */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">2. Booking and Payments</h2>
                  
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">2.1 Booking Process</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>All bookings are subject to availability</li>
                    <li>We require a deposit of 30% to confirm your booking</li>
                    <li>Full payment is due 60 days before departure</li>
                    <li>Bookings made within 60 days of departure require full payment</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">2.2 Payment Methods</h3>
                  <p className="text-gray-700 mb-4">
                    We accept major credit cards, bank transfers, and other payment methods as specified during checkout.
                  </p>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">2.3 Price Changes</h3>
                  <p className="text-gray-700 mb-4">
                    All prices are subject to change without notice until full payment is received. Price changes may occur due to currency fluctuations, fuel surcharges, or other factors beyond our control.
                  </p>
                </div>

                {/* Cancellations and Refunds */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">3. Cancellations and Refunds</h2>
                  
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">3.1 Cancellation by You</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>60+ days before departure: Full refund minus administrative fee</li>
                    <li>30-59 days before departure: 50% refund</li>
                    <li>15-29 days before departure: 25% refund</li>
                    <li>Less than 15 days: No refund</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">3.2 Cancellation by Us</h3>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to cancel any tour due to insufficient bookings, force majeure, or other circumstances beyond our control. In such cases, we will offer alternative dates or a full refund.
                  </p>
                </div>

                {/* Travel Documents and Requirements */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">4. Travel Documents and Requirements</h2>
                  
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">4.1 Passports and Visas</h3>
                  <p className="text-gray-700 mb-4">
                    It is your responsibility to ensure you have a valid passport and any required visas for your destination. We are not responsible for denied entry due to improper documentation.
                  </p>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">4.2 Health Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    Some destinations require specific vaccinations or health certificates. Please consult with your healthcare provider and check destination requirements.
                  </p>
                </div>

                {/* Travel Insurance */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">5. Travel Insurance</h2>
                  <p className="text-gray-700 mb-4">
                    We strongly recommend comprehensive travel insurance covering cancellation, medical expenses, personal liability, and loss of luggage. We are not liable for any costs incurred due to lack of adequate insurance coverage.
                  </p>
                </div>

                {/* Liability */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">6. Liability</h2>
                  
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">6.1 Our Responsibility</h3>
                  <p className="text-gray-700 mb-4">
                    We act as an agent for various service providers (airlines, hotels, tour operators). We are not liable for any loss, damage, or injury resulting from acts or omissions of these third-party providers.
                  </p>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">6.2 Your Responsibility</h3>
                  <p className="text-gray-700 mb-4">
                    You are responsible for your own safety and belongings during the trip. Please follow local laws and customs, and exercise reasonable care.
                  </p>
                </div>

                {/* Changes to Itinerary */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">7. Changes to Itinerary</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to modify itineraries due to weather conditions, political unrest, or other circumstances beyond our control. We will make reasonable efforts to provide suitable alternatives.
                  </p>
                </div>

                {/* Privacy and Data */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">8. Privacy and Data Protection</h2>
                  <p className="text-gray-700 mb-4">
                    Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data.
                  </p>
                </div>

                {/* Intellectual Property */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">9. Intellectual Property</h2>
                  <p className="text-gray-700 mb-4">
                    All content on our website, including text, images, logos, and designs, is our property and protected by copyright laws. You may not reproduce, distribute, or use our content without permission.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">10. Governing Law</h2>
                  <p className="text-gray-700 mb-4">
                    These terms are governed by the laws of the State of California, United States. Any disputes shall be resolved in the courts of San Francisco, California.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">11. Contact Information</h2>
                  <p className="text-gray-700 mb-2">
                    For questions about these Terms and Conditions, please contact us:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Email: legal@wanderlust.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Address: 123 Travel Street, Suite 100, San Francisco, CA 94102</li>
                  </ul>
                </div>

                {/* Changes to Terms */}
                <div>
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">12. Changes to Terms</h2>
                  <p className="text-gray-700">
                    We reserve the right to update these Terms and Conditions at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Terms;
