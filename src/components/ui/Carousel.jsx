import React, { useState, useEffect, useCallback } from 'react';

const Carousel = ({
  items,
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showNavigation = true,
  className = '',
  renderItem,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + items.length) % items.length);
  }, [items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, isPaused, nextSlide]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  if (!items || items.length === 0) {
    return (
      <div className={`flex items-center justify-center h-64 bg-gray-100 rounded-2xl ${className}`}>
        <p className="text-gray-500">No items to display</p>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Carousel Items */}
      <div className="relative h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {renderItem ? renderItem(item, index) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                {typeof item === 'string' ? (
                  <img
                    src={item}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  item
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showNavigation && items.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-primary"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-primary"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-secondary scale-125' 
                  : 'bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {items.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
          {currentIndex + 1} / {items.length}
        </div>
      )}
    </div>
  );
};

// Thumbnail Carousel Variant
export const ThumbnailCarousel = ({ 
  items, 
  mainImageIndex, 
  onThumbnailClick,
  className = '' 
}) => {
  return (
    <div className={className}>
      {/* Main Image */}
      <div className="mb-4 rounded-2xl overflow-hidden">
        <img
          src={items[mainImageIndex]}
          alt={`Main view ${mainImageIndex + 1}`}
          className="w-full h-96 object-cover"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => onThumbnailClick(index)}
            className={`rounded-lg overflow-hidden transition-all duration-300 ${
              index === mainImageIndex 
                ? 'ring-2 ring-secondary scale-105' 
                : 'opacity-70 hover:opacity-100 hover:scale-105'
            }`}
          >
            <img
              src={item}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;