import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className=''>
      <footer className="bgsection4">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-24 md:pt-16 sm:px-6 lg:px-8 ">
          <div className="mx-auto flex flex-col justify-center items-center">
            <strong className="poppins-bold tracking-wide md:tracking-widest block text-center md:text-[40px] text-white mt-40 text-[27px]">
              Get More Updates
            </strong>
            <p className='text-white poppins-medium text-center text-md md:text-xl'>
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and Tricks
            </p>
            <form className="mt-6">
              <div className="relative max-w-full">
                <label className="sr-only" htmlFor="email"> Email </label>
                <input
                  className="md:w-[799px] w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                  id="email"
                  type="email"
                  placeholder=""
                />
                <button
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-[#3E3E3E] px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
                >
                  I&apos;M IN
                </button>
              </div>
            </form>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-md">
              <p className="poppins-regular mt-4 text-center text-white lg:text-left lg:text-xl">
                Experience the cutting-edge of digital creativity on our NFT marketplace and launchpad. Scroll L2 is where visionary creators thrive. Dive into our unique NFT collections now.
              </p>

              <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                <a
                  className="text-white transition hover:text-gray-700/75"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <svg className="h-8 w-8 md:h-[48px] md:w-[48px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  className="text-white transition hover:text-gray-700/75"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>
                  <svg className="h-8 w-8 md:h-[48px] md:w-[48px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  className="text-white transition hover:text-gray-700/75"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>
                  <svg className="h-8 w-8 md:h-[48px] md:w-[48px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left">
              <div>
                <strong className="poppins-bold text-white md:text-xl"> MARKETPLACE </strong>
                <ul className=" mt-4 md:mt-6 space-y-1 md:space-y-2.5">
                  <li>
                    <a className="text-white transition hover:text-gray-700/75" href="#"> Explore </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-gray-700/75" href="#">
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-gray-700/75" href="#">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-gray-700/75" href="#">
                      Help
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <strong className="poppins-bold text-white md:text-xl"> LINKS </strong>
                <ul className="mt-4 md:mt-6 space-y-1 md:space-y-2.5">
                  <li>
                    <a className="text-white transition hover:text-gray-700/75" href="#"> About Us </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-gray-700/75" href="#"> Staking </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-gray-700/75" href="#"> Grades Dex </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-gray-700/75" href="#"> Become Partners </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;


