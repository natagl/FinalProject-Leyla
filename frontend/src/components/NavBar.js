import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
// import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'

function NavBar(props) {
  return (
    <nav className="menu">
      <div className="navWraper">
      
    
        <div className="navLinks">
          <a href="/">
            <img
              src="../images/logo.png"
              style={({ width: "80px" }, { height: "80px" })}
            />
          </a>
          <NavLink className="a1" to="/" style={{ color: "gray" }}>
            Home 
          </NavLink>
          <NavLink className="a1" to="/woman-collection" style={{ color: "gray" }}>
            {" "}
            Woman Collection
          </NavLink>
          {props.email ? (
            <>
              <NavLink className="a1" onClick={props.logOut} to="/" style={{ color: "gray" }}>
                Log Out
              </NavLink>
              {/* <NavLink to="/profile" style={{ color: "gray" }}>
              Profile
            </NavLink> */}
              {/* <NavLink to="/upload-items">Upload Items|</NavLink> */}
              <NavLink className="a1" to="/show-items" style={{ color: "gray" }}>
                Upload Items
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="a1" to="/sign-up" style={{ color: "gray" }}>
                Sign Up
              </NavLink>
              <NavLink className="a1" to="/log-in" style={{ color: "gray" }}>
                Log In
              </NavLink>

              <NavLink className="a1" to="/cart" style={{ color: "gray" }}>
                <Icon size={25} icon={shoppingCart} />
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
