import React from 'react';
import IBBDLogo from './IBBDLogo';

const Header = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex flex-col items-center justify-center mb-4">
        <IBBDLogo className="w-auto h-16 md:h-20 mb-2" />
      </div>
      
      <h1 className="font-serif text-3xl md:text-4xl text-brand-plum mb-2">
        Intuition Tracker
      </h1>
      
      <p className="text-brand-slate text-sm md:text-base">
        Your journey to intuitive decision-making
      </p>
    </header>
  );
};

export default Header;