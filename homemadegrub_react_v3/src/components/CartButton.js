import React from "react";
import "./App.css";

function CartButton({ showing }) {
  const [show, setShow] = React.useState(true);

  return (
    <button
      href="/cart"
      className="cart-btn"
      onClick={() => {
        setShow(!show);
        showing(!show);
      }}
    >
      {show ? "close" : "View Cart"}
    </button>
  );
}

export default CartButton;
