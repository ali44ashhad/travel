import React from 'react';

const Gallery = () => {
  const destinations = [
    {
      id: 1,
      title: "Vietnam",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: "Sensing the Timeless Charm of Vietnam",
      link: "#",
      colClass: "col-6 col-md-8 col-lg-6"
    },
    {
      id: 2,
      title: "Laos",
      image: "https://media.istockphoto.com/id/810049010/photo/wat-xieng-thong-temple-luang-pra-bang-laos.jpg?s=612x612&w=0&k=20&c=ZIJOnoCA1ZdCFkakqiqfPd3TnEfNG9qoylJFpcdS0wY=",
      description: "Savoring the Simply Beautiful Tranquility",
      link: "#",
      colClass: "col-6 col-md-4 col-lg-3"
    },
    {
      id: 3,
      title: "Thailand",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
      description: "Blossoming Soul Amidst Nature",
      link: "#",
      colClass: "col-6 col-md-6 col-lg-3"
    },
    {
      id: 4,
      title: "Myanmar",
      image: "https://media.istockphoto.com/id/626515242/photo/sunrise-landscape-view-with-silhouettes-of-old-temples-bagan.jpg?s=612x612&w=0&k=20&c=ng3BpRW9hSXaEhUM9PJuF7OzxmBwIjvqYoNW-_Gty8g=",
      description: "Awakening the Rhythms of Inner Bliss",
      link: "#",
      colClass: "col-6 col-md-6 col-lg-3"
    },
    {
      id: 5,
      title: "Multi-Country Tours",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80",
      description: "Discover two or three destinations in Southeast Asia in one journey",
      link: "#",
      colClass: "col-6 col-md-8 col-lg-6"
    },
    {
      id: 6,
      title: "Cambodia",
      image: "https://t3.ftcdn.net/jpg/01/32/85/56/360_F_132855615_eWgknDrRIFXvMNfjZBa2e39xkewJUmvz.jpg",
      description: "Cherishing the Heartfelt Hospitality of Khmer People",
      link: "#",
      colClass: "col-6 col-md-4 col-lg-3"
    },
    {
      id: 7,
      title: "Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80",
      description: "Indonesia is the world's largest archipelago",
      link: "#",
      colClass: "col-6 col-md-4 col-lg-3"
    },
    {
      id: 8,
      title: "Malaysia",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
      description: "Malaysia is known for its diversity in landscapes and ethnic culture",
      link: "#",
      colClass: "col-6 col-md-4 col-lg-3"
    },
    {
      id: 9,
      title: "Philippines",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1206&q=80",
      description: "Famous for tropical climate and stunning islands",
      link: "https://luxtraveldmc.com/destinations/philippines",
      colClass: "col-6 col-md-4 col-lg-3"
    },
    {
      id: 10,
      title: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1052&q=80",
      description: "Smallest country in Southeast Asia, but dynamic and modern",
      link: "https://luxtraveldmc.com/destinations/singapore",
      colClass: "col-6 col-md-4 col-lg-3"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-gray-900 mb-4">
          Featured Destinations
        </h2>
        <p className="text-xl text-gray-600 font-['Inter'] max-w-2xl mx-auto">
          Discover the world's most breathtaking places with our curated selection of luxury destinations
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
          {destinations.map((dest, index) => (
            <div
              key={dest.id}
              className={`
                ${dest.colClass.includes('col-6') ? 'col-span-1' : ''}
                ${dest.colClass.includes('col-md-4') ? 'md:col-span-4' : ''}
                ${dest.colClass.includes('col-md-6') ? 'md:col-span-6' : ''}
                ${dest.colClass.includes('col-md-8') ? 'md:col-span-8' : ''}
                ${dest.colClass.includes('col-lg-3') ? 'lg:col-span-3' : ''}
                ${dest.colClass.includes('col-lg-6') ? 'lg:col-span-6' : ''}
                relative group
              `}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-80 animate-fade-in-up"
                   style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}>
                
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    <a href={dest.link} className="text-white hover:text-gray-200">{dest.title}</a>
                  </h3>
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm text-gray-200 mb-4 leading-relaxed">{dest.description}</p>
                    <a href={dest.link} className="inline-block bg-white text-gray-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                      View Details
                    </a>
                  </div>
                </div>

                <a href={dest.link} className="absolute inset-0 z-10" title={dest.title} aria-label={`Explore ${dest.title}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
      `}</style>
    </section>
  );
};

export default Gallery;
