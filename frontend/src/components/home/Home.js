import React, { Component } from "react";
import actions from "../../services/index";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <div className="homePage">
      <Carousel autoPlay={true} className="carousel">
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
        {/* <div className="donateDiv">
          <img src="images/3.jpg" className="pics" />
        </div>
        <div className="organizationsDiv" className="carousel-item4">
          <img src="images/4.jpg" className="pics" /> */}
      </Carousel>
    </div>
  );
};

export default Home;
