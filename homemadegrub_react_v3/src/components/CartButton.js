import React from "react";
import { useSelector } from "react-redux";

function CartButton() {
  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-button">
      <button className="btn btn-cart">
        Cart ({cart})
      </button>
    </div>
  );
}

export default CartButton;
