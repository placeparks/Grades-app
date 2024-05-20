"use client";
import React from "react";
import { useRouter } from 'next/navigation';

const Section1: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/comingsoon");
  };
  return (
    <section className="bgsection1 md:h-[100vh] p-4 md:p-0 md:pl-12  flex flex-row justify-between items-center">
      <div className="flex flex-col justify-center items-start">
        <h1 className="md:mt-[-13%] md:max-w-2/4 textOde text-[36px] md:text-[111.64px] text-black ">
          GRADES NFT
        </h1>
                      <p className="w-2/4 md:w-3/5 poppins-medium mb-6 text-justify text-black mt-[1rem] md:mt-[-1rem] lg:mb-4 text-[12px] md:text-[25.51px]">


          creating a unique ecosystem where learning and collecting merge into a
          singular{" "}
        </p>

        <button
          type="button"
          onClick={handleClick}
                    className="md:tracking-wider tracking-wide relative inline-block px-2 md:px-0 md:leading-4 md:h-[56.11px] md:w-[260.36px] transition-all duration-300 rounded-full overflow-hidden z-10 montserrat-bold text-md md:text-[21.5px] bg-[#e63b51] border-2 border-black custom-button"

        >
           Gradepaper
          <style jsx>{`
            .custom-button::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #e63b51;
              border-radius: 9999px;
              z-index: -2;
            }
            .custom-button::before {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0%;
              height: 100%;
              background-color: #ffba00;
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
    </section>
  );
};

export default Section1;


