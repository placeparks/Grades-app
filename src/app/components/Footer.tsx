import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="">
      <footer className="bgsection4">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-24 md:pt-16 sm:px-6 lg:px-8 ">
          <div className="mx-auto flex flex-col justify-center items-center">
            <strong className="poppins-bold tracking-wide md:tracking-widest block text-center md:text-[40px] text-white mt-40 text-[27px]">
              Get More Updates
            </strong>
            <p className="text-white poppins-medium text-center text-md md:text-xl">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and Tricks
            </p>
            <form className="mt-6">
              <div className="relative max-w-full">
                <label className="sr-only" htmlFor="email">
                  {" "}
                  Email{" "}
                </label>
                <input
                  className="md:w-[799px] w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                  id="email"
                  type="email"
                  placeholder=""
                />
                <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-[#3E3E3E] px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700">
                  I&apos;M IN
                </button>
              </div>
            </form>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-md">
              <p className="poppins-regular mt-4 text-center text-white lg:text-left lg:text-xl">
                Experience the cutting-edge of digital creativity on our NFT
                marketplace and launchpad. Scroll L2 is where visionary creators
                thrive. Dive into our unique NFT collections now.
              </p>

              <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                <a
                  className="text-white transition hover:text-gray-700/75"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> GitHub </span>
                  <svg
                    className="h-8 w-8 md:h-[48px] md:w-[48px]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.867 8.166 6.839 9.49.5.092.683-.216.683-.481 0-.237-.008-.866-.013-1.7-2.782.605-3.37-1.343-3.37-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.832.092-.646.35-1.087.637-1.338-2.22-.252-4.555-1.11-4.555-4.944 0-1.091.39-1.985 1.03-2.682-.103-.253-.446-1.268.098-2.64 0 0 .84-.269 2.75 1.025A9.561 9.561 0 0112 6.845a9.56 9.56 0 012.502.338c1.91-1.294 2.75-1.025 2.75-1.025.545 1.372.202 2.387.1 2.64.641.697 1.03 1.591 1.03 2.682 0 3.842-2.337 4.69-4.565 4.936.359.309.679.921.679 1.856 0 1.34-.012 2.42-.012 2.751 0 .268.18.579.688.48A9.988 9.988 0 0022 12c0-5.52-4.48-10-10-10z"
                    />
                  </svg>
                </a>

                <a
                  className="text-white transition hover:text-gray-700/75"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> LinkedIn </span>
                  <svg
                    className="h-8 w-8 md:h-[48px] md:w-[48px]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0zm-6.92 20.45h-3.91v-6.44c0-1.54-.03-3.52-2.14-3.52-2.14 0-2.46 1.67-2.46 3.4v6.56H6.02V8.99h3.75v1.56h.05c.52-.99 1.8-2.04 3.71-2.04 3.97 0 4.7 2.61 4.7 6v6.94h-.01zm-11.4-13h-.03c-1.29 0-2.12-.85-2.12-1.9 0-1.08.85-1.9 2.15-1.9 1.29 0 2.12.82 2.15 1.9 0 1.05-.83 1.9-2.15 1.9zM4.8 20.45H.89V8.99H4.8v11.46z" />
                  </svg>
                </a>

                <a
                  className="text-white transition hover:text-gray-700/75"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>
                  <svg
                    className="h-8 w-8 md:h-[48px] md:w-[48px]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left">
              <div>
                <strong className="poppins-bold text-white md:text-xl">
                  {" "}
                  MARKETPLACE{" "}
                </strong>
                <ul className=" mt-4 md:mt-6 space-y-1 md:space-y-2.5">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-700/75"
                      href="/comingsoon"
                    >
                      {" "}
                      Explore{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-gray-700/75"
                      href="/comingsoon"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-gray-700/75"
                      href="/comingsoon"
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-gray-700/75"
                      href="/comingsoon"
                    >
                      Help
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <strong className="poppins-bold text-white md:text-xl">
                  {" "}
                  LINKS{" "}
                </strong>
                <ul className="mt-4 md:mt-6 space-y-1 md:space-y-2.5">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-700/75"
                      href="/comingsoon"
                    >
                      {" "}
                      About Us{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-gray-700/75"
                      href="/comingsoon"
                    >
                      {" "}
                      Staking{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-gray-700/75"
                      href="/comingsoon"
                    >
                      {" "}
                      Grades Dex{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-gray-700/75"
                      href="/comingsoon"
                    >
                      {" "}
                      Become Partners{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
