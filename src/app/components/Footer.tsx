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
                >
                  <span className="sr-only"> Linkedin</span>
                  <svg
                    className="h-8 w-8 md:h-[50px] md:w-[48px]"
                    xmlns="/"
                    x="0px"
                    y="0px"
                    width="100"
                    height="120"
                    viewBox="0,0,300,150"
                    style={{ fill: "#FFFFFF" }}
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a
                  className="text-white transition hover:text-gray-700/75"
                  href="#"
                >
                  <span className="sr-only"> Telegram </span>
                  <svg
                    className="h-8 w-8 md:h-[48px] md:w-[48px]"
                    aria-hidden="true"
                    xmlns="/"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,300,150"
                    style={{ fill: "#FFFFFF" }}
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z"></path>
                      </g>
                    </g>
                  </svg>
                </a>

                <a
                  className="text-white transition hover:text-gray-700/75"
                  href="https://x.com/gradesnft?s=21&t=eGlfVgPxUrMO1k6xG5gneg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>
                  <svg
                    className="h-8 w-8 md:h-[48px] md:w-[48px]"
                    xmlns="/"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0,0,300,150"
                    style={{ fill: "#FFFFFF" }}
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"></path>
                      </g>
                    </g>
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
