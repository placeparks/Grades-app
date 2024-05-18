import Image from 'next/image';
import React from 'react';

const Section2: React.FC = () => {
  return (
    <div className='h-fit'>
      <div className='bgsection2'>
        <div className='flex flex-col justify-center items-center pt-24 md:pt-[25%]'>
          <Image 
            src='/assets/Grades.png' 
            height={448} 
            width={796.44} 
            alt='' 
            className='h-32 w-auto pt-4 md:h-[448px] md:w-[796.44px]'
          />
          <p className='poppins-medium text-[14px] md:text-[39.27px] text-white w-3/4 text-center mt-[-32px] md:mt-[-75px]'>
            The &quot;Grades&quot; NFT collection represents a pioneering initiative that combines the allure of digital collectibles with the profound impact of education, creating a unique ecosystem where <span className='bg-[#ffb903] text-black'> learning and collecting merge into a singular, rewarding experience.</span>
          </p>
          <Image 
            src='/assets/Classroom.png' 
            objectFit="cover" 
            objectPosition="center" 
            height={1084}
            width={1520}
            alt='Classroom'
          />
        </div>
      </div>
      <Image 
        src='/assets/Pencils.png' 
        objectFit="cover" 
        objectPosition="center" 
        height={50}
        width={1520}
        alt='pencils'
        className='mt-[-9%]'
      />
    </div>
  );
}

export default Section2;


