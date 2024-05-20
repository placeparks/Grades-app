"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="relative bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo1.png" className=" h-8 w-auto md:h-[72.42px] md:w-[123.81px]" alt="Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         {/* <button type="button" className="tracking-wider relative inline-block leading-4 h-[35px] px-2 md:px-0 md:h-[47.58px] md:w-[159px] transition-all duration-300 rounded-full overflow-hidden z-10 montserrat-bold text-[12px] md:text-[13.41px] bg-[#d9d9d9] border-2 border-black custom-button">
      CONNECT WALLET
      <style jsx>{`
        .custom-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #d9d9d9;
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
      </button> */}
                      <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isOpen ? "true" : "false"}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
            <ul className="montserrat-medium flex flex-col p-4 md:p-0 mt-4 text-[16px] md:text-[22.17px] bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <Link href="/" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E63B51] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
              </li>
              <li>
                <Link href="/comingsoon" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E63B51] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
              </li>
            
              <li>
                <Link href="/comingsoon" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E63B51] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Staking</Link>
              </li>
              <li>
                <Link href="/comingsoon" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#E63B51] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


