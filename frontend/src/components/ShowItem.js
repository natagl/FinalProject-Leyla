import React, { Component } from "react";
import actions from "../services/index";
import CreateItem from "./CreateItem";

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
      return (
        <div key={index}>
          {eachItem.title}
          <ul key={index}>{eachItem.description}</ul>
          <ul key={index}>{eachItem.type}</ul>
          <ul key={index}>{eachItem.size}</ul>
          <ul key={index}>{eachItem.img}</ul>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <CreateItem />
        {this.state.ready ? this.displayItems() : ""}
      </div>
    );
  }
}

export default ShowItem;
