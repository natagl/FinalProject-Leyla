import React, { Component } from "react";
import { Input } from "antd";
const { Search } = Input;

class SearchFeature extends Component {
  handleInputChange = () => {
    // this.setState({
    //   search: this.search.value
    // });
    this.props.handleInputChange(this.search.value);
  };

  render() {
    return (
      <form>
        <Search
            value={this.props.search}
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.props.handleInputChange}
        />
      </form>
    );
  }
}

export default SearchFeature;
