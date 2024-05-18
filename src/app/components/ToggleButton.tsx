'use client';
import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [active, setActive] = useState<'buy' | 'sell'>('buy');

  return (
    <div className="relative flex items-center w-full max-w-xs md:max-w-md h-[50px] md:h-[63px] border-2 border-black rounded-[15px] bg-[#C56BDD] overflow-hidden">
      <button
        className={`relative flex-1 h-full ${
          active === 'buy' ? 'text-white' : 'text-white'
        } transition-colors duration-300`}
        onClick={() => setActive('buy')}
      >
        {active === 'buy' && (
          <div className="absolute inset-0 m-1 bg-[#5591DA] rounded-xl transition-all duration-500"></div>
        )}
        <span className="relative z-10">BUY</span>
      </button>
      <div className="relative h-[65%] w-[3px] bg-[#6A6A6A]"></div>
      <button
        className={`relative flex-1 h-full ${
          active === 'sell' ? 'text-white' : 'text-white'
        } transition-colors duration-300`}
        onClick={() => setActive('sell')}
      >
        {active === 'sell' && (
          <div className="absolute inset-0 m-1 bg-[#5591DA] rounded-xl transition-all duration-500"></div>
        )}
        <span className="relative z-10">SELL</span>
      </button>
    </div>
  );
};

export default ToggleButton;


