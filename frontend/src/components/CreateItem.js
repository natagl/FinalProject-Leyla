import React, { useState, Component } from "react";
import actions from "../services/index";
import { Typography, Button, Form, Input } from "antd";
// import { Icon } from "react-icons-kit";
// import { plusCircle } from "react-icons-kit/fa/plusCircle";

const { Title } = Typography;
const { TextArea } = Input;

const Sizes = [
  { key: 1, value: "Extra Small" },
  { key: 2, value: "Small" },
  { key: 3, value: "Medium" },
  { key: 4, value: "Large" },
  { key: 5, value: "Extra Large" }
];

class CreateItem extends Component {
  state = {
    imageUrl: "",
    title: "",
    description: "",
    price: "",
    size: "",
    allImages: [] //initiali populated from DB
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  // const [SizeValue, setSizeValue] = useState(1);

  onSizeSelectChange = e => {
    console.log(e.target.name, e.target.value);
    let value = Sizes[e.target.value - 1].value;
    console.log(value);
    this.setState({ size: value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    try {
      let item = await actions.createItem(this.state);
      let allImagesCopy = [...this.state.allImages];
      allImagesCopy.push(this.state.imageUrl);
      this.setState({
        allImages: allImagesCopy
      });
      console.log(item);
    } catch (err) {
      console.log("*****", err);
    }
  };

  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    actions // where we will go to cloudinary to save our pic
      .handleUpload(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url }); //this is the url we got back from cloudinary
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });

    // // this method submits the form
    // // handleSubmit = e => {
    // //   e.preventDefault();

    // actions
    //   .saveNewThing(this.state)
    //   .then(res => {
    //     console.log("added: ", res);
    //     let copyOfAllImages = [...this.state.allImages];
    //     copyOfAllImages.unshift(res);
    //     this.setState({ allImages: copyOfAllImages });
    //     // here you would redirect to some other page
    //   })
    //   .catch(err => {
    //     console.log("Error while adding the thing: ", err);
    //   });
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
          <Input name="size" type="string" />
          <select onChange={this.onSizeSelectChange}>
            {Sizes.map(item => (
              <option name={item.value} key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
          <br />
          <br />
          <Input
            type="file"
            onChange={e => this.handleFileUpload(e)}
          ></Input>
          <br />
          <br />
          <Button type="submit" size="large" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>

        {/* <h1>List of Images I have saved</h1>

        {this.showImages()} */}
      </div>
    );
  }
}

export default CreateItem;
