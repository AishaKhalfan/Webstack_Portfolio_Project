import { React, useState, useEffect, useCallback } from "react";
import { HandleFetch } from "./Api";
//import "./App.css";
import CartButton from "./CartButton";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from "../redux/CartActions";

function Product({ toshow }) {
  const [pro, setPro] = useState([]);
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems); // Get cart state from Redux


  useEffect(() => {
    const getList = async () => {
      try {
        await HandleFetch().then((data) => {
          setPro(data);
          setFiltered(data)
        });
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, []);

  const handleSearchResults = useCallback(() => {
    if (value === "") {
      return pro;
    } else {
        return pro.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    }
  }, [value, pro]);

  useEffect(() => {
    // Search for food
    let filtered = handleSearchResults();
    setFiltered(filtered);
  }, [value, handleSearchResults]);


  return (
    <div className="pizza">
      <div className="">
        <input
        className="input"
        placeholder="search for food"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          
        />
        <CartButton />
      </div>
      <div className="food-grid">
        {filtered &&
          filtered.map((item) => {
            return (
              // added an onclick event to each pizza item
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="pizza1" key={item.amount}
              >
                <h3>{item.name}</h3>
                <p className="p">{item.decription}</p>
                <p className="p">{item.amount}$</p>
                <button
                  className="btn"
                  onClick={() => {
                    dispatch(addToCart(item.name));
                    // added a function to add the pizza to the cart
                    alert(`${item.name} has been added to cart`);
                  }}
                >
                  Add to basket
                </button>
              </div>
            );
          })}
      </div>
      {/* cart window */}
      {/* if show is true */}
      {toshow ? (
        <div className=" cart-cont">
          <div className="cart-list">
            <h1>Cart</h1>
            {/* cart items */}
            {cart && cart.map((item, index) => {
              return (
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="cart"
                  key={index}
                >
                  <h3>{item.name}</h3>
                  <p>{item.amount}$</p>
                  <button className="btn" onClick={(e)=>{
                   dispatch(removeFromCart(item.name)); 
                  }} >Remove Item</button>
                </div>
              );
            })}
          </div>
          <div className="total">
            <h1>Total</h1>
            <p>{cart.reduce((a, b) => a + b.amount, 0)}$</p>
            <button>Check out</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Product;
