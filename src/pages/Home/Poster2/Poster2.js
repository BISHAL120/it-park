import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Poster2.css";
import poster2 from "../../../images/background-2.png";
import card4 from "../../../images/card-4.png";
import card5 from "../../../images/card-5.png";
import card6 from "../../../images/card-6.png";
import Slider from "react-slick";

const Poster2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    customPaging: function (i) {
      return <div className="custom-dot" />;
    },
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
        <ul style={{ margin: "0", padding: "0" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="Poster2">
        <img src={poster2} alt="" />
        <div className="poster2">
          <div className="poster2-detail">
            <h1>Marketing Strategies with Our Innovative Solutions</h1>
            <p>
              Whether you're aiming to boost visibility, engage your audience,
              or drive conversions, we're here to empower your journey with
              strategic insights, creative brilliance, and a passion for
              marketing excellence.
            </p>
            <button className="plans">See Our Plans</button>
          </div>
          <div className="poster2-slider">
            <Slider {...settings}>
              <div>
                <div className="Slider-card">
                  <div className="cards">
                    <div className="slider-img">
                      <img src={card4} alt="" />
                    </div>
                    <div className="overlay2"></div>
                    <div className="slider-detail">
                      <p>Promotion Banner</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Slider-card">
                  <div className="cards">
                    <div className="slider-img">
                      <img src={card5} alt="" />
                    </div>
                    <div className="overlay2"></div>
                    <div className="slider-detail">
                      <p>Promotion Ads</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Slider-card">
                  <div className="cards">
                    <div className="slider-img">
                      <img src={card6} alt="" />
                    </div>
                    <div className="overlay2"></div>
                    <div className="slider-detail">
                      <p>Social Growth</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Slider-card">
                  <div className="cards">
                    <div className="slider-img">
                      <img src={card4} alt="" />
                    </div>
                    <div className="overlay2"></div>
                    <div className="slider-detail">
                      <p>Promotion Banner</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Slider-card">
                  <div className="cards">
                    <div className="slider-img">
                      <img src={card5} alt="" />
                    </div>
                    <div className="overlay2"></div>
                    <div className="slider-detail">
                      <p>Promotion Ads</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Slider-card">
                  <div className="cards">
                    <div className="slider-img">
                      <img src={card6} alt="" />
                    </div>
                    <div className="overlay2"></div>
                    <div className="slider-detail">
                      <p>Social Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster2;
