// import React from 'react';

// const Button = ({ 
//   children, 
//   variant = 'primary', 
//   size = 'md', 
//   onClick, 
//   disabled = false,
//   type = 'button',
//   className = '',
//   ...props 
// }) => {
//   const baseClasses =
//     'font-sans font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4';

//   // 🎨 Refined but similar theme
//   const variants = {
//     primary:
//       'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
//     secondary:
//       'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-300',
//     outline:
//       'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white focus:ring-blue-300',
//     ghost:
//       'text-blue-600 hover:bg-blue-50 focus:ring-blue-200',
//   };

//   const sizes = {
//     sm: 'px-3 py-2 text-sm',
//     md: 'px-6 py-3 text-base',
//     lg: 'px-8 py-4 text-lg',
//   };

//   const disabledClasses = 'opacity-50 cursor-not-allowed';

//   const classes = `
//     ${baseClasses}
//     ${variants[variant]}
//     ${sizes[size]}
//     ${disabled ? disabledClasses : ''}
//     ${className}
//   `.trim();

//   return (
//     <button
//       type={type}
//       className={classes}
//       onClick={onClick}
//       disabled={disabled}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
  href,
  ...props 
}) => {
  const baseClasses = 'font-sans font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
    secondary: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-300',
    outline: 'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white focus:ring-blue-300',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-200'
  };


  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? disabledClasses : ''}
    ${className}
  `.trim();

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        to={href}
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;