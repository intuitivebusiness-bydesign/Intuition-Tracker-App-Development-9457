import React from 'react';

// Using the exact butterfly from your branding
const ButterflyLogo = ({ className = "w-12 h-12", position = "top" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 20C40 20 35 25 35 30C35 40 45 45 50 45C55 45 65 40 65 30C65 25 60 20 50 20Z"
        fill="#a079a7"
      />
      <path
        d="M50 45C45 45 35 50 35 60C35 65 40 70 50 70C60 70 65 65 65 60C65 50 55 45 50 45Z"
        fill="#a37a3e"
      />
      <path
        d="M49 30C49 30 48 40 48 45C48 50 49 60 49 60"
        stroke="#4b2c5e"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ButterflyLogo;