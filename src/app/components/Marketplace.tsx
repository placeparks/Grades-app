'use client';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import ToggleButton from './ToggleButton';


interface Card {
  image: string;
  name: string;
  price: string;
}

const cards: Card[] = [
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "1.47 ETH",
  },
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "2.35 ETH",
  },
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "0.95 ETH",
  },
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "3.21 ETH",
  },
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "4.76 ETH",
  },
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "2.89 ETH",
  },
];

const Marketplace: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center p-4'>
            <Image src='/assets/market.png' height={306} width={1034} alt='' className='mb-4 h-full w-72 md:h-[306px] md:w-[1034px]' />
            <div className='mb-12 w-full flex justify-center'>
                <ToggleButton />
            </div>
            <div className="flex justify-center">
                <div className="grid gap-20 mb-8 md:mb-12 md:grid-cols-3 dark:bg-gray-800">
                    {cards.map((card, index) => (
                        <div key={index} className="max-w-sm bg-[#5591DA] p-5 border border-2 border-black rounded-[35px] shadow dark:bg-gray-800">
                            <a href="#">
                                <img className="rounded-t-lg" src={card.image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl poppins-semibold text-black dark:text-white">{card.name}</h5>
                                </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        <i className="fab fa-ethereum" style={{ fontSize: '24px', marginRight: '8px' }}></i>
                                        {card.price}
                                    </p>
                                <button type="button" className="md:tracking-wider relative inline-block px-4 md:px-0 md:leading-4 md:h-[53px] md:w-[159px] transition-all duration-300 rounded-2xl overflow-hidden z-10 montserrat-bold text-md md:text-[20px] bg-[#e63b51] border-4 border-black custom-button">
                                    Buy NFT
                                    <style jsx>{`
                                        .custom-button::after {
                                            content: '';
                                            position: absolute;
                                            bottom: 0;
                                            left: 0;
                                            width: 100%;
                                            height: 100%;
                                            background-color: #ffba00;
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
                                            z-index: -1;
                                        }
                                        .custom-button:hover::before {
                                            width: 100%;
                                        }
                                    `}</style>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
         
        </div>
    );
};

export default Marketplace;


