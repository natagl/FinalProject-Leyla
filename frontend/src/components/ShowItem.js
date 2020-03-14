import React, { Component } from "react";
import actions from "../services/index";

class ShowItem extends Component {
  state = {
    itemArr: [],
    ready: false
  };

  async componentDidMount() {
    let itemArrfromDB = await actions.showItem();
    console.log(itemArrfromDB);
    this.setState({
      itemArr: itemArrfromDB.data,
      ready: true
    });
  }

  displayItems = () => {
    return this.state.itemArr.map((eachItem, index) => {
      return <div key={index}>{eachItem.title}</div>;
    });
  };

  render() {
    return <div>{this.state.ready ? this.displayItems() : ""}</div>;
  }
}

export default ShowItem;
