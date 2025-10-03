import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Destinations',
      links: [
        { name: 'Southeast Asia', href: '/southeast-asia' },
        { name: 'Europe', href: '/europe' },
        { name: 'Africa', href: '/africa' },
        { name: 'South America', href: '/south-america' },
        { name: 'All Destinations', href: '/destinations' }
      ]
    },
    {
      title: 'Experiences',
      links: [
        { name: 'Luxury Travel', href: '/luxury-travel' },
        { name: 'Adventure', href: '/adventure' },
        { name: 'Cultural Tours', href: '/cultural-tours' },
        { name: 'Beach Holidays', href: '/beach-holidays' },
        { name: 'All Experiences', href: '/experiences' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Blogs', href: '/blog' },
     
      ]
    },
    {
      title: 'Support',
      links: [ 
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
       
      ]
    }
  ];

  return (
    <footer className="bg-[#2d3748] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Wanderlust</h3>
            <p className="text-gray-100 mb-6 max-w-md">
              Crafting unforgettable travel experiences with personalized service and attention to detail. 
              Discover the world with our expert guides and luxury accommodations.
            </p>
            <div className="flex space-x-4">
              {[
                { platform: 'facebook', url: 'https://facebook.com/wanderlust' },
                { platform: 'twitter', url: 'https://twitter.com/wanderlust' },
                { platform: 'instagram', url: 'https://instagram.com/wanderlust' },
                { platform: 'youtube', url: 'https://youtube.com/wanderlust' }
              ].map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  <i className={`fab fa-${social.platform} text-white text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-sans font-semibold text-lg mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-200 hover:text-secondary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
 
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-200 text-sm">
                © {currentYear} Wanderlust Travel. All rights reserved.
              </p>
               
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-200 text-sm hidden sm:block">Accepted Payments:</span>
              <div className="flex space-x-3">
                {['cc-visa', 'cc-mastercard', 'cc-amex', 'cc-paypal'].map((payment) => (
                  <i 
                    key={payment} 
                    className={`fab fa-${payment} text-gray-300 text-xl hover:text-white transition-colors duration-300`}
                    aria-label={payment.replace('cc-', '').toUpperCase()}
                  ></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
