import React from 'react'; 
import Card from '../components/ui/Card';

const Privacy = () => {
  return (
    <div className="min-h-screen">
       
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            How we protect and use your personal information
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
                  <p className="text-[#4a5568] mb-6">
                    Last updated: {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-[#2d3748]">
                    At Wanderlust Travel, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">1. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">1.1 Personal Information</h3>
                  <p className="text-[#2d3748] mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#2d3748] mb-6">
                    <li>Full name, contact details, and date of birth</li>
                    <li>Passport information and travel document details</li>
                    <li>Payment information and billing address</li>
                    <li>Travel preferences and special requirements</li>
                    <li>Emergency contact information</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">1.2 Automated Information</h3>
                  <p className="text-[#2d3748] mb-4">
                    When you visit our website, we automatically collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#2d3748] mb-6">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website and search terms</li>
                    <li>Device information and operating system</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">1.3 Cookies and Tracking</h3>
                  <p className="text-[#2d3748] mb-4">
                    We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
                  </p>
                </div>

                {/* How We Use Your Information */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">2. How We Use Your Information</h2>
                  
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">2.1 Service Provision</h3>
                  <p className="text-[#2d3748] mb-4">
                    We use your information to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#2d3748] mb-6">
                    <li>Process bookings and manage your travel arrangements</li>
                    <li>Provide customer support and handle inquiries</li>
                    <li>Send booking confirmations and travel documents</li>
                    <li>Process payments and prevent fraud</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">2.2 Marketing and Communications</h3>
                  <p className="text-[#2d3748] mb-4">
                    With your consent, we may use your information to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#2d3748] mb-6">
                    <li>Send promotional offers and travel inspiration</li>
                    <li>Share destination updates and travel tips</li>
                    <li>Notify you about special deals and new destinations</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">2.3 Legal Compliance</h3>
                  <p className="text-[#2d3748] mb-4">
                    We may use your information to comply with legal obligations, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#2d3748]">
                    <li>Tax and accounting requirements</li>
                    <li>Immigration and border control regulations</li>
                    <li>Legal proceedings and government requests</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">3. Information Sharing</h2>
                  
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">3.1 Service Providers</h3>
                  <p className="text-[#2d3748] mb-4">
                    We share necessary information with trusted partners to provide your travel services, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#2d3748] mb-6">
                    <li>Airlines, hotels, and transportation providers</li>
                    <li>Tour guides and activity operators</li>
                    <li>Insurance companies and payment processors</li>
                    <li>Destination management companies</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">3.2 Legal Requirements</h3>
                  <p className="text-[#2d3748] mb-4">
                    We may disclose your information when required by law or to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#2d3748] mb-6">
                    <li>Comply with legal processes and court orders</li>
                    <li>Protect our rights, property, or safety</li>
                    <li>Prevent fraud or security issues</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">3.3 Business Transfers</h3>
                  <p className="text-[#2d3748]">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
                  </p>
                </div>

                {/* Data Security */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">4. Data Security</h2>
                  
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">4.1 Protection Measures</h3>
                  <p className="text-[#2d3748] mb-4">
                    We implement appropriate security measures to protect your personal information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#2d3748] mb-6">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and access controls</li>
                    <li>Regular security assessments and updates</li>
                    <li>Employee training on data protection</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">4.2 Data Retention</h3>
                  <p className="text-[#2d3748]">
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">5. Your Rights</h2>
                  
                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">5.1 Access and Control</h3>
                  <p className="text-[#2d3748] mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[#2d3748] mb-6">
                    <li>Access and review your personal information</li>
                    <li>Correct inaccurate or incomplete data</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your data</li>
                    <li>Withdraw consent for marketing communications</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#d4af37] mb-3">5.2 Exercising Your Rights</h3>
                  <p className="text-[#2d3748]">
                    To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </div>

                {/* International Data Transfers */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">6. International Data Transfers</h2>
                  <p className="text-[#2d3748] mb-4">
                    As a travel company, we may transfer your personal information to countries outside your residence for the purpose of providing travel services. We ensure appropriate safeguards are in place to protect your data during international transfers.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">7. Children's Privacy</h2>
                  <p className="text-[#2d3748] mb-4">
                    Our services are not directed to children under 16. We do not knowingly collect personal information from children without parental consent. If we become aware that we have collected information from a child, we will take steps to delete it.
                  </p>
                </div>

                {/* Third-Party Links */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">8. Third-Party Links</h2>
                  <p className="text-[#2d3748] mb-4">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
                  </p>
                </div>

                {/* Changes to This Policy */}
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">9. Changes to This Policy</h2>
                  <p className="text-[#2d3748] mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last updated" date.
                  </p>
                </div>

                {/* Contact Us */}
                <div>
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">10. Contact Us</h2>
                  <p className="text-[#2d3748] mb-2">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-[#2d3748] mb-4">
                    <li>Email: privacy@wanderlust.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Address: 123 Travel Street, Suite 100, San Francisco, CA 94102</li>
                  </ul>
                  <p className="text-[#2d3748]">
                    Data Protection Officer: dpo@wanderlust.com
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

export default Privacy;
