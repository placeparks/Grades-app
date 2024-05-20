'use client'

import Image from 'next/image'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from './PencilAnimation.json'

const ComingSoon = () => {
  return (
    <div className='h-screen comingsoon relative'>
      <div className='flex flex-col justify-center items-center md:mt-0 mt-16 pt-8'>
        <Image src='/assets/gradesCS.png' height={104} width={257} alt='' className='h-[77px] w-[217px] md:h-[104px] md:w-[257px]' />
        <p className='text-[20px] md:text-[40px] poppins-bold'>Unlock the Future of Grading!</p>
        <hr className='w-full md:w-[778.01px] h-[3px] bg-black' />
        <h1 className='textOde text-[45px] md:text-[150px]'>COMING SOON!</h1>
        <Lottie animationData={animationData} style={{ height: '200px' }} className='block md:hidden mt-12'/>
      </div>
      <div className='pencil-image'>
        <img src='/assets/Yellow-Pencil.png' alt='Yellow Pencil' className='hidden md:block' />
      </div>
    </div>
  )
}

export default ComingSoon
