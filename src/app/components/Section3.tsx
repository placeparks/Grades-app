"use client"
import Image from 'next/image';
import React from 'react';

const Section3: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 mb-12 md:p-0">
      <Image 
        src='/assets/notes.png' 
        objectFit="cover" 
        objectPosition="center" 
        height={477}
        width={1020}
        alt='pencils'
        className='md:h-[477px] md:w-[1020px] h-[227px] w-[370px]'
      />
      <p className='md:text-3xl text-xl poppins-medium w-full md:w-2/5 leading-[30px] md:leading-[45px] text-center mt-4 md:mt-0 mb-4 md:mb-8'>
        An innovative NFT marketplace and launchpad on Scroll L2, home to the next generation of digital creators. Discover the NFT collections.
      </p>
      <button type="button" className="md:tracking-wider relative inline-block px-4 md:px-0 md:leading-4 md:h-[56.11px] md:w-[260.36px] transition-all duration-300 rounded-full overflow-hidden z-10 montserrat-bold text-md md:text-[21.5px] bg-[#e63b51] border-2 border-black custom-button">
        LAUNCHPAD
        <style jsx>{`
          .custom-button::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #ffba00;
            border-radius: 9999px;
            z-index: -2;
          }
          .custom-button::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: #e63b51; 
            transition: all 0.3s;
            border-radius: 9999px;
            z-index: -1;
          }
          .custom-button:hover::before {
            width: 100%;
          }
        `}</style>
      </button>
    </div>
  )
}

export default Section3;


