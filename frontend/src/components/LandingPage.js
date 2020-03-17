import React, { Component } from "react";
import actions from "../services";

class LandingPage extends Component {
  state = {
    allImages: []
  };
  componentDidMount() {
    //page loads and Iwant to grab all img from DB
    actions.getAllImages().then(allImages => {
      this.setState({ allImages: allImages.data.allImagesFromMyDatabase });
    });
  }

  showImages = () => {
    return this.state.allImages.map((eachImage, index) => {
      return (
        <div className="card" key={index} style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={eachImage.imageUrl}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        // <img
        //   key={index}
        //   src={eachImage.imageUrl}
        //   style={{ minWidth: "350px", width: "350px", height: "300px" }}
        // />
      );
    });
  };

  render() {
    return (
      <div>
        <h1>List of Images I have saved</h1>
        {this.showImages()}
      </div>
    );
  }
}

export default LandingPage;
