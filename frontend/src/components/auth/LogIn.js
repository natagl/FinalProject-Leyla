import React, { Component, Fragment } from "react";
import actions from "../../services/index";
import "./LogIn.css";

class LogIn extends Component {
  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let user = await actions.logIn(this.state);
      this.props.setUser({ ...user.data });
      this.props.doFlashMessage("Logged In Successfully", true);
    } catch (err) {
      console.log("=-=-=-=-=-", err);

      //   if (err.response.data === "Unauthorized") {
      //     // this function is fake because we're not actually passing it in
      //     // look at the full-stack-library-app to see how to pass in this function for flash messages
      //     this.props.doFlashMessage(
      //       "Email/Password Combination Incorrect, please check credentials and try again",
      //       false
      //     );
      //   } else if (err.response.data === "Bad Request") {
      //     this.props.doFlashMessage(
      //       "Please make sure to enter an Email AND Password",
      //       false
      //     );
      //   }
    }
  };
  render() {
    return (
      <Fragment>
        <div className="wraper">
        <div className="body">
          <h1 className="h1">LOG IN</h1>
          <br />
          <form onSubmit={this.handleSubmit} className="formContent">
            <label name="email">Email</label>
            <br />
            <input
              className="email"
              name="email"
              type="email"
              onChange={this.handleChange}
            />
            <br />
            <label name="password">Password</label>
            <input
              className="password"
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <br />
            <input className="button" type="submit" value="LOG IN" />
          </form>
        </div>
        <div className="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default LogIn;
