import React, { Component } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
  });

  return (
    <div className="homePage">
      <div className="item1" data-aos="fade-right">
        <img src="images/3.jpg" className="pics"></img>
        <button className="centered">NEW IN</button>
      </div>
      <div className="item2" data-aos="fade-left">
        <img src="images/1.jpg" className="pics"></img>
      </div>
      <div className="item3" data-aos="fade-right">
        <img src="images/2.jpg" className="pics" />
      </div>
    </div>
  );
};

export default Home;
