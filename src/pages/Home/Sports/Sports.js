import React from "react";
import "./Sports.css";
import sports1 from "../../../images/sports-1.png";
import sports2 from "../../../images/spors-2.png";
import score from "../../../images/score.png";
import Slider from "react-slick";

const Sports = () => {
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
      <div>
        <div className="Section-1">
          <div className="sports-heading">
            <h1>Unleash Unbeatable Deals at Our Online Sale Event.</h1>
            <p>
              From the comfort of your home, join the thrill of scoring
              incredible deals. Don't miss out – the best savings are just a
              click away!
            </p>
            <button
              style={{
                background: "linear-gradient(180deg, #5C6FFF 0%, #384AD3 100%)",
              }}
              className="plans"
            >
              See Our Plans
            </button>
          </div>
          <div className="sports-menu">
            <button>All</button>
            <button>Sports</button>
            <button>Culture</button>
            <button>Entertainment</button>
            <button>Info sessions</button>
            <button>Seminars</button>
          </div>
          <div className="sports-cards">
            <Slider {...settings}>
              <div>
                <div className="sports-card">
                  <div className="sports-img">
                    <img src={sports1} alt="" />
                  </div>
                  <div className="sports-detail">
                    <h1>Today premier league match</h1>
                  </div>
                  <div>
                    <img src={score} alt="" />
                  </div>
                  <div className="sports-btn">
                    <button>Watch Now</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="sports-card">
                  <div className="sports-img">
                    <img src={sports1} alt="" />
                  </div>
                  <div className="sports-detail">
                    <h1>Today premier league match</h1>
                  </div>
                  <div>
                    <img src={score} alt="" />
                  </div>
                  <div className="sports-btn">
                    <button>Watch Now</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="sports-card">
                  <div className="sports-img">
                    <img src={sports1} alt="" />
                  </div>
                  <div className="sports-detail">
                    <h1>Today premier league match</h1>
                  </div>
                  <div>
                    <img src={score} alt="" />
                  </div>
                  <div className="sports-btn">
                    <button>Watch Now</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="sports-card">
                  <div className="sports-img">
                    <img src={sports1} alt="" />
                  </div>
                  <div className="sports-detail">
                    <h1>Today premier league match</h1>
                  </div>
                  <div>
                    <img src={score} alt="" />
                  </div>
                  <div className="sports-btn">
                    <button>Watch Now</button>
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

export default Sports;
