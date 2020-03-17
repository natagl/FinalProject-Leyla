import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
// import { Menu } from "antd/lib";

function NavBar(props) {
  return (
    <nav className="menu">
      <NavLink to="/">Home |</NavLink>
      <NavLink to="/landing-page"> Landing Page|</NavLink>

      {props.email ? (
        <>
          <NavLink onClick={props.logOut} to="/">
            Log Out |
          </NavLink>
          <NavLink to="/profile">Profile|</NavLink>
          {/* <NavLink to="/upload-items">Upload Items|</NavLink> */}
          <NavLink to="/show-items">Upload Items|</NavLink>
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
