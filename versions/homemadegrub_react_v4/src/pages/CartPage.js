import { React, useState } from "react";
import '../App.css';
import Product from '../components/Product';
import ProductHeader from '../components/ProductHeader';

function CartPage() {

  // function to get state of cart button
  const [show, setShow] = useState(false);
  const getDta =  (a) => {
    setShow(a);
  }
  return (
    <div className="App" >
      {/* pass down function to header to extract button state, set state show then pass down value to product */}
      <ProductHeader showing={getDta}/>
      <Product toshow={show}/>
    </div>
  );
}

export default CartPage;