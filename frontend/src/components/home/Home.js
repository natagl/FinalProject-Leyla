import React, { Component } from "react";
import actions from "../../services/index";

class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
      <div>
        <h1>I'm at home</h1>
      </div>
    );
  }
}

export default Home;
