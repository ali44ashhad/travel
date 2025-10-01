import React from 'react'; 
import Button from '../components/common/Button';
import Card from '../components/ui/Card';

const Sustainability = () => {
  const initiatives = [
    {
      icon: 'leaf',
      title: 'Environmental Protection',
      description: 'Minimizing our carbon footprint and protecting natural habitats',
      actions: [
        'Carbon offset programs for all travel',
        'Partnership with conservation organizations',
        'Eco-friendly accommodations preference',
        'Waste reduction and recycling programs'
      ]
    },
    {
      icon: 'users',
      title: 'Community Support',
      description: 'Empowering local communities through responsible tourism',
      actions: [
        'Fair wages for local guides and staff',
        'Support for local businesses and artisans',
        'Community development projects',
        'Cultural preservation initiatives'
      ]
    },
    {
      icon: 'hand-holding-heart',
      title: 'Ethical Operations',
      description: 'Maintaining high ethical standards in all our operations',
      actions: [
        'Animal welfare protection policies',
        'Respect for cultural heritage sites',
        'Transparent business practices',
        'Regular sustainability audits'
      ]
    }
  ];

  const achievements = [
    { number: '50+', label: 'Conservation Projects Supported' },
    { number: '100%', label: 'Carbon Neutral Operations' },
    { number: '200+', label: 'Local Communities Partnered With' },
    { number: '15', label: 'Environmental Awards' }
  ];

  return (
    <div className="min-h-screen">
   
        {/* Hero Section */}
        <section className="bg-[#1a365d] text-white py-40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Sustainability
            </h1>
            <p className="text-xl text-[#f7fafc] max-w-2xl mx-auto">
              Committed to protecting our planet and supporting communities through responsible travel practices
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                Our Commitment to Sustainable Travel
              </h2>
              <p className="text-lg text-[#2d3748] mb-8">
                At Wanderlust, we believe that travel should be a force for good. Our sustainability initiatives are integrated into every aspect of our operations, from trip planning to community engagement and environmental protection.
              </p>
              <p className="text-lg text-[#2d3748]">
                We are committed to creating travel experiences that not only provide unforgettable memories for our guests but also contribute positively to the destinations we visit and the planet we share.
              </p>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              Our Sustainability Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="p-6">
                  <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mb-4">
                    <i className={`fas fa-${initiative.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-[#2d3748] mb-4">
                    {initiative.description}
                  </p>
                  <ul className="space-y-2">
                    {initiative.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-center text-sm text-[#2d3748]">
                        <i className="fas fa-check text-[#d4af37] mr-2"></i>
                        {action}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-serif font-bold text-[#d4af37] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-[#2d3748] font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#1a365d] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Join Our Sustainability Journey
            </h2>
            <p className="text-xl text-[#f7fafc] mb-8 max-w-2xl mx-auto">
              Together, we can make travel a positive force for our planet and its people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-[#d4af37] text-white hover:bg-[#b9972e]">
                Learn More About Our Programs
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
              >
                Support Our Initiatives
              </Button>
            </div>
          </div>
        </section>
      
    </div>
  );
};

export default Sustainability;
