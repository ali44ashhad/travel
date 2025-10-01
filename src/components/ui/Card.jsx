import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'p-6',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-lg border border-gray-100',
    elevated: 'bg-white shadow-xl border border-gray-100',
    outlined: 'border-2 border-gray-200 bg-white',
    filled: 'bg-gray-50 border border-gray-200',
    dark: 'bg-primary text-white shadow-lg'
  };
  
  const hoverEffects = {
    default: 'hover:shadow-xl hover:-translate-y-1',
    elevated: 'hover:shadow-2xl hover:-translate-y-2',
    outlined: 'hover:border-primary hover:shadow-md',
    filled: 'hover:bg-gray-100 hover:shadow-md',
    dark: 'hover:shadow-xl hover:-translate-y-1'
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${padding}
    ${hover ? hoverEffects[variant] : ''}
    ${className}
  `.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Card Components
export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-serif font-semibold text-primary ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-600 mt-2 ${className}`}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-6 ${className}`}>
    {children}
  </div>
);

// Image Card Variant
export const ImageCard = ({ 
  image, 
  title, 
  description, 
  action, 
  overlay = false,
  className = '' 
}) => (
  <Card 
    className={`overflow-hidden group ${className}`} 
    hover={true}
    padding="p-0"
  >
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-xl font-serif font-semibold text-white mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-gray-200 text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
    {action && (
      <div className="p-6">
        {action}
      </div>
    )}
  </Card>
);

export default Card;