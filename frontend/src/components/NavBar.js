import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="menu">
      <NavLink to="/">Home |</NavLink>
      <NavLink to="/show-items">Show Items|</NavLink>
      <NavLink to="/upload-items">Upload Items|</NavLink>

      {props.email ? (
        <>
          <NavLink onClick={this.logOut} to="/">
            Log Out |
          </NavLink>
          <NavLink to="/profile">Profile|</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/sign-up">Sign Up |</NavLink>
          <NavLink to="/log-in">Log In |</NavLink>
        </>
      )}
    </nav>
  );
}

export default NavBar;
