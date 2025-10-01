import React from 'react';
import Button from '../common/Button';

const About = () => {
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

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: '15+ years in luxury travel industry'
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80',
      bio: 'Expert in Asian destinations'
    },
    {
      name: 'James Wilson',
      role: 'Travel Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Specialized in adventure travel'
    }
  ];

  return (
    <section className="py-20 bg-[#f7fafc]">
      <div className="container mx-auto px-4">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1a365d] mb-6">
            Our Story
          </h1>
          <p className="text-xl text-[#2d3748] max-w-3xl mx-auto">
            For over 15 years, we've been crafting extraordinary travel experiences that 
            transform ordinary trips into lifelong memories.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
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
            <p className="text-lg text-[#2d3748] mb-6">
              We believe that travel has the power to transform lives, broaden perspectives, 
              and create connections across cultures. Our mission is to design journeys that 
              not only showcase the beauty of our world but also contribute positively to 
              the communities we visit.
            </p>
            <p className="text-lg text-[#2d3748] mb-8">
              Through careful planning, local partnerships, and personalized service, we 
              create experiences that go beyond tourism—they become meaningful chapters in 
              your life story.
            </p>
            <Button className="bg-[#1a365d] text-white hover:bg-[#142844]" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#d4af37] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas fa-${value.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#2d3748]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-2">
                  {member.name}
                </h3>
                <div className="text-[#d4af37] font-medium mb-2">{member.role}</div>
                <p className="text-[#2d3748]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
