// Motion & UI
import { motion } from "framer-motion";
import Button from "../common/Button";

// Icons
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

// --- Motion Variants (Reusable Animations) ---
const fadeInUp = (delay = 0, distance = 20) => ({
  initial: { y: distance, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 }
});

const fadeInLeftRight = (delay = 0, fromLeft = true) => ({
  initial: { x: fromLeft ? -20 : 20, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
  viewport: { once: true }
});

// --- Animated Connector ---
const ScrollAnimatedConnector = ({ delay = 0 }) => (
  <div className="relative h-64 w-full flex justify-center">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-2 h-full"
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 20 400"
        className="absolute inset-0"
      >
        <motion.path
          d="M10,0 
             C10,80 25,120 10,200 
             C-5,280 10,320 10,400"
          stroke="#d4af37"
          strokeWidth="3"
          strokeDasharray="8,8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: delay + 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </motion.svg>

      {/* Scrolling Dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#d4af37] rounded-full border-4 border-white shadow-xl z-10"
        initial={{ y: 0 }}
        whileInView={{ y: [0, 380, 0] }}
        transition={{
          duration: 4,
          delay: delay + 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        viewport={{ once: true }}
      />
    </motion.div>
  </div>
);

// --- Carousel ---
const DestinationsCarousel = () => {
  const destinations = [
    {
      name: "Thailand",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2070&q=80",
      description: "Land of smiles with vibrant culture and pristine beaches"
    },
    {
      name: "Vietnam",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=2070&q=80",
      description: "Rich history, stunning landscapes, and incredible cuisine"
    },
    {
      name: "Japan",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2070&q=80",
      description: "Ancient traditions meet modern innovation"
    },
    {
      name: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=2072&q=80",
      description: "Island paradise with diverse cultures and traditions"
    }
  ];

  return (
    <div className="w-full relative py-16">
      <style>
        {`
          .swiper-button-disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }
          .destinations-carousel .swiper-slide {
            transition: transform 0.3s ease;
          }
          .destinations-carousel .swiper-slide:hover {
            transform: translateY(-8px);
          }
        `}
      </style>

 

     
    </div>
  );
};

// --- Roadmap Main ---
const Roadmap = () => {
  const sections = [
    {
      id: 1,
      title: "Personalized Adventures",
      subtitle: "Your trip, your way",
      description:
        "Crafted to align with your unique interests, our personalized adventures are the definitive way to deeply engage with and experience a destination. Every detail is tailored to your preferences, creating a journey that's uniquely yours.",
      image:
        "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=0&k=20&c=kt8-RRzCDunpxgKFMBBjZ6jSteetNhhSxHZFvHQ0hNU=",
      features: [
        "Custom itineraries",
        "Local expert guides",
        "Flexible scheduling",
        "Unique experiences"
      ]
    },
    {
      id: 2,
      title: "Exquisite Journeys",
      subtitle: "A class apart",
      description:
        "Wanderlust's exquisite journeys are meticulously curated for the discerning traveler. We focus on unparalleled personalization, offering deep, immersive connections to each destination that elevate the entire travel experience.",
      image:
        "https://media.istockphoto.com/id/1511069617/photo/women-hikers-embracing-the-untamed-beauty-of-tasmania-through-exhilarating-bushwalking.jpg?s=612x612&w=0&k=20&c=T8sDlMsvby3usWMjkdvQobeMycD0YkwyreeRF9VFWE8=",
      features: [
        "Luxury accommodations",
        "Private transfers",
        "Exclusive access",
        "Gourmet dining"
      ]
    },
    {
      id: 3,
      title: "Active Explorations",
      subtitle: "Awaken your spirit",
      description:
        "Whether it's cycling through countryside, trekking majestic mountains, or kayaking crystal waters, our expert guides ensure every journey is an exhilarating experience where your safety remains our top priority.",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Adventure activities",
        "Safety-first approach",
        "Expert equipment",
        "Small groups"
      ]
    },
    {
      id: 4,
      title: "Group Journeys",
      subtitle: "Seamlessly organized",
      description:
        "Wanderlust's extensive experience and robust network allow us to provide exceptional group travel, combining consistently high service with unique itineraries, all at an excellent value for memorable shared experiences.",
      image:
        "https://images.unsplash.com/photo-1616431505321-8adf35f76a58?q=80&w=1391&auto=format&fit=crop",
      features: [
        "Group discounts",
        "Shared experiences",
        "Expert leadership",
        "Social connections"
      ]
    }
  ];

  return (
    <section className="py-20 bg-light relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div className="text-center mb-20" {...fadeInUp(0.1)}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a365d] mb-6">
            Your Journey Roadmap
          </h1>
          <p className="text-xl text-[#2d3748] max-w-4xl mx-auto leading-relaxed">
            Follow the path to your perfect adventure. Each step connects to
            create an unforgettable travel experience tailored just for you.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="relative">
          {sections.map((section, index) => (
            <div key={section.id} className="relative">
              <motion.div
                className={`flex flex-col lg:flex-row items-stretch gap-8 mb-8 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
                {...fadeInUp(0.2 + index * 0.1, 50)}
              >
                {/* Image */}
                <div className="lg:w-1/2 relative">
                  <div className="rounded-2xl overflow-hidden shadow-lg h-full">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full min-h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 flex items-center">
                  <div
                    className={`p-6 lg:p-12 ${
                      index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"
                    }`}
                  >
                    <motion.h2
                      className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a365d] mb-4"
                      {...fadeInLeftRight(0.3 + index * 0.1, index % 2 === 0)}
                    >
                      {section.title}
                    </motion.h2>

                    <motion.p
                      className="text-xl text-[#d4af37] font-semibold mb-4"
                      {...fadeInLeftRight(0.4 + index * 0.1, index % 2 === 0)}
                    >
                      {section.subtitle}
                    </motion.p>

                    <motion.p
                      className="text-lg text-gray-600 mb-6 leading-relaxed"
                      {...fadeInLeftRight(0.5 + index * 0.1, index % 2 === 0)}
                    >
                      {section.description}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                      className="grid grid-cols-2 gap-3 mb-8"
                      {...fadeInUp(0.6 + index * 0.1)}
                    >
                      {section.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </motion.div>

                    <motion.div {...fadeInUp(0. + index * 0.1)}>
                     {/* <Button 
  variant="primary" 
  size="lg"  
  className="group flex items-center"
>
  <span>Learn More</span>
  <RiArrowRightSLine className="ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300" />
</Button> */}

                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {index < sections.length - 1 && (
                <ScrollAnimatedConnector delay={0.3 + index * 0.2} />
              )}
            </div>
          ))}
        </div>

        {/* Carousel */}
        <motion.div className="mt-20" {...fadeInUp(0.8, 50)}>
          <DestinationsCarousel />
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%2366645c' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />
      </div>
    </section>
  );
};

export default Roadmap;
