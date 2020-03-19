import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  showCart = () => {
    return this.props.user.cartItem.map(eachItem => {
      return (
        <div className="cart" key={eachItem.imageUrl}>
          <div className="cartBody">
            <img className="cartImg" src={eachItem.imageUrl} alt="CartImg" />
            <div className="cart-body">
              <ul className="cart-text">{eachItem.title}</ul>
              <ul className="cart-text">{eachItem.description}</ul>
              <ul className="cart-text">{eachItem.size}</ul>
              <ul className="cart-text">${eachItem.price}</ul>
              <button className="cart-button">Remove</button>
            </div>
          </div>
          <footer className="cartFooter">
            <button
              className="footerBtn1"
              onClick={() => this.props.history.push("/sign-up")}
            >
              CHECKOUT
            </button>
            <button className="footerBtn2">CONTINUE</button>
          </footer>
        </div>
      );
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div style={{ width: "55%", margin: "3rem auto" }}>
          <h1>SHOPING CART</h1>

          {this.showCart()}
        </div>
      </div>
    );
  }
}

export default Cart;
