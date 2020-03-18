import React, { Component } from "react";
import actions from "../../services/index";
import AOS from 'aos';
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <div className="homePage">
      <div className="item" data-aos="fade-up">
        <img src="images/1.jpg" className="pics" />
      </div>
      <div className="item" data-aos="fade-down">
        <img src="images/2.jpg" className="pics" />
      </div>
      {/* <Carousel autoPlay={true} className="carousel">
        <div className="carousel-item1">
          <img
            src="images/1.jpg"
            className="pics"
          />
          <button>New In</button>
        </div>
        <div className="findDiv">
          <img src="images/2.jpg" className="pics" />
          <button>New In</button>
        </div>
      </Carousel> */}
    </div>
  );
};

export default Home;
