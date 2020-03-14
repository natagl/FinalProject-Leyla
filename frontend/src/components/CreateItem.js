import React, { Component } from "react";
import actions from "../services/index";
import { Typography, Button, Form, Input } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

const Sizes = [
  { key: 1, value: "Extar Small" },
  { key: 2, value: "Small" },
  { key: 3, value: "Medium" },
  { key: 4, value: "Large" },
  { key: 5, value: "Extra Large" }
];

class CreateItem extends Component {
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let item = await actions.createItem(this.state);
      console.log(item);
    } catch (err) {
      console.log("*****", err);
    }
  };

  render() {
    return (
      <div className="" style={{ maxWidth: "700px", margin: "2rem auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Title level={2}> Upload Items</Title>
        </div>
        <br />
        <br />
        <Form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <Input name="title" type="text" onChange={this.handleChange} />
          <br />
          <br />
          <label>Description</label>
          <TextArea
            name="description"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Price($)</label>
          <Input name="price" type="number" onChange={this.handleChange} />
          <br />
          <br />
          <label>Size</label>
          <select onChange={this.handleChange}>
            {Sizes.map(item => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
          <br />
          <br />
          <Button type="primary" size="large" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default CreateItem;
