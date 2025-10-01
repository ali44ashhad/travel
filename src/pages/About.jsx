import React from 'react'; 
import Button from '../components/common/Button';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      image: 'https://d2gjqh9j26unp0.cloudfront.net/profilepic/61c575e57280e7c11b0ced9ebc467bfe',
      bio: '15+ years in luxury travel industry',
      expertise: 'Destination Strategy & Client Relations'
    },
    {
      name: 'James Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Expert in Asian destinations',
      expertise: 'Operations & Logistics'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Travel Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Specialized in cultural experiences',
      expertise: 'Itinerary Design & Local Partnerships'
    },
    {
      name: 'David Kim',
      role: 'Adventure Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Former expedition guide',
      expertise: 'Adventure Travel & Safety'
    }
  ];

  const values = [
    {
      icon: 'heart',
      title: 'Passion for Travel',
      description: 'We live and breathe travel, constantly exploring new destinations to bring you authentic experiences.'
    },
    {
      icon: 'award',
      title: 'Excellence in Service',
      description: 'From planning to execution, we maintain the highest standards of service and attention to detail.'
    },
    {
      icon: 'leaf',
      title: 'Sustainable Tourism',
      description: 'We are committed to responsible travel that benefits local communities and preserves natural environments.'
    },
    {
      icon: 'users',
      title: 'Personalized Approach',
      description: 'Every journey is tailored to your preferences, ensuring a unique and meaningful travel experience.'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Founded with a vision for personalized luxury travel' },
    { year: '2012', event: 'Expanded to Southeast Asian destinations' },
    { year: '2015', event: 'Launched sustainable tourism initiatives' },
    { year: '2018', event: 'Reached 10,000+ happy travelers' },
    { year: '2023', event: 'Recognized as top luxury travel company' }
  ];

  return (
    <div className="min-h-screen">
  
        {/* Hero Section */}
        <section className="bg-[#1a365d] text-white py-40">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              For over 15 years, we've been crafting extraordinary travel experiences that 
              transform ordinary trips into lifelong memories.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Our Mission"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that travel has the power to transform lives, broaden perspectives, 
                  and create connections across cultures. Our mission is to design journeys that 
                  not only showcase the beauty of our world but also contribute positively to 
                  the communities we visit.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Through careful planning, local partnerships, and personalized service, we 
                  create experiences that go beyond tourism—they become meaningful chapters in 
                  your life story.
                </p>
                <Button variant="primary" size="lg">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`fas fa-${value.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              Our Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-[#d4af37] text-white rounded-full px-4 py-2 text-center font-semibold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <p className="text-lg text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-[#f7fafc]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-2">
                    {member.name}
                  </h3>
                  <div className="text-[#d4af37] font-medium mb-2">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {member.bio}
                  </p>
                  <p className="text-accent text-sm font-medium">
                    {member.expertise}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1a365d] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experienced team create the perfect travel experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Our Team
              </Button>
              <Link  to ="/destinations">
              <Button variant="outline" size="lg"  >
                View Destinations
              </Button></Link>
            </div>
          </div>
        </section>
     
    </div>
  );
};

export default About;