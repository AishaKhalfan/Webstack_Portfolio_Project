import React from "react";
import { useSelector } from "react-redux";

function CartButton() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-button">
      <button className="btn btn-cart">
        Cart ({cart.cartItems.length})
      </button>
    </div>
  );
}

export default CartButton;
