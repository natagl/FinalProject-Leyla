import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";

function NavBar(props) {
  return (
    <nav className="menu">
      <div className="navWraper">
      <div className="menu__logo">
        <a href="/">
          <img
            src="../images/logo.png"
            style={({ width: "80px" }, { height: "80px" })}
          />
        </a>
      </div>
      <div className="navLinks">
        <NavLink to="/" style={{ color: "gray" }}>
         |  Home  | 
        </NavLink>
        <NavLink to="/woman-collection" style={{ color: "gray" }}>
          {" "}
          Woman Collection
        </NavLink>
        {props.email ? (
          <>
            <NavLink onClick={props.logOut} to="/" style={{ color: "gray" }}>
              Log Out 
            </NavLink>
            {/* <NavLink to="/profile" style={{ color: "gray" }}>
              Profile
            </NavLink> */}
            {/* <NavLink to="/upload-items">Upload Items|</NavLink> */}
            <NavLink to="/show-items" style={{ color: "gray" }}>
              Upload Items
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/sign-up" style={{ color: "gray" }}>
              Sign Up 
            </NavLink>
            <NavLink to="/log-in" style={{ color: "gray" }}>
              Log In 
            </NavLink>
           
            <NavLink to="/cart" style={{ color: "gray" }}>
              <Icon icon={ic_shopping_cart} />
            </NavLink>
          </>
        )}
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
