import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import Profile from "./components/profile/Profile";
import actions from "./services/index";
import CreateItem from "./components/CreateItem";
import ShowItem from "./components/ShowItem";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import ImageUpload from "./components/imageUpload/imageUpload";

class App extends Component {
  state = {};

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    console.log("cool");
  }

  setUser = user => this.setState(user);

  logOut = async () => {
    let res = await actions.logOut();
    this.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };

  render() {
    return (
      <BrowserRouter>
        <NavBar email={this.state.email} logOut={this.logOut} />
        {this.state.email}
        {/* <CreateItem /> */}
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/sign-up"
            render={props => <SignUp {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/log-in"
            render={props => <LogIn {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} user={this.state} />}
          />
          <Route
            exact
            path="/show-items"
            render={props => <ShowItem {...props} user={this.state} />}
          />
          {/* <Route
            exact
            path="/upload-items"
            render={props => <ImageUpload {...props} user={this.state} />}
          /> */}

          <Route component={NotFound} />
        </Switch>

        {/* <ShowItem /> */}
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
