import React from "react";
import Header from "../Header/Header";
import './Banner.css'
import groupImg from "../../../images/group-img.png";

const Banner = () => {
  return (
    <div>
      <div className="hero">
        <Header />

        <div className="banner">
          <div className="hero-Contain">
            <h1>
              <span className="connecting">Connecting</span><br />
              Businesses, Minds, and Creativity.
            </h1>
            <p className="paragraph-1">Your Hub for Business, Wellness, Arts, and More</p>
            <p className="paragraph-2">
              From Business Growth to Mental Wellness, Culture, and Beyond. Your
              Platform for Inspiration and Connection.
            </p>
            <div className="buttons-2">
              <button className="discover">Discover More</button>
              <button className="plans">See Our Plans</button>
            </div>
          </div>
          <svg
              className="star-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="1343"
              height="1118"
              viewBox="0 0 1343 1118"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M429.656 294.593C534.608 198.916 454.697 -41.976 587.037 -93.5049C712.542 -142.372 837.014 5.49099 935.098 97.7902C1009.35 167.66 980.667 323.03 1073.79 364.541C1254.71 445.19 1569.1 240.565 1655.38 418.871C1733.01 579.308 1327.39 612.074 1276.16 782.784C1227.5 944.916 1484.32 1118.64 1401.13 1266.06C1328.21 1395.28 1114.7 1351.55 968.104 1328.66C846.722 1309.7 775.461 1162.8 653.356 1149.27C495.789 1131.8 270.724 1382.44 195.352 1242.98C106.345 1078.28 479.465 927.716 435.305 745.788C392.844 570.861 2.94575 621.016 0.692322 441.024C-1.23188 287.328 316.065 398.146 429.656 294.593Z"
                fill="url(#paint0_linear_220_1908)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_220_1908"
                  x1="819.486"
                  y1="-33.164"
                  x2="1029.14"
                  y2="615.59"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9747FF" stop-opacity="0" />
                  <stop offset="1" stop-color="#6C47FF" />
                </linearGradient>
              </defs>
            </svg> 
          <div className="hero-img">
          <img src={groupImg} alt="" />
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
