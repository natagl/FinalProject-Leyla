import React, { Component, Fragment } from "react";
import actions from "../../services/index";
import "./SignUp.css";

class SignUp extends Component {
  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let user = await actions.signUp(this.state);
      this.props.setUser({ ...user.data });
    } catch (err) {
      console.log("*****", err.message);
    }
  };
  render() {
    return (
      <Fragment>
        <div className="wraperSignIn">
          <div className="cardSignIn">
            <div className="card-headerSignIn">
              <h2>REGISTER</h2>
              <br />
              <div className="card-bodySignIn">
                <form
                  onSubmit={this.handleSubmit}
                  className="formContentSignIn"
                >
                  <label name="email">Email</label>
                  <br />
                  <input
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    className="email"
                  />
                  <span className="focus-input100" placeholder="Email"></span>
                  <br />
                  <br />
                  <label name="password">Password</label>
                  <br />
                  <input
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    className="password"
                  />

                  <p>
                    By creating an account you agree to our{" "}
                    <a href="#">Terms and Privacy</a>.
                  </p>
                  <input className="creatBtn" type="submit" value="CREATE ACCOUNT" />
                  <br />
                  <p>
                    Already have an account? <a href="#">Sign In</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SignUp;
