

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

//   // 🎨 Updated theme colors
//   const variants = {
//     primary:
//       'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-300',
//     secondary:
//       'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-300',
//     outline:
//       'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white focus:ring-purple-300',
//     ghost:
//       'text-purple-600 hover:bg-purple-50 focus:ring-purple-200',
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

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses =
    'font-sans font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4';

  // 🎨 Refined but similar theme
  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
    secondary:
      'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-300',
    outline:
      'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white focus:ring-blue-300',
    ghost:
      'text-blue-600 hover:bg-blue-50 focus:ring-blue-200',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? disabledClasses : ''}
    ${className}
  `.trim();

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
