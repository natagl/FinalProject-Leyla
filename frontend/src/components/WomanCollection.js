import React, { Component } from "react";
import actions from "../services";
import { Button, Card } from "antd/lib";
import "./LandingPage.css";
import SearchFeature from "./SearchFeature";

const { Meta } = Card;

class WomanCollection extends Component {
  state = {
    allImages: [],
    searchTerm: [],
    filterImages: [],
    search: ""
  };
  componentDidMount() {
    //page loads and Iwant to grab all img from DB
    actions.getAllImages().then(allImages => {
      this.setState({
        allImages: allImages.data.allImagesFromMyDatabase,
        filterImages: allImages.data.allImagesFromMyDatabase
      });
    });
  }

  showImages = () => {
    return this.state.filterImages.map((eachImage, index) => {
      return (
        <div className="card" key={index}>
          <img
            className="cardImg"
            src={eachImage.imageUrl}
            alt="Card image cap"
          />
          <div className="card-body">
            <ul className="card-text">{eachImage.title}</ul>
            <ul className="card-text">{eachImage.description}</ul>
            <ul className="card-text">{eachImage.size}</ul>
            <ul className="card-text">${eachImage.price}</ul>
            {/* <a href="/cart" className="btn"> */}
            <Button className="item-add-button" type="submit">
              Add to Cart
            </Button>
          </div>
        </div>
      );
    });
  };

  handleInputChange = e => {
    let images = [...this.state.allImages].filter(eachImage => {
      let bigString =
        eachImage.title + " " + eachImage.price + " " + eachImage.size;
      console.log(bigString);
      return bigString.includes(e.target.value);
    });

    this.setState({
      filterImages: images,
      search: e.target.value
    });
  };

  render() {
    return (
      <div className="collectionBody">
        <div
          className="collectionSearch"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "1rem auto"
          }}
        >
          <SearchFeature
            search={this.state.search}
            handleInputChange={this.handleInputChange}
          />
        </div>
        <div className="collectionTitle">
          <h2>LEYLA'S STYLE</h2>
        </div>
        <div className="eachCard">{this.showImages()}</div>
      </div>
    );
  }
}

export default WomanCollection;